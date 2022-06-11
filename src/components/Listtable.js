import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./listable.css"

function createData(id, product, customer, date, amount, paymentmethod, status) {
    return { id, product, customer, date, amount, paymentmethod, status };
  }
  
  const rows = [
    createData(11212, "Playstation 5" , "Ubaid", "2-6-22", 400, "Cash", "Approved"),
    createData(22112, "Macbook Air", "Tayyab", "3-6-22", 400, "Online payment", "Pending"),
    createData(44321, "MI Note 11", "Omer", "4-6-22", 650, "Cash", "Approved"),
    createData(56754, "Iphone 11", "Asad", "5-6-22", 450, "Online payment", "Pending"),
    createData(86943, "Iphone 12", "Qammer", "5-6-22", 350, "Online payment", "Approved"),
  ];

const Listtable = () => {
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Tracking ID</TableCell>
          <TableCell align="right">Product</TableCell>
          <TableCell align="right">Customer</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Amount</TableCell>
          <TableCell align="right">Payment Method</TableCell>
          <TableCell align="right">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.product}</TableCell>
            <TableCell align="right">{row.customer}</TableCell>
            <TableCell align="right">{row.date}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
            <TableCell align="right">{row.paymentmethod}</TableCell>
            <TableCell align="right"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
 
  )
}

export default Listtable