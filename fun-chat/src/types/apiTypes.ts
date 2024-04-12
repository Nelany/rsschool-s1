const TYPE_USER_LOGIN = 'USER_LOGIN';

export interface SessionData {
  id: string;
  login: string;
  password: string;
  isLogined: boolean;
}

export interface GeneralRequest {
  id: string;
  type: typeof TYPE_USER_LOGIN;
  payload: Record<string, unknown>;
}

export interface UserLoginRequest extends GeneralRequest {
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
}

export interface UserLoginResponse extends GeneralRequest {
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}
