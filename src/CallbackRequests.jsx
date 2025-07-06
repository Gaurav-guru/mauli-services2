import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Delete } from '@mui/icons-material';
import axios from 'axios';

const CallbackRequests = () => {
  const [callbacks, setCallbacks] = useState([]);

  useEffect(() => {
    fetchCallbacks();
  }, []);

  const fetchCallbacks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/callbacks');
      setCallbacks(response.data);
    } catch (error) {
      console.error('Error fetching callback requests', error);
    }
  };

  const deleteCallback = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/callbacks/${id}`);
      fetchCallbacks(); // Refresh the callback requests list
    } catch (error) {
      console.error('Error deleting callback request', error);
    }
  };

  if(callbacks <= 0) {
    return (
        <div className='d-flex justify-content-center align-items-center h-100' style={{minHeight: 'calc(100dvh - 500px)'}}>
          No data found.
        </div>
    )
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Callback Requests
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              {/*<TableCell>Message</TableCell>*/}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {callbacks.map((callback) => (
              <TableRow key={callback.id}>
                <TableCell>{callback.id}</TableCell>
                <TableCell>{callback.name}</TableCell>
                <TableCell>{callback.phone}</TableCell>
                {/*<TableCell>{callback.message}</TableCell>*/}
                <TableCell>
                  <IconButton onClick={() => deleteCallback(callback.id)} color="secondary">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CallbackRequests;
