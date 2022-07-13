import { UserUl } from "./UserListStyles";
import { DataGrid } from '@mui/x-data-grid';

export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username',
            headerName: 'User',
            width: 90,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 130,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 110,

        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            sortable: false,
            width: 160,
        }
    ];

    const rows = [
        { id: 1, username: 'Jon Snow', avatar: 'https://images.pexels.com/photos/6205471/pexels-photo-6205471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', email: "johna@gmail.com", status: "active", transaction: "$120.00" },
        { id: 2, username: 'Jon Snow', avatar: 'https://images.pexels.com/photos/6205471/pexels-photo-6205471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', email: "johna@gmail.com", status: "active", transaction: "$120.00" },
        { id: 3, username: 'Jon Snow', avatar: 'https://images.pexels.com/photos/6205471/pexels-photo-6205471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', email: "johna@gmail.com", status: "active", transaction: "$120.00" },
        { id: 4, username: 'Jon Snow', avatar: 'https://images.pexels.com/photos/6205471/pexels-photo-6205471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', email: "johna@gmail.com", status: "active", transaction: "$120.00" },
        { id: 5, username: 'Jon Snow', avatar: 'https://images.pexels.com/photos/6205471/pexels-photo-6205471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', email: "johna@gmail.com", status: "active", transaction: "$120.00" },
        { id: 6, username: 'Jon Snow', avatar: 'https://images.pexels.com/photos/6205471/pexels-photo-6205471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', email: "johna@gmail.com", status: "active", transaction: "$120.00" },
        { id: 7, username: 'Jon Snow', avatar: 'https://images.pexels.com/photos/6205471/pexels-photo-6205471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', email: "johna@gmail.com", status: "active", transaction: "$120.00" },
        { id: 8, username: 'Jon Snow', avatar: 'https://images.pexels.com/photos/6205471/pexels-photo-6205471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', email: "johna@gmail.com", status: "active", transaction: "$120.00" },

    ];
    return (
        <UserUl>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            /></UserUl>
    )
}
