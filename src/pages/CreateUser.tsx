import { useForm, Controller, SubmitHandler} from 'react-hook-form';
import { TextField, Paper, Box, Typography, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useMutation } from 'react-query';
import UsersApi from '../service/UsersApi';
import { mapUserFormDataToApi } from '../mappers/userMappers';
import { IFormInputs } from '../interfaces/interfaces';
import {useSnackBarContext} from '../context/SnackBarProvider';

const CreateUser = () => {
  const {showSuccess,showError}=useSnackBarContext();
  const { handleSubmit, control,reset } = useForm<IFormInputs>();

  const {mutate,error,isLoading} = useMutation((newUser: IFormInputs) => UsersApi.createUser(mapUserFormDataToApi(newUser)),{
    onSuccess: () => {
      showSuccess('User created successfully');
      reset({
        firstName: '',
        lastName: '',
        email: '',
      });
    },
    onError: () => {
      showError(`User could not be created. Error:${error}`);
    }
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    mutate(data);
  };
  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width:'400px' }}>
        <Typography variant="h4" mb={2} align="center" sx={{ fontSize: { xs: '1.25rem', sm: '2rem' } }}>Create User</Typography>
          {/* added noValidate prop to disable the native validation of the html as
           react hook form is in charge of that */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2}>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: 'First name is required' }}
                render={({ field,fieldState }) => <TextField {...field} label="First Name" fullWidth margin="normal" error={!!fieldState.error} helperText={fieldState.error?.message} />}
              />
              <Controller
                name="lastName"
                control={control}
                rules={{ required: 'Last name is required' }}
                render={({ field,fieldState }) => <TextField {...field} label="Last Name" fullWidth margin="normal" error={!!fieldState.error} helperText={fieldState.error?.message} />}
              />
              <Controller
                name="email"
                control={control}
                rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
                render={({ field,fieldState }) => <TextField {...field} label="Email" type="email" fullWidth margin="normal" error={!!fieldState.error} helperText={fieldState.error?.message} />}
              />
              <Box sx={{display:'flex', justifyContent:'center'}}>
                <LoadingButton type="submit" variant="contained" color="primary" loading={isLoading}>
                  Submit
                </LoadingButton>
              </Box>
            </Stack>
         </form>
      </Paper>
    </Box>
  );
};

export default CreateUser;