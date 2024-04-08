function ErrorPage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      textAlign: 'center', 
      padding: '16px' 
    }}>
      <h1 style={{ fontSize: '2em', margin: '0.67em 0' }}>Oops!</h1>
      <h4 style={{ fontSize: '1.33em', margin: '0.67em 0' }}>Something went wrong.</h4>
      <a href="/" style={{
        display: 'inline-block',
        padding: '6px 16px',
        fontSize: '0.875rem',
        lineHeight: '1.75',
        color: '#fff',
        backgroundColor: '#3f51b5',
        borderRadius: '4px',
        textDecoration: 'none',
        marginTop: '16px',
        textAlign: 'center'
      }}>
        Go Back
      </a>
    </div>
  );
};

export default ErrorPage;