import React from "react";
import { Box, Button, Grid, spacing, TextField, Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <Box textAlign="center" sx={[{ m: 2 }, { display: "flex" }]}>
      <div>
        <Typography variant="h4">Customer Support</Typography>

        <h4>Need help?</h4>
        <h3>Give us a call us on our toll free line!</h3>
        <p className="phone">
          <i> 1-88-BOUTIQUE</i>
        </p>

        <h3>Or, send us an email:</h3>
        <div>
          <p>info@StyleBoutique.com</p>
          <p>customerservice@StyleBoutique.com</p>
          <p>careers@StyleBoutique.com</p>
        </div>
      </div>
    </Box>
  );
};

export default ContactUs;
