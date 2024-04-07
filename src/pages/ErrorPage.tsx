import { Button, Container, Typography } from "@mui/material";
import {Link} from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Container sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      textAlign: 'center', 
      p: 2 
    }}>
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h4">Something went wrong.</Typography>
      <Button variant="contained" component={Link} to={'/'} color="primary" sx={{ mt: 2 }}>
        Go Back
      </Button>
    </Container>
  );
};

export default ErrorPage