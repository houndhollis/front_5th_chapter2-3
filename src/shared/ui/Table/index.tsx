import { TableProps } from "./type"

const Table = ({ className, ...props }: TableProps<HTMLTableElement>) => (
  <div className="w-full overflow-auto">
    <table className={`table-fixed w-full caption-bottom text-sm ${className}`} {...props} />
  </div>
)

const TableHeader = ({ className, ...props }: TableProps<HTMLTableSectionElement>) => (
  <thead className={`[&_tr]:border-b ${className}`} {...props} />
)

const TableBody = ({ className, ...props }: TableProps<HTMLTableSectionElement>) => (
  <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props} />
)

const TableRow = ({ className, ...props }: TableProps<HTMLTableRowElement>) => (
  <tr
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-14 ${className}`}
    {...props}
  />
)

const TableHead = ({ className, ...props }: TableProps<HTMLTableCellElement>) => (
  <th
    className={`h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  />
)

const TableCell = ({ className, ...props }: TableProps<HTMLTableCellElement>) => (
  <td className={`p-2 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props} />
)

Table.displayName = "Table"
TableHeader.displayName = "TableHeader"
TableBody.displayName = "TableBody"
TableRow.displayName = "TableRow"
TableHead.displayName = "TableHead"
TableCell.displayName = "TableCell"

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.Head = TableHead
Table.Cell = TableCell

export { Table }
