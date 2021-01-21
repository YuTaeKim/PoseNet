import API from './API';
import { StorageGetToken } from 'utils/Storage';

export const refreshToken = async () => {
  const { refresh } = await StorageGetToken();
  const data = {
    refresh: refresh,
  };
  return API.post(`/mall/refresh/`, data);
};

export const validation = (req: any) => {
  return API.get(`/auth/validation/`, req);
};

export const social_login = (formdata: any) => {
  formdata.append('grant_type', 'convert_token');
  const headers = {
    'Content-Type': 'multipart/form-data',
  };
  return API.post(`/auth/social-login/`, formdata, {
    headers: headers,
  });
};
