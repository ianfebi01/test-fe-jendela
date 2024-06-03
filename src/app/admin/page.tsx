'use client'
import React, { useContext, useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css' // Optional Theme applied to the grid
import { AppContext } from '@/context/AppContext'
import { Paper, Typography } from '@mui/material'

export default function DashboardPage() {
  const { state } = useContext(AppContext)

  const { orders } = state

  const groupedOrders = Object.groupBy(orders, ({ sourceOrder }) => sourceOrder)
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState(orders)

  // Column Definitions: Defines the columns to be displayed.
  const [colDefsEmail, setColDefsEmail] = useState([
    { field: 'name', headerName: 'Nama' },
    { field: 'sourceOrder', headerName: 'Sumber Pesanan' },
    { field: 'email', headerName: 'Email' },
    { field: 'phone', headerName: 'HP' },
    { field: 'qty', headerName: 'Jumlah Roti' },
    { field: 'dec', headerName: 'Keterangan' },
  ])
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div className="grid grid-cols-3 w-full gap-4 justify-between">
          <Paper variant="outlined">
            <div className="p-4 flex flex-col items-center justify-center">
              <Typography variant="subtitle1">WhatsApp</Typography>
              <Typography variant="h5">
                {groupedOrders.whatsapp?.length
                  ? groupedOrders.whatsapp?.length
                  : '0'}
              </Typography>
            </div>
          </Paper>
          <Paper variant="outlined">
            <div className="p-4 flex flex-col items-center justify-center">
              <Typography variant="subtitle1">Call</Typography>
              <Typography variant="h5">
                {groupedOrders.Call?.length ? groupedOrders.Call?.length : '0'}
              </Typography>
            </div>
          </Paper>
          <Paper variant="outlined">
            <div className="p-4 flex flex-col items-center justify-center">
              <Typography variant="subtitle1">Email</Typography>
              <Typography variant="h5">
                {groupedOrders.Email?.length
                  ? groupedOrders.Email?.length
                  : '0'}
              </Typography>
            </div>
          </Paper>
        </div>
      </div>
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
      >
        <AgGridReact rowData={rowData} columnDefs={colDefsEmail} />
      </div>
    </div>
  )
}
