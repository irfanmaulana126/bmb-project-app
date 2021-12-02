import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import emailjs from 'emailjs-com';
import {apiKeys} from '../helper/apikeys';

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let templateParams={
        'first_name':data.get('firstName'),
        'last_name':data.get('lastName'),
        'universitas':data.get('universitas'),
        'to_email':data.get('email'),
        'phone':data.get('phone')
    }
    emailjs.send(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, templateParams,apiKeys.USER_ID)
        .then(result => {
        alert('Akun demo anda akan kami kirim melalui email', result.text);
        event.target.reset();
    },
    error => {
        alert( 'Mohon maaf akun demo terbatas',error.text)
    })
    
  };
  return (
      <>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10vh 0',
          }}
        >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Coba gratis
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nama Depan"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nama Belakang"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Alamat Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="universitas"
                  label="Universitas"
                  name="universitas"
                  autoComplete="universitas"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Phone"
                  label="Nomor Handphone"
                  name="phone"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Coba gratis
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
}