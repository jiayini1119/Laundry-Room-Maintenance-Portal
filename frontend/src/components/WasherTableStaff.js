import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Select, FormControl, MenuItem, FormHelperText, alpha, Box, Button, FormGroup, FormControlLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar, Typography } from '@mui/material';
import Label from './label';
import axios from "axios";

const headCells = [
  {
    id: 'name',
    numeric: true,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
];

const StatusFilterDropdown = ({ statusValue, handleStatusFilter }) => {
  return (
    <FormControl style={{ width: '30%' }}>
      <Select value={statusValue} onChange={handleStatusFilter}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="working">Working</MenuItem>
        <MenuItem value="maintenance">In Maintenance</MenuItem>
      </Select>
      <FormHelperText>Select machine status</FormHelperText>
    </FormControl>
  );
};

const DormFilterDropdown = ({ dormValue, handleDormFilter }) => {
  return (
    <FormControl style={{ width: '20%' }}>
      <Select value={dormValue} onChange={handleDormFilter}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="Hedrick">Hedrick</MenuItem>
        <MenuItem value="Sunset">Sunset</MenuItem>
        <MenuItem value="Rieber">Rieber</MenuItem>
        <MenuItem value="Deneve">Deneve</MenuItem>
        <MenuItem value="Saxon">Saxon</MenuItem>
      </Select>
      <FormHelperText>Select a dorm</FormHelperText>
    </FormControl>
  );
};


function EnhancedTableHead(props) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'center'}
            padding={'normal'}
            style={{ width: '50%' }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 1 },
        pr: { xs: 8, sm: 5 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 00%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          align="center"
        >
          Washer Table
        </Typography>
      )}
      <FormGroup style={{ width: '25%' }}>
        <FormControlLabel control={<Switch checked={props.checked} onChange={props.handleSwitchChange} size="small" />} label="Allow changes" />
      </FormGroup>
      <StatusFilterDropdown statusValue={props.statusValue} handleStatusFilter={props.handleStatusFilter} />
      <DormFilterDropdown dormValue={props.dormValue} handleDormFilter={props.handleDormFilter} />
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const WasherTableStaff = () => {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [call, setCall] = useState(false);
  const [statusValue, setStatusValue] = useState("maintenance");
  const [dormValue, setDormValue] = useState("all");
  const [allowStatusChange, setAllowStatusChange] = useState(false);

  // settings available in Washer table header
  const onStatusFilterChange = (event) => {
    setStatusValue(event.target.value)
  }

  const onDormFilterChange = (event) => {
    setDormValue(event.target.value)
  }

  const onSwitchChange = (event) => {
    setAllowStatusChange(event.target.checked)
  }

  const filterWasher = (data, status) => {
    if (status === "all") {
      return data;
    } else {
      const filteredWashers = [];
      const statusCheck = status === "working" ? true : false;
      for (let i = 0; i < data.length; i++) {
        if (data[i].status === statusCheck) {
          filteredWashers.push(data[i]);
        }
      }
      return filteredWashers;
    }
  }

  useEffect(() => {
    if (call) {
      if (dormValue === "all") {
        axios('http://localhost:4000/api/washer/getall')
          .then(res => {
            setRows(filterWasher(res.data, statusValue));
          }).catch(err => console.log(err))
      } else {
        axios('http://localhost:4000/api/washer/search?search=' + dormValue)
          .then(res => {
            let dormId = res.data[0]._id
            axios('http://localhost:4000/api/washer/id/' + dormId).then(res => {
              setRows(filterWasher(res.data, statusValue));
            }).catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      }
      setCall(false);
    }
  }, [call]);

  useEffect(() => {
    setCall(true);
  }, [statusValue, dormValue])

  const handleChangeStatus = (washerId) => {
    axios.put('http://localhost:4000/api/washer/id/' + washerId)
      .then(() => {
        setRows([...rows]);
        setCall(true);
      })
      .catch(err => console.log(err))
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper  sx={{ width: '80%', mt:1, mr:15, ml:16 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          statusValue={statusValue}
          handleStatusFilter={onStatusFilterChange}
          dormValue={dormValue}
          handleDormFilter={onDormFilterChange}
          handleSwitchChange={onSwitchChange}
          checked={allowStatusChange}
        />
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
              stickyHeader
            />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell
                        id={labelId}
                        scope="row"
                        padding="none"
                        align={'center'}
                        style={{ width: '50%' }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="center">
                        {allowStatusChange ?
                          <Button onClick={() => handleChangeStatus(row._id)} color={(row.status === true && 'success') || 'error'}>
                            {row.status === true && 'Working' || 'In Maintenance'}
                          </Button> :
                          <Label color={(row.status === true && 'success') || 'error'}>
                            {row.status === true && 'Working' || 'In Maintenance'}
                          </Label>
                        }
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 9, 11]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
export default WasherTableStaff;