import { UserModel } from 'types/user.ts';
import { AuthorizationStatus, RequestStatus } from 'const/const.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkAuth, login, logout } from 'store/thunks/auth.ts';

type UserState = {
  info: UserModel | null;
  requestStatus: RequestStatus;
  status: AuthorizationStatus;
};

const initialState: UserState = {
  info: null,
  requestStatus: RequestStatus.Idle,
  status: AuthorizationStatus.Unknown,
};

function processSuccess(state: UserState, action: PayloadAction<UserModel>) {
  state.info = action.payload;
  state.status = AuthorizationStatus.Auth;
  state.requestStatus = RequestStatus.Success;
}

function processFailed(state: UserState) {
  state.requestStatus = RequestStatus.Failed;
  state.status = AuthorizationStatus.NoAuth;
}

function processLoading(state: UserState) {
  state.requestStatus = RequestStatus.Loading;
}

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
  selectors: {
    info: (state) => state.info,
    requestStatus: (state) => state.requestStatus,
    status: (state) => state.status,
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, processSuccess)
      .addCase(checkAuth.rejected, processFailed)
      .addCase(checkAuth.pending, processLoading)
      .addCase(login.fulfilled, processSuccess)
      .addCase(login.rejected, processFailed)
      .addCase(login.pending, processLoading)
      .addCase(logout.fulfilled, (state) => {
        state.info = null;
        state.status = AuthorizationStatus.NoAuth;
      });
  },
});

const userSelectors = userSlice.selectors;

export { userSlice, userSelectors };
