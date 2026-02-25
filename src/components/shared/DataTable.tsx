interface DataTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-gray/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-left text-[14px] sm:text-[15px]">
          {caption && (
            <caption className="sr-only">{caption}</caption>
          )}
          <thead>
            <tr className="bg-dark-green text-white">
              {headers.map((header, i) => (
                <th
                  key={header}
                  className={`px-5 py-4 text-[13px] font-bold uppercase tracking-wider sm:text-[14px] ${
                    i === 0 ? "border-l-[3px] border-l-brand-green" : ""
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-t border-border-gray/40 transition-colors hover:bg-green-tint/50 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-green-tint/30"
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-5 py-4 text-dark-green/80 ${
                      cellIndex === 0
                        ? "border-l-[3px] border-l-brand-green/20 font-semibold text-dark-green"
                        : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
