import { Container, Typography, Link, Paper } from '@mui/material';


const Footer = () => {
  return (
    <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          <strong>legit-health</strong>{' '}test by{' '}
          <Link href="https://github.com/Mgot12602?tab=repositories" color="inherit">
            Mgot12602
          </Link>
          . The source code is licensed{' '}
          <Link href="http://opensource.org/licenses/mit-license.php" color="inherit">
            MIT
          </Link>
          .
        </Typography>
       
      </Container>
    </Paper>
  );
};

export default Footer;