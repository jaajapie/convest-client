import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

const rows = [
  createData(
    "1",
    "Critical Illness V1 ",
    "$50",
    "$2.5",
    "2019-07-12 12:39:36",
    "2019-10-10 12:39:36",
    "0x1058c06431bedba32b01fbed6512355dcad5a19ea2234c9bd1123606b1c95087",
    ""
  ),
  createData(
    "5",
    "Critical Illness V1",
    "$30",
    "$1.5",
    "2019-07-13 09:38:17",
    "2019-10-21 09:38:17",
    "0x1058c06431bedba32b01fbed6512355dcad5a19ea2234c9bd1123606b1c95087",
    ""
  ),
  createData(
    "10",
    "Hospital Benefit V1",
    "$400",
    "$20",
    "2019-07-14 14:56:50",
    "2019-09-12 14:56:50",
    "0x1058c06431bedba32b01fbed6512355dcad5a19ea2234c9bd1123606b1c95087",
    ""
  ),
  createData(
    "15",
    "Hospital Benefit V1",
    "$300",
    "$15",
    "2019-07-14 15:03:03",
    "2019-09-12 15:03:03",
    "0x1058c06431bedba32b01fbed6512355dcad5a19ea2234c9bd1123606b1c95087",
    ""
  ),
  createData(
    "20",
    "Hospital Benefit V2",
    "$300",
    "$15",
    "2019-07-15 09:08:31",
    "2019-12-12 09:08:31",
    "0x1058c06431bedba32b01fbed6512355dcad5a19ea2234c9bd1123606b1c95087",
    ""
  ),
];

function createData(no, protocol, adress, timePurchased, tx, reward, status) {
  return {
    no,
    protocol,
    adress,
    timePurchased,
    tx,
    reward,
    status,
  };
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Referral Transactions
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const handleRequestSort = (event, property) => {
  const isAsc = orderBy === property && order === "asc";
  setOrder(isAsc ? "desc" : "asc");
  setOrderBy(property);
};

const handleSelectAllClick = (event) => {
  if (event.target.checked) {
    const newSelecteds = rows.map((n) => n.name);
    setSelected(newSelecteds);
    return;
  }
  setSelected([]);
};

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "CoverID.",
  },
  {
    id: "product",
    numeric: false,
    disablePadding: false,
    label: "Product",
  },
  {
    id: "premium",
    numeric: true,
    disablePadding: false,
    label: "Premium",
  },
  {
    id: "reward_earned",
    numeric: true,
    disablePadding: false,
    label: "Reward Earned",
  },
  {
    id: "start_date",
    numeric: false,
    disablePadding: false,
    label: "Start Date",
  },
  {
    id: "end_date",
    numeric: false,
    disablePadding: false,
    label: "End Date",
  },
  {
    id: "tx_hash",
    numeric: true,
    disablePadding: false,
    label: "Tx Hash",
  },
  {
    id: "link",
    numeric: true,
    disablePadding: false,
    label: "Link",
  },
];

const TableContent = () => {
  const [selected, setSelected] = React.useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          mb: 2,
          padding: "0 20px 0 20px",
          borderRadius: "5px",
          border: "1px solid #ffffff14",
        }}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.no);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.no)}
                      tabIndex={-1}
                      key={row.no}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.no}
                      </TableCell>
                      <TableCell align="left">
                        <Stack
                          direction="row"
                          spacing={2}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          {row.protocol}
                        </Stack>
                      </TableCell>
                      <TableCell align="left">{row.adress}</TableCell>
                      <TableCell align="left">{row.timePurchased}</TableCell>
                      <TableCell align="left">{row.tx}</TableCell>
                      <TableCell align="left">{row.reward}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="center">
                        <Link href="/buycover" passHref>
                          <LinkIcon></LinkIcon>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
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
};

export default TableContent;
