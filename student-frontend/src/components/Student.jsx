import { Container, Paper, paperClasses } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Student() {
  return (

    <Container>
      <Paper elevation={3} style={paperClasses}>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Student Name" variant="outlined" />
        <TextField id="filled-basic" label="Student Address" variant="filled" />
      </Box>
      </Paper>
    </Container>
  );
}
