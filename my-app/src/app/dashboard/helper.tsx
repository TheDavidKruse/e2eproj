'use server';
import { TableRow, TableCell } from '@mui/material';
export async function filterData(
  data: Record<string, string | number>[] = [],
  filter: string = ''
) {
  if (data === null || filter === null) {
    return null;
  }
  ('use server');
  return data.map((row) => {
    const shouldReturn = Object.values(row)
      .map((item) => item?.toString().toLowerCase())
      .find((field) => field.includes(filter.toLowerCase()));
    return shouldReturn && row ? (
      <TableRow>
        {Object.keys(row).map((key) => (
          <TableCell align="right">{row[key]}</TableCell>
        ))}
      </TableRow>
    ) : undefined;
  });
}
