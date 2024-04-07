// UserDetails.tsx
import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useQuery } from 'react-query';
import UsersApi from '../service/UsersApi';
import UserCard from '../components/UserCard';
import DetailsCard from '../components/DetailsCard';
import { mapUserDetailsApiData } from '../mappers/userMappers';
import { CircularProgress } from '@mui/material';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface RouteParams {
  id: string;
  [key: string]: string;
}

const UserDetails: React.FC = () => {


const { id } = useParams<RouteParams>();



const { data, isLoading, isError, error } = useQuery(['user', id], () => UsersApi.getUser(Number(id)));


if (isLoading) return <CircularProgress />;
  if (isError||!data) return <div>Error: {(error as Error).message}</div>;
  const user = mapUserDetailsApiData(data) ;
  return  ( 
   <DetailsCard
   user={user}
   />

  )
}

export default UserDetails;