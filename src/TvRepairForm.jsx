import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

const TvRepairForm = () => {
  const [service, setService] = useState('');
  const [problem, setProblem] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (!service || !problem || !fullName || !mobileNumber) {
      setError("Please fill all the required fields.");
      return;
    }

    const message = `🛠 *TV Repair Booking Request*\n\n` +
      `📺 *Service:* ${service}\n` +
      `❓ *Problem:* ${problem}\n` +
      `📝 *Description:* ${problemDescription || 'N/A'}\n` +
      `📅 *Date:* ${date}\n` +
      `⏰ *Time:* ${time || 'Not selected'}\n` +
      `👤 *Name:* ${fullName}\n` +
      `📱 *Mobile:* ${mobileNumber}\n` +
      `📍 *Address:* ${address}\n` +
      `📮 *Pin Code:* ${pinCode}`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918007113950?text=${encodedMsg}`;

    window.open(whatsappUrl, '_blank');
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setService('');
    setProblem('');
    setProblemDescription('');
    setDate(new Date().toISOString().slice(0, 10));
    setTime('');
    setFullName('');
    setMobileNumber('');
    setAddress('');
    setPinCode('');
    setError(null);
  };

  const getLcdLedProblems = () => [
    { value: 'Not getting on', label: 'Not getting on' },
    { value: 'Picture not visible', label: 'Picture not visible' },
    { value: 'Backlights issue', label: 'Backlights issue' },
    { value: 'Display Broken', label: 'Display Broken' },
    { value: 'Horizontal lines on screen', label: 'Horizontal lines on screen' },
    { value: 'On Inspection', label: 'On Inspection' },
  ];

  const getTvInstallationProblems = () => [
    { value: '24 inch to 43inch', label: '24 inch to 43inch' },
    { value: '43 Inch to 75 Inch', label: '43 Inch to 75 Inch' },
  ];

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        boxShadow: 3,
        border: '1px solid #ddd',
        mb: 8
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: '#003366', fontWeight: 'bold' }}>
        Book Your Service
      </Typography>
      {error && (
        <Typography variant="body1" color="error" sx={{ mb: 2, textAlign: 'center' }}>
          {error}
        </Typography>
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Select
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setProblem('');
            }}
            fullWidth
            displayEmpty
            sx={{ backgroundColor: '#f0f8ff' }}
          >
            <MenuItem value="" disabled>Select Service</MenuItem>
            <MenuItem value="TV Installation">TV Installation</MenuItem>
            <MenuItem value="LED/LCD">LED/LCD</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            fullWidth
            displayEmpty
            sx={{ backgroundColor: '#f0f8ff' }}
          >
            <MenuItem value="" disabled>Select Problem</MenuItem>
            {(service === 'TV Installation' ? getTvInstallationProblems() : getLcdLedProblems()).map(option => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Problem Description"
            multiline
            rows={3}
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            fullWidth
            sx={{ backgroundColor: '#f0f8ff' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            type="date"
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            sx={{ backgroundColor: '#f0f8ff' }}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            fullWidth
            displayEmpty
            sx={{ backgroundColor: '#f0f8ff' }}
          >
            <MenuItem value="" disabled>Select Time Slot</MenuItem>
            {['08:00 - 10:00','10:00 - 12:00','12:00 - 14:00','14:00 - 16:00','16:00 - 18:00','18:00 - 20:00','Immediate'].map(slot => (
              <MenuItem key={slot} value={slot}>{slot}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            fullWidth
            sx={{ backgroundColor: '#f0f8ff' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            type="tel"
            fullWidth
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 10 }}
            sx={{ backgroundColor: '#f0f8ff' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Address / Location"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            sx={{ backgroundColor: '#f0f8ff' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Pin Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            fullWidth
            sx={{ backgroundColor: '#f0f8ff' }}
          />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#003366', '&:hover': { backgroundColor: '#002244' } }}
          onClick={handleSubmit}
        >
          Book Now via WhatsApp
        </Button>
      </Box>

      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle sx={{ color: 'green' }}>WhatsApp Message Sent</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your enquiry was opened in WhatsApp. Please send it manually if needed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TvRepairForm;
