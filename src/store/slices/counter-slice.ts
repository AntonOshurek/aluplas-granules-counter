import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { granulatesState } from '../state/granulates-state';
//types
import type { AppThunk } from '../../types/store-types';
import type { IGranulatesSettingsType, ItemsTypes } from '../../types/data-types';
import type { IIncDecActionParametrsType, ILogActionType } from '../../types/action-types';
//API
import { granulatesDataApi, granulatesStorageApi } from '../../api/';

export const granulatesSlice = createSlice({
  name: 'granulates',
  initialState: granulatesState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      state.items[action.payload.UNID].amount = state.items[action.payload.UNID].amount + action.payload.value;
    },
    decrement: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      state.items[action.payload.UNID].amount = state.items[action.payload.UNID].amount - action.payload.value;
    },
    log: (state, action: PayloadAction<ILogActionType>) => {
      const {UNID, logName, logValue} = action.payload;

      state.items[UNID].logs[logName] = [...state.items[UNID].logs[logName], logValue];
    },
    setNewSettings: (state, action: PayloadAction<IGranulatesSettingsType>) => {
      state.granulatesSettings = action.payload;
    },
    clearItem: (state, action: PayloadAction<ItemsTypes>) => {
      state.items[action.payload.UNID] = action.payload;
    },
    clear: (state) => {
      state.items = granulatesDataApi.getDefaultData();
    }
  },
});

export const { clear, clearItem, log } = granulatesSlice.actions;

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(granulatesSlice.actions.increment(action));
    granulatesStorageApi.setItems(getState().granulates.items);
  };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(granulatesSlice.actions.decrement(action));
    granulatesStorageApi.setItems(getState().granulates.items);
  };

export const clearStoreAction =
  (): AppThunk =>
  (dispatch) => {
    dispatch(granulatesSlice.actions.clear());
    granulatesStorageApi.setItems(granulatesDataApi.getDefaultData());
  };

export const clearItemAction =
  (action: {id: number}): AppThunk =>
  (dispatch, getState) => {
    const newDefaultItem = granulatesDataApi.getDefaultItem(action.id)
    dispatch(granulatesSlice.actions.clearItem(newDefaultItem));
    granulatesStorageApi.setItems(getState().granulates.items);
  };

export const setSettingsAction =
  (action: IGranulatesSettingsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(granulatesSlice.actions.setNewSettings(action));
    granulatesStorageApi.setSettings(getState().granulates.granulatesSettings);
  };

export default granulatesSlice.reducer;
