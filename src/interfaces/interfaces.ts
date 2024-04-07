export interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ICreateUserApiData {
  first_name: string;
  last_name: string;
  email: string;
}

export interface IUserApiData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface IUserDetailsApiData {
  data: IUserApiData;
  support: {
    url: string;
    text: string;
  };
}

export interface IUsersListApiData {
  page: number;
  per_page: number;
  total: number;
  total_pages: 2;
  data: IUserApiData[];
  support: {
    url: string;
    text: string;
  };
}
