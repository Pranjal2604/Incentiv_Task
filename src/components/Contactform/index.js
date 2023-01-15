import React from "react";
import "./style.css";
import { Button, TextField } from "@mui/material";
const Contactform = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-detail">
          <div className="contact-heading">
            Are you ready for a better way to manage your ESOPs?
          </div>
          <div className="Contact-para">
            We look forward to show you how our platform allows you to optimize
            the way you manage and issue ESOPs to your employees.
          </div>
          <div className="contact-semi-heading">
            Here’s what you can expect from our demo:
          </div>
          <div className="demo-section">
            <div className="demo-subsection">
              <div className="d-text">Personalized tour of our platform </div>
              <div className="d-text">Detailed demo of its functions</div>
            </div>
            <div className="demo-subsection">
              <div className="d-text">Pricing details based on your needs</div>
              <div className="d-text">Detailed demo of its functions</div>
            </div>
          </div>
        </div>
        <div className="contact-form-field">
          <div className="demo-text">Request Demo</div>
          <div className="input-container">
            {/* label */}
            <TextField
              className="form"
              placeholder="Full Name*"
              sx={{
                backgroundColor: "#7E8AB5;",
                borderRadius: 3,
                marginBottom: 2,
              }}
              size="small"
            />

            <TextField
              className="form"
              placeholder="Organization name*"
              sx={{
                backgroundColor: "#7E8AB5;",
                borderRadius: 3,
                marginBottom: 2,
              }}
              size="small"
            />

            <TextField
              className="form"
              placeholder="Company email id*"
              sx={{
                backgroundColor: "#7E8AB5;",
                borderRadius: 3,
                marginBottom: 2,
              }}
              size="small"
            />

            <TextField
              className="form"
              placeholder="Phone number*"
              sx={{
                backgroundColor: "#7E8AB5;",
                borderRadius: 3,
                marginBottom: 2,
              }}
              size="small"
            />
            <TextField
              className="form"
              multiline={true}
              row={4}
              placeholder="Tell us more about your needs (optional)"
              sx={{
                backgroundColor: "#7E8AB5;",
                borderRadius: 3,
                marginBottom: 2,
              }}
              size="large"
            />
          </div>
          <Button
            variant="contained"
            className="form-btn"
            sx={{
              marginBottom: 2,
              marginTop: 3,
            }}
          >
            Request Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
