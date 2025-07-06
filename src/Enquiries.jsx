import React, {useState, useEffect} from 'react';
import {
    Box,
    Typography,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableSortLabel,
    TablePagination,
} from '@mui/material';
import {Delete} from '@mui/icons-material';
import axios from 'axios';

const Enquiries = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/appointments');
            setEnquiries(response.data);
        } catch (error) {
            console.error('Error fetching enquiries', error);
        }
    };

    const deleteEnquiry = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/appointments/${id}`);
            fetchEnquiries(); // Refresh the enquiries list
        } catch (error) {
            console.error('Error deleting enquiry', error);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if(enquiries.length <= 0) {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{minHeight: 'calc(100dvh - 500px)'}}>
                No data found.
            </div>
        )
    }


    return (
        <Box sx={{padding: '20px'}}>
            <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', color: '#333'}}>
                Enquiries
            </Typography>
            <TableContainer component={Paper} sx={{boxShadow: 3}}>
                <Table>
                    <TableHead sx={{backgroundColor: '#f5f5f5'}}>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Mobile Number</TableCell>
                            <TableCell>Service</TableCell>
                            <TableCell>Problem</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Pin Code</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {enquiries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((enquiry) => (
                            <TableRow key={enquiry.id} sx={{'&:hover': {backgroundColor: '#f2f2f2'}}}>
                                <TableCell>{enquiry.id}</TableCell>
                                <TableCell>{enquiry.fullName}</TableCell>
                                <TableCell>{enquiry.mobileNumber}</TableCell>
                                <TableCell>{enquiry.service}</TableCell>
                                <TableCell>{enquiry.problem}</TableCell>
                                <TableCell>{enquiry.date}</TableCell>
                                <TableCell>{enquiry.time}</TableCell>
                                <TableCell>{enquiry.address}</TableCell>
                                <TableCell>{enquiry.pinCode}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => deleteEnquiry(enquiry.id)} color="secondary">
                                        <Delete/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={enquiries.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{marginTop: '20px'}}
            />
        </Box>
    );
};

export default Enquiries;
