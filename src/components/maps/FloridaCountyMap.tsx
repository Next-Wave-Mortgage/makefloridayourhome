"use client";

import { useState, useCallback, useMemo } from "react";
import { geoPath, geoAlbers } from "d3-geo";
import floridaGeo from "@/data/florida-counties.json";

interface FloridaCountyMapProps {
  countiesWithPrograms: Map<string, number>;
  selectedCounty: string | null;
  onCountyClick: (county: string) => void;
  onCountyHover: (county: string | null) => void;
}

interface CountyFeature {
  type: string;
  id: string;
  properties: { NAME: string; STATE: string; COUNTY: string };
  geometry: GeoJSON.Geometry;
}

const WIDTH = 800;
const HEIGHT = 750;

/* Florida-focused Albers projection */
const projection = geoAlbers()
  .center([0, 28.5])
  .rotate([83.5, 0])
  .parallels([26, 30])
  .scale(6200)
  .translate([WIDTH / 2, HEIGHT / 2]);

const pathGenerator = geoPath().projection(projection);

const features = (floridaGeo as GeoJSON.FeatureCollection).features as unknown as CountyFeature[];

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

  /* Pre-compute paths + centroids */
  const countyData = useMemo(() => {
    return features.map((feature) => {
      const name = feature.properties.NAME;
      const d = pathGenerator(feature.geometry as GeoJSON.Geometry) || "";
      const centroid = pathGenerator.centroid(
        feature.geometry as GeoJSON.Geometry
      );
      return { name, d, centroid };
    });
  }, []);

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
      {countyData.map(({ name, d }) => {
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
      {countyData.map(({ name, centroid }) => {
        const programCount = countiesWithPrograms.get(name);
        if (!programCount || programCount < 1) return null;
        if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) return null;

        const isSelected = selectedCounty === name;
        const r = programCount > 1 ? 12 : 6;

        return (
          <g key={`dot-${name}`} className="pointer-events-none">
            <circle
              cx={centroid[0]}
              cy={centroid[1]}
              r={r}
              fill="#FFFFFF"
              stroke="#006948"
              strokeWidth={1.5}
              opacity={isSelected ? 1 : 0.9}
            />
            {programCount > 1 && (
              <text
                x={centroid[0]}
                y={centroid[1]}
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
