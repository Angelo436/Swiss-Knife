import type { ReactNode } from "react";

export type TableProps = {
    columnsHeaders: string[];
    rows: Array<ReactNode[]>;
}
