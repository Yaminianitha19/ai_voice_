export interface User {
  id: string;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SignUpParams {
  uid: string;
  name: string;
  email: string;
}

export interface SignInParams {
  email: string;
  idToken: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}
