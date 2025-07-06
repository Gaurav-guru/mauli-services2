import React from 'react';
import { Button } from '@mui/material';

const FixedCallbackButton = ({ handleCallbackOpen }) => {
  return (
    <Button
      variant="contained"
      onClick={handleCallbackOpen}
      sx={{
        position: 'fixed',
        right: 8, // Distance from the right edge
        bottom: 80, // Distance from the bottom edge
        zIndex: 1000,
        borderRadius: '15px', // Slightly rounded button
        whiteSpace: 'nowrap',
        backgroundColor: 'orange',
        padding: '2px 6px', // Adjusted padding for smaller size
        fontSize: '0.65rem', // Smaller font size to fit the text
        minWidth: '90px', // Minimum width for consistent size
        height: '24px', // Reduced height for a compact look
        textTransform: 'none', // Prevent text from becoming uppercase
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
      }}
    >
      Request Callback
    </Button>
  );
};

export default FixedCallbackButton;
