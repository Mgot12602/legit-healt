import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import  CssBaseline  from '@mui/material/CssBaseline';
import UserList from './pages/ListUsers';
import UserDetails from './pages/UserDetails';
import UserForm from './pages/CreateUser';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import {SnackbarProvider} from './context/SnackBarProvider';


function App() {

const queryClient=new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // caches requests 5 minutes
    },
  },
});

  return (
  
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <CssBaseline/>
       <QueryClientProvider client={queryClient}>
        <SnackbarProvider>  
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' Component={UserList} />
          <Route path='/user/:id' Component={UserDetails} />
          <Route path='/create' Component={UserForm} />
        </Routes>
        </Layout>
      </BrowserRouter>
      </SnackbarProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  
  );
}

export default App;
