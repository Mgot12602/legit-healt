import  { useState } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress, Grid, Box} from '@mui/material';
import UserCard from '../components/UserCard';
import Pagination, { ItemsPerPage } from '../components/Pagination';
import UsersApi from '../service/UsersApi';
import { mapUsersListApiData } from '../mappers/userMappers';
import { IUser } from '../interfaces/interfaces';

const ListUsers= () => {
  
  const [page, setPage] = useState(1);
  const[itemsPerPage,setItemsPerPage] =useState(ItemsPerPage.SIX)
  const {
    isLoading,
    isError,
    error,
    data,
    } = useQuery(['users',page,itemsPerPage],() => UsersApi.getUsers(page, itemsPerPage),{keepPreviousData:true});

  if (isLoading) return <CircularProgress />;
  if (isError||!data) return <span>Error: {(error as Error).message}</span>;
  
  const {users,currentPage,totalPages}=mapUsersListApiData(data)
  return (
       <Box  sx={{display:'flex', flexDirection:'column',gap:'1rem'}}>
           <Grid container spacing={3} sx={{flexGrow:1}}>
              {users.map((user: IUser) => (
               <Grid item xs={12} sm={6} md={4} key={user.id}>
                  <UserCard user={user} />
                </Grid>
              ))}
            </Grid>
            <Pagination currentPage={currentPage} setPage={setPage} totalPages={totalPages} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage}/>
      </Box>
);
}

export default ListUsers;