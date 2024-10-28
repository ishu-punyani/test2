import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { ThemeContext } from './ThemeContext';

const Details = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    if(age < 18)
      setError(true);
    else
      setError(false);
  }
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
    <Box m={2}>
      <Typography variant='h3' mb={2}>Enter your details</Typography>
      <Grid container display={'flex'} gap={2}>
      <TextField
        name='name'
        color='primary'
        disabled={false}
        placeholder='Enter Name'
        label='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        size='small'
      />
      <TextField
        name='age'
        color='primary'
        error={error} 
        disabled={false}
        placeholder='Enter Age'
        label='Age'
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        size='small'
      />
      <TextField
        name='email'
        color='primary'
        disabled={false}
        placeholder='Enter Email'
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        size='small'
      />
    <Button
      variant='contained'
      type='submit' 
      onClick={handleSubmit}
    >
      Submit
    </Button>
    </Grid>
    </Box>

    <Box mt={3}>
      <Box height={'300px'} width={'300px'} sx={{ backgroundColor: theme === 'light' ? 'blue' : 'darkblue'}}></Box>
      <Button variant='contained' onClick={toggleTheme}>Toggle Theme</Button>
    </Box>
    </>
  )
}

export default Details;
