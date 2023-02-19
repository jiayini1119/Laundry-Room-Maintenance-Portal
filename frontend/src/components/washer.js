import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'ID', label: 'ID', align: 'center',minWidth: 170 },
  { id: 'Status', label: 'Status', align: 'center', minWidth: 100 },
];

function createData(ID, Status) {
  return { ID, Status };
}

const rows = [
  createData('DEN001', 'working'),
  createData('DEN002', 'working'),
  createData('DEN003', 'in maintainence'),
  createData('DEN004', 'in maintainence'),
  createData('DEN005', 'in maintainence'),
  createData('DEN006', 'in maintainence'),
  createData('SV001', 'in maintainence'),
  createData('SV002', 'working'),
  createData('SV003', 'working'),
  createData('SP001', 'in maintainence'),
  createData('SP002', 'working'),
  createData('SP003', 'working'),
  createData('HC001', 'in maintainence'),
  createData('HC002', 'in maintainence'),
  createData('HC003', 'working'),
  createData('HC004', 'in maintainence'),
  createData('OH001', 'working'),
  createData('OH002', 'working'),
  createData('RC001', 'working'),
  createData('RC002', 'working'),
  createData('RC003', 'working'),
  createData('RC004', 'working'),
  createData('RC005', 'working'),
  createData('RC006', 'working'),
];


export default function StatusTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="status table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 7, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}



