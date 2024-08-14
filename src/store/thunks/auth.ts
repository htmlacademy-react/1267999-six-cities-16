import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserModel } from 'types/user.ts';
import { AxiosInstance } from 'axios';
import { EndPoint, ErrorToast } from 'const/const.ts';
import { dropToken, saveToken } from 'services/token.ts';
import { toast } from 'react-toastify';

type LoginData = {
  email: string;
  password: string;
};

const checkAuth = createAsyncThunk<UserModel, void, { extra: AxiosInstance }>(
  'auth/checkAuth',
  async (_arg, { extra: api }) => {
    try {
      const response = await api.get<UserModel>(EndPoint.Login);

      return response.data;
    } catch (error) {
      toast.error(ErrorToast.CheckAuthError);
      throw error;
    }
  },
);

const login = createAsyncThunk<UserModel, LoginData, { extra: AxiosInstance }>(
  'auth/login',
  async (body, { extra: api }) => {
    try {
      const response = await api.post<UserModel>(EndPoint.Login, body);
      saveToken(response.data.token);
      return response.data;
    } catch (error) {
      toast.error(ErrorToast.Login);
      throw error;
    }
  },
);

const logout = createAsyncThunk<unknown, undefined, { extra: AxiosInstance }>(
  'auth/logout',
  async (_, { extra: api }) => {
    try {
      await api.delete(EndPoint.Logout);
      dropToken();
    } catch (error) {
      toast.error(ErrorToast.Logout);
      throw error;
    }
  },
);

export { checkAuth, login, logout };
