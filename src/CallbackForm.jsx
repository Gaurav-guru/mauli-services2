import React, { useState } from 'react';
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from '@mui/material';

const CallbackForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, phone, message } = formData;
    if (!name || !phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    const adminNumber = "918007113950"; // Your WhatsApp number (no +, country code only)
    const encodedMessage = encodeURIComponent(
      `📞 Callback Request\n\n👤 Name: ${name}\n📱 Phone: ${phone}\n📝 Message: ${message || 'N/A'}`
    );

    const whatsappURL = `https://wa.me/${adminNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');

    // Optionally close dialog
    handleClose();
    setFormData({ name: '', phone: '', message: '' }); // Reset form
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Request a Callback</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="phone"
          label="Phone"
          type="tel"
          fullWidth
          value={formData.phone}
          inputProps={{
            inputMode: 'numeric',
            pattern: "[0-9]*",
            maxLength: 13
          }}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="message"
          label="Message (optional)"
          type="text"
          fullWidth
          multiline
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Submit via WhatsApp</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CallbackForm;
