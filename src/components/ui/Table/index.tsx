import type { ReactNode } from "react";
import { type TableProps} from "@/types/table";


function Table(props: TableProps) {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="border-b border-white text-justify">
            {props.columnsHeaders.map((header : string, index : number) => (
              <th key={index}>{header.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="gap-4 content-center border-b border-white min-w-full">
              {row.map((column: ReactNode , columnIndex : number) => (
                <td 
                  key={columnIndex}
                  // className="flex" 
                > 
                  {column ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
