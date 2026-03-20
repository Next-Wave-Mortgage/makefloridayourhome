"use client";

import { useState, useCallback, useMemo } from "react";
import countyPaths from "@/data/florida-county-paths.json";

interface FloridaCountyMapProps {
  countiesWithPrograms: Map<string, number>;
  selectedCounty: string | null;
  onCountyClick: (county: string) => void;
  onCountyHover: (county: string | null) => void;
}

interface CountyPath {
  name: string;
  d: string;
  cx: number;
  cy: number;
}

const WIDTH = 800;
const HEIGHT = 750;
const counties = countyPaths as CountyPath[];

function getOpacity(count: number, max: number): number {
  if (max <= 1) return 0.7;
  return 0.3 + ((count - 1) / (max - 1)) * 0.7;
}

export default function FloridaCountyMap({
  countiesWithPrograms,
  selectedCounty,
  onCountyClick,
  onCountyHover,
}: FloridaCountyMapProps) {
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);

  const maxProgramCount = useMemo(() => {
    let max = 0;
    countiesWithPrograms.forEach((count) => {
      if (count > max) max = count;
    });
    return max;
  }, [countiesWithPrograms]);

  const handleMouseEnter = useCallback(
    (county: string) => {
      setHoveredCounty(county);
      onCountyHover(county);
    },
    [onCountyHover]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredCounty(null);
    onCountyHover(null);
  }, [onCountyHover]);

  const handleClick = useCallback(
    (county: string) => {
      onCountyClick(county);
    },
    [onCountyClick]
  );

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      role="img"
      aria-label="Interactive map of Florida counties"
    >
      <title>Florida County Map</title>

      {/* County shapes */}
      {counties.map(({ name, d }) => {
        const programCount = countiesWithPrograms.get(name);
        const hasPrograms = programCount !== undefined && programCount > 0;
        const isSelected = selectedCounty === name;
        const isHovered = hoveredCounty === name;

        let fill = "#F2FAF6";
        let fillOpacity = 1;
        let stroke = "#DCDFDD";
        let strokeWidth = 0.5;

        if (isSelected) {
          fill = "#006948";
          fillOpacity = 1;
          stroke = "#FFFFFF";
          strokeWidth = 2.5;
        } else if (hasPrograms) {
          fill = "#006948";
          fillOpacity = getOpacity(programCount, maxProgramCount);
        }

        if (isHovered && !isSelected) {
          stroke = "#006948";
          strokeWidth = 2;
        }

        return (
          <path
            key={name}
            d={d}
            data-county={name}
            fill={fill}
            fillOpacity={fillOpacity}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            className="cursor-pointer transition-all duration-150"
            onMouseEnter={() => handleMouseEnter(name)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(name)}
            role="button"
            tabIndex={0}
            aria-label={`${name} County${hasPrograms ? `, ${programCount} program${programCount > 1 ? "s" : ""}` : ""}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick(name);
              }
            }}
          />
        );
      })}

      {/* Program count indicators */}
      {counties.map(({ name, cx, cy }) => {
        const programCount = countiesWithPrograms.get(name);
        if (!programCount || programCount < 1) return null;
        if (isNaN(cx) || isNaN(cy)) return null;

        const isSelected = selectedCounty === name;
        const r = programCount > 1 ? 12 : 6;

        return (
          <g key={`dot-${name}`} className="pointer-events-none">
            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill="#FFFFFF"
              stroke="#006948"
              strokeWidth={1.5}
              opacity={isSelected ? 1 : 0.9}
            />
            {programCount > 1 && (
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#006948"
                fontSize="11"
                fontWeight="700"
                className="select-none"
              >
                {programCount}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
