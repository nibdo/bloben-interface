export interface GetTwoFactorSecretResponse {
  twoFactorSecret: string;
}

export interface GetTwoFactorResponse {
  isEnabled: boolean;
}

export interface EnableTwoFactorRequest {
  otpCode: string;
}

export interface LoginWithTwoFactorRequest {
  username: string;
  password: string;
  otpCode: string;
  browserID: string | null;
}

export interface LoginWithTwoFactorAdminResponse {
  message: string;
  isLogged: boolean;
  isTwoFactorEnabled: boolean;
}
