import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(ID, Status) {
  return { ID, Status };
}

const rows = [
  createData('DEN001', 'working'),
  createData('DEN002', 'working'),
  createData('DEN003', 'in maintainence'),
  createData('SV001', 'in maintainence'),
  createData('SV002', 'working'),
  createData('SP003', 'in maintainence'),
  createData('SP001', 'working'),
  createData('SP002', 'working'),
  createData('HC003', 'in maintainence'),
  createData('HC001', 'in maintainence'),
  createData('HC002', 'working'),
  createData('HC004', 'in maintainence'),
  createData('OH001', 'working'),
  createData('OH002', 'working'),
  createData('RC001', 'working'),
  createData('RC002', 'working'),
  createData('RC003', 'working'),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="center">Washer (ID)</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="center">{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


