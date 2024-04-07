import {
  ICreateUserApiData,
  IFormInputs,
  IUser,
  IUserApiData,
  IUserDetailsApiData,
  IUsersListApiData,
} from "../interfaces/interfaces";

export const mapUserFormDataToApi = (
  formData: IFormInputs
): ICreateUserApiData => ({
  first_name: formData.firstName,
  last_name: formData.lastName,
  email: formData.email,
});

export const mapUsersListApiData = (apiData: IUsersListApiData): IUser[] =>
  apiData.data.map((user) => ({
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    avatar: user.avatar,
  }));

export const mapUserDetailsApiData = (apiData: IUserDetailsApiData): IUser => {
  const { data } = apiData;
  return {
    id: data.id,
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    avatar: data.avatar,
  };
};
