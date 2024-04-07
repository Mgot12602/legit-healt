import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
import UsersApi from '../service/UsersApi';
import DetailsCard from '../components/DetailsCard';
import { mapUserDetailsApiData } from '../mappers/userMappers';

interface RouteParams {
  id: string;
  [key: string]: string;
}

const UserDetails: React.FC = () => {

const { id } = useParams<RouteParams>();
const { data, isLoading, isError, error } = useQuery(['user', id], () => UsersApi.getUser(Number(id)));

if (isLoading) return <CircularProgress />;
if (isError || !data) {
  return <div>Error: {(error as Error).message}</div>;
}

const user = mapUserDetailsApiData(data);
  return  ( 
   <DetailsCard
   user={user}
   />

  )
}

export default UserDetails;