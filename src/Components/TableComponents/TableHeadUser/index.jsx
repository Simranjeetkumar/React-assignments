import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { TableHead } from '@mui/material';

export default function TableHeadUser(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort,headCells,className } =
      props;
      console.log(headCells,'head' )
     
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

  
    return (
      <TableHead className={className}>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
           
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                
              
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
