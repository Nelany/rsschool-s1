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

export interface UsersActiveRequest {
  id: string;
  type: 'USER_ACTIVE';
  payload: null;
}

export interface UsersActiveResponse {
  id: string;
  type: 'USER_ACTIVE';
  payload: {
    users: [];
  };
}

export interface UsersInactiveRequest {
  id: string;
  type: 'USER_INACTIVE';
  payload: null;
}

export interface UsersInactiveResponse {
  id: string;
  type: 'USER_INACTIVE';
  payload: {
    users: [];
  };
}

export interface UserExternalLoginResponse {
  id: null;
  type: 'USER_EXTERNAL_LOGIN';
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface UserExternalLogoutResponse {
  id: null;
  type: 'USER_EXTERNAL_LOGOUT';
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface MSGSendRequest {
  id: string;
  type: 'MSG_SEND';
  payload: {
    message: {
      to: string;
      text: string;
    };
  };
}

export interface MSGSend {
  id: string | null;
  type: 'MSG_SEND';
  payload: {
    message: {
      id: string;
      from: string;
      to: string;
      text: string;
      datetime: number;
      status: {
        isDelivered: boolean;
        isReaded: boolean;
        isEdited: boolean;
      };
    };
  };
}

export interface MSGSHistoryRequest {
  id: string;
  type: 'MSG_FROM_USER';
  payload: {
    user: {
      login: string;
    };
  };
}

export interface MSGSHistoryResponse {
  id: string;
  type: 'MSG_FROM_USER';
  payload: {
    messages: [];
  };
}

export interface MSGDeliver {
  id: null;
  type: 'MSG_DELIVER';
  payload: {
    message: {
      id: string;
      status: {
        isDelivered: boolean;
      };
    };
  };
}
