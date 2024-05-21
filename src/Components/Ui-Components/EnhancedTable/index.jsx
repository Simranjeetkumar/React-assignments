import * as React from 'react';
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
import { MuiBorderColorOutlinedIcon, MuiCheckCircleOutlineIcon, MuiDeleteForeverOutlinedIcon, MuiRemoveRedEyeIcon } from '../../Mui-Icons';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../BasicModal';
import { MuiBox, MuiButton, MuiTypography } from '../../Mui-Component';
import { get, post } from '../../../Service/ApiService';
import { useDispatch, useSelector } from 'react-redux';
import { setValues } from '../../../store/slice/EditValues';
import Pagination from '@mui/material/Pagination';
import { savePage } from '../../../store/slice/MenuItem';

// function createData(name, calories, fat) {
//   return {
//     name,
//     calories,
//     fat,
//     // carbs,
//   };
// }


// const rows = [
//   createData('Cupcake', 305, 3.7),
//   createData('Donut', 452, 25.0),
//   createData('Eclair', 262, 16.0),
//   createData('Frozen yoghurt', 159, 6.0),
//   createData('Gingerbread', 356, 16.0),
//   createData('Honeycomb', 408, 3.2),
//   createData('Ice cream sandwich', 237, 9.0),
//   createData('Jelly Bean', 375, 0.0),
//   createData('KitKat', 518, 26.0),
//   createData('Lollipop', 392, 0.2),
//   createData('Marshmallow', 318, 0),
//   createData('Nougat', 360, 19.0),
//   createData('Oreo', 437, 18.0),
// ];

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

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0],b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'first_name',
    numeric: false,
    disablePadding: true,
    label: 'Full Name',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
  // {
  //   id: 'protein',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Protein (g)',
  // },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className='TableHead'>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell 
            className='ThColor'
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
            className='Tholor'
            id={headCell.label}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden} className='thSpan'>
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

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows,setRows] = React.useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.searchDataStore)
  const data1 = useSelector((state)=>state.paginationCount)
  
  console.log('data1',data1.totalPage)
  const CustomPagination = (value)=>{
    console.log('e',value.target.firstChild.data)
    dispatch(savePage(value.target.firstChild.data))
  }
const verifiedEmail = (email)=>{
     post(`v1/auth/resend-email-verification`,{email:email,"operation": 5}).then((res)=>{
      console.log('resend verification',res)
      alert(res.message)
     })
}
  React.useEffect(()=>{
    setRows(data)
  },[data])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
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
  // rows per page 

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage,rows],
  );
  // console.log('visible',visibleRows)

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }} >
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody className='DrawerContent'>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                 
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell
                     className='ThColor'
                     align="center"
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.first_name} {row.last_name}
                    </TableCell>
                    <TableCell align="center"  className='ThColor'>{row.email}{row.is_verified?<MuiCheckCircleOutlineIcon className='TableHead verified'/>:
                    null}</TableCell>
                    <TableCell align="center"  className='ThColor'>
                      {/* {row.status} */}
                      {
                          row.status == 0?
                          <MuiTypography component='span' className='ColorAqua'>
                              Invite  <MuiButton className='ColorAqua' onClick={()=>{verifiedEmail(row.email)}}>
                          [Resend Link]
                            </MuiButton>
                          </MuiTypography>
            
                          :row.status == 1?
                          <MuiTypography component='span' className='ColorGreen'>
                          Active
                      </MuiTypography>
                      :row.status
                    }
                    
                    </TableCell>
                    <TableCell align="center"  className=''>
                      <MuiBox className='tableIconBox'>
                        {<MuiRemoveRedEyeIcon onClick={()=>{navigate('viewAdmin');dispatch(setValues([row.first_name,row.email,row.last_name]))}} className='DrawerContent Notification'/>}
                        {<MuiBorderColorOutlinedIcon onClick={()=>{navigate(`edit/${row._id}`);dispatch(setValues([row.first_name,row.email,row.last_name]))}}className='DrawerContent Notification'/>}
                    {<BasicModal emailProp={row.email}/>}
                    </MuiBox>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6}  />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination count={data1.totalPage} className='DrawerContent' id='coustomPage' onClick={CustomPagination} />
      
      </Paper>
      
    </Box>
  );
}
