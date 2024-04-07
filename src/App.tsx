import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import UserList from './pages/ListUsers';
import UserDetails from './pages/UserDetails';
import UserForm from './pages/CreateUser';
import ErrorPage from './pages/ErrorPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import  CssBaseline  from '@mui/material/CssBaseline';
import Layout from './components/Layout';


function App() {

const queryClient=new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

  return (
  
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <CssBaseline/>
       <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' Component={UserList} />
          <Route path='/user/:id' Component={UserDetails} />
          <Route path='/create' Component={UserForm} />
        </Routes>
        </Layout>
      </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  
  );
}

export default App;
