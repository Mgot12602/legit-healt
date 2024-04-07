import {
  ICreateUserApiData,
  IFormInputs,
  IUser,
  IUsersList,
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

export const mapUsersListApiData = (
  apiData: IUsersListApiData
): IUsersList => ({
  users: apiData.data.map((user) => ({
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    avatar: user.avatar,
  })),
  currentPage: apiData.page,
  totalPages: apiData.total_pages,
});

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
