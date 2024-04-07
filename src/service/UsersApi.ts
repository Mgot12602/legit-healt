import Api from "./Api";
import {
  ICreateUserApiData,
  IUserDetailsApiData,
} from "../interfaces/interfaces";

class UsersApi extends Api {
  static getUsers(page: number, itemsPerPage: number) {
    return this.request("GET", `users?page=${page}&per_page=${itemsPerPage}`);
  }
  static getUser(userId: number): Promise<IUserDetailsApiData> {
    return this.request("GET", `users/${userId}`);
  }
  static createUser(data: ICreateUserApiData) {
    return this.request("POST", "users", data);
  }
}

export default UsersApi;
