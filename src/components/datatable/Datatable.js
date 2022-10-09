import * as React from 'react';
import "./Datatable.css";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName: 'User', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    type: 'number',
    renderCell: (params) => {
      return (
        <div className="status_container">
          approved
        </div>
      );

    },
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div className='btn'>
          <button className='viewbtn'>View
          </button>
          <button className='deletebtn'>Delete
          </button>

        </div>
      );
    }
  },
];

const rows = [
  { id: 1, user: 'Snow', email: 'Jon', status: 35 },
  { id: 2, user: 'Lannister', email: 'Cersei', status: 42 },
  { id: 3, user: 'Lannister', email: 'Jaime', status: 45 },
  { id: 4, user: 'Stark', email: 'Arya', status: 16 },
  { id: 5, user: 'Targaryen', email: 'Daenerys', status: null },
  { id: 6, user: 'Melisandre', email: 'harry', status: 150 },
  { id: 7, user: 'Clifford', email: 'Ferrara', status: 44 },
  { id: 8, user: 'Frances', email: 'Rossini', status: 36 },
  { id: 9, user: 'Roxie', email: 'Harvey', status: 65 },
];

export default function Datatable() {
  return (
    <div style={{ height: 524, width: '100%', background: '#fff' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pstatusSize={5}
        rowsPerPstatusOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
