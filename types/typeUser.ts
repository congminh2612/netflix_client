export interface UserType {
  username: string;
  email: string;
  password: string;
}
export interface CurrentUserProps {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  accessToken: string;
}
