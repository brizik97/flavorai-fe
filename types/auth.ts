export interface LoginResponse {
  accessToken: string;
}

export interface UserResponse {
  id: string;
  username: string;
  email: string;
}

export interface RegisterUser {
  id: string;
  username: string;
  email: string;
}
