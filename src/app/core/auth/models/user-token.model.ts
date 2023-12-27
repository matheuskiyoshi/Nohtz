import { User } from "src/app/modules/users/models/user.model";

export interface UserToken {
  user: User
  token: string;
}
