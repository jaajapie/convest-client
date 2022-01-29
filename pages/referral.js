import * as React from 'react';
import Header from '../components/Header'
import InputUnstyled from '@mui/base/InputUnstyled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import styles from 'styled-components'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';


import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

const RefferalArea = styled('div')(({ theme }) => ({
  display:'flex',
  flexDirection: 'column',
  position: 'relative'
}));

const RefferalHeadArea = styled('div')(({ theme }) => ({
    height: '350px',
    width:'100%',
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color:'#ffff',
    paddingRight: '5rem',
    paddingLeft: '5rem',
    transition: '0.3s',
    borderBottom: '1px solid #ffffff14',
    background: 'linear-gradient(0deg ,#37609d,#081587)',
    // backgroundImage: 'url("refferal/header-bg.jpg")',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingRight: '1rem',
      paddingLeft: '1rem',
    }
}));

const RefferalHeadLeftArea = styled('div')(({ theme }) => ({
  marginLeft:'30px',
  [theme.breakpoints.down('sm')]: {
      marginLeft: '0px'
  }
}));

const RefferalHeadRightArea = styled('div')(({ theme }) => ({
  marginLeft:'30px',
  width: '35%',
  [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      width: '100%'
  }
}));

const RefferalHeaderText = styled('h2')(({ theme }) => ({
  fontSize: '40px',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    fontWeight: 700,
  }
}));

const RefferalHeaderHightlightText = styled('span')(({ theme }) => ({
  backgroundImage: 'linear-gradient(90deg,#fad14a,#f5a624)',
  fontSize: '40px',
  fontWeight: 700,
  borderRadius: '8px',
  padding: '4px 8px 4px 8px',
  marginLeft: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    fontWeight: 700,
  }
}));

const RefferalSubHeaderText = styled('p')(({ theme }) => ({
  fontSize: '18px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  }
}));


const RefferalStackCopyArea = styled('div')(({ theme }) => ({
  width:'100%',
  display:'flex',
  flexDirection: 'row',
  justifyContent: 'flext-start',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  }
}));

const RefferalClaimHeadText = styled('h4')(({ theme }) => ({
  fontWeight: 600,
  marginBottom: '10px',
  lineHeight: 1.25,
  fontSize:'2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize:'1.5rem',
  }
}));

const RefferalClaimSubHeadText = styled('p')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  color:'#acacac',
  [theme.breakpoints.down('sm')]: {
    fontSize:'16px',
  }
}));

const RefferalClaimButton = styled(Button)(({ theme }) => ({
  padding: '8px 8px',
  textTransform: 'none',
  
}));

const RefferalRemarkText = styled('p')(({ theme }) => ({
  fontSize: '14px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  }
}));

const RefferalContentArea = styled('div')(({ theme }) => ({
    minHeight: '100vh',
    paddingTop: '10%',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    paddingRight: '3rem',
    paddingLeft: '3rem',
    transition: '0.3s',
    borderBottom: '1px solid #ffffff14',
    backgroundColor: '#ffff',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingRight: '1rem',
      paddingLeft: '1rem',
    }
}));

const RefferalTopContentArea = styled('div')(({ theme }) => ({
      height: '250px',
      width:'90%',
      position: 'absolute',
      top: '-80px',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: '1px solid #ffffff14',
      backgroundColor: '#fff',
      border: '1px solid #e5e6ea',
      borderRadius: '20px',
      padding: '20px 0 20px 0',
      [theme.breakpoints.down('sm')]: {
            width:'100%',
            position: 'relative',
            top: 'unset'
      }
}));
    
const RefferalTopContentLeftArea = styles.div`
    color:#000;
    width:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column`;

const RefferalTopContentRightArea = styles.div`
    color:#000;
    width:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column`;

const blue = { 200: '#80BFFF', 400: '#3399FF'};

const grey = {50: '#F3F6F9',100: '#E7EBF0', 200: '#E0E3E7',300: '#CDD2D7',400: '#B2BAC2',500: '#A0AAB4', 600: '#6F7E8C',700: '#3E5060',
  800: '#2D3843',900: '#1A2027',
};


const StyledInputElement = styled('input')(
  ({ theme }) => ({
    marginRight:'10px',
    width: '320px',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.palette.mode === 'dark' ? grey[300] : grey[900],
    background: theme.palette.mode === 'dark' ? grey[900] : grey[50],
    border: theme.palette.mode === 'dark' ? `1px solid ${grey[800]}` : `1px solid ${grey[300]}`,
    borderRadius: '8px',
    padding: '12px 12px',
    transition: 'all 150ms ease',
    '&:hover': {
      background: theme.palette.mode === 'dark' ? '' : grey[100],
      borderColor: theme.palette.mode === 'dark' ? grey[700] : grey[400]
    },
    '&:focus': {
      outline: `2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]}`,
      outlineOffset: '2px'
    },
    [theme.breakpoints.down('sm')]: {
      width:'95%'
    }
  })
);


const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

function createData(no, protocol, adress, timePurchased, tx,reward,status) {
  return {
    no,
    protocol,
    adress,
    timePurchased,
    tx,
    reward,
    status
  };
}

const rows = [
  createData('1.','Secure 25', 750000, -310.63, 62.21, 33.02,'3k'),
  createData('2.','Donut', 2050000, 310.63, 62.21,33.02,'2.5k'),
  createData('3.','Eclair', 1150000, 560.63, 62.21,33.02,'3.6k'),
];

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
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
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

const headCells = [
  {
    id: 'no',
    numeric: false,
    disablePadding: true,
    label: 'No.',
  },
  {
    id: 'protocol',
    numeric: true,
    disablePadding: false,
    label: 'Protocol',
  },
  {
    id: 'adress',
    numeric: true,
    disablePadding: false,
    label: 'Adress',
  },
  {
    id: 'timePurchased',
    numeric: true,
    disablePadding: false,
    label: 'Time Purchased',
  },
  {
    id: 'tx',
    numeric: true,
    disablePadding: false,
    label: 'Tx',
  },
  {
    id: 'reward',
    numeric: true,
    disablePadding: false,
    label: 'Reward',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow >
       
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
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
        >
          Nutrition
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

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};


export default function Referral() {

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
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

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
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


  return <>
      <Header title={`CONVEST FINANCE: Referral`}></Header>
      <RefferalArea>
        <RefferalHeadArea>
          <RefferalHeadLeftArea>
            <RefferalHeaderText>Refer Friend 
              <RefferalHeaderHightlightText>Earn Reward</RefferalHeaderHightlightText>
            </RefferalHeaderText>
            <RefferalSubHeaderText>
              Where Bitcoin was hailed as the digital answer to currency, NFTs
            </RefferalSubHeaderText>
            <RefferalSubHeaderText>are now being touted as the digital answer to collectables.</RefferalSubHeaderText>
          </RefferalHeadLeftArea>
          <RefferalHeadRightArea>
            <RefferalStackCopyArea >
              <CustomInput label="Link URL" variant="outlined"  />
              <Button variant="contained" size="medium">Copy </Button>
            </RefferalStackCopyArea>
            <RefferalRemarkText>Share your referral link or code and get NECT rewards!</RefferalRemarkText>
          </RefferalHeadRightArea>
        </RefferalHeadArea>
        <RefferalContentArea>
          <RefferalTopContentArea>
            <RefferalTopContentLeftArea>
              <RefferalClaimHeadText >0.547 NECT</RefferalClaimHeadText>
              <RefferalClaimSubHeadText>Referral Reward</RefferalClaimSubHeadText>
              <RefferalClaimButton size="large" variant="contained" startIcon={<AccountBalanceWalletIcon />}> Claim Reward</RefferalClaimButton>
            </RefferalTopContentLeftArea>
            <Divider orientation="vertical" flexItem></Divider>
            <RefferalTopContentRightArea>
              <RefferalClaimHeadText >187 USD</RefferalClaimHeadText>
              <RefferalClaimSubHeadText>NECT Market Price</RefferalClaimSubHeadText>
              <RefferalClaimButton size="large" variant="contained" startIcon={<AccountBalanceWalletIcon />}>  Get NECT</RefferalClaimButton>
            </RefferalTopContentRightArea>
          </RefferalTopContentArea>
          <Box sx={{ width: '100%'}}>
            <Paper sx={{ width: '100%', mb: 2,padding: '0 20px 0 20px',borderRadius: '5px', border: '1px solid #ffffff14' }}>
              <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={'medium'}
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
                              padding="none">
                               {row.no}
                             
                            </TableCell>
                            <TableCell align="left" >
                              <Stack direction="row" spacing={2} style={{display:'flex',alignItems:'center'}}>
                                  <Avatar style={{marginRight:'10px',alignItems:'center'}} alt={row.protocol} src="portfolio/portfolio-05.jpg" />
                                  {row.protocol}
                              </Stack>
                              </TableCell>
                            <TableCell align="left" >{row.adress}</TableCell>
                            <TableCell align="left" >{row.timePurchased}</TableCell>
                            <TableCell align="left" >{row.tx}</TableCell>
                            <TableCell align="left" >{row.reward}</TableCell>
                            <TableCell align="left" >{row.status}</TableCell>
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: ( 53) * emptyRows,
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
        </RefferalContentArea>
        
      </RefferalArea>
  </>;
};
