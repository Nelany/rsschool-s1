const TYPE_USER_LOGIN = 'USER_LOGIN';
const TYPE_USER_LOGOUT = 'USER_LOGOUT';

export interface SessionData {
  id: string;
  login: string;
  password: string;
  isLogined: boolean;
}

export interface GeneralRequest {
  id: string;
  type: string;
  payload: Record<string, unknown>;
}

export interface UserLoginRequest extends GeneralRequest {
  type: typeof TYPE_USER_LOGIN;
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
}

export interface UserLoginResponse extends GeneralRequest {
  type: typeof TYPE_USER_LOGIN;
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface UserLogoutRequest extends GeneralRequest {
  type: typeof TYPE_USER_LOGOUT;
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
}

export interface UserLogoutResponse extends GeneralRequest {
  type: typeof TYPE_USER_LOGOUT;
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}
