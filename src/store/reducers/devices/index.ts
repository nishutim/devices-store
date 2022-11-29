import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IBrand, IDevice, IDeviceInfo, IFilter, IType } from "../../../models";

interface InitialState {
   isLoading: boolean
   types: IType[] | null
   brands: IBrand[] | null
   devices: IDevice[] | null
   deviceInfo: IDeviceInfo | null
   totalCount: number
   filter: IFilter
   error: string
}

const initialState = {
   isLoading: false,
   types: null,
   brands: null,
   devices: null,
   deviceInfo: null,
   totalCount: 0,
   filter: {
      brand: null,
      type: null
   },
   error: ''
} as InitialState;

const devicesSlice = createSlice({
   name: 'devices',
   initialState,
   reducers: {
      toggleIsLoading: (state, action: PayloadAction<boolean>) => {
         state.isLoading = action.payload
      },
      fetchTypesSuccess: (state, action: PayloadAction<IType[]>) => {
         state.types = action.payload
         state.error = ''
      },
      fetchTypesFail: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      },
      fetchBrandsSuccess: (state, action: PayloadAction<IBrand[]>) => {
         state.brands = action.payload
         state.error = ''
      },
      fetchBrandsFail: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      },
      fetchAllDevicesSuccess: (state, action: PayloadAction<{ count: number, rows: IDevice[] }>) => {
         state.devices = action.payload.rows
         state.totalCount = action.payload.count
         state.error = ''
      },
      fetchAllDevicesFail: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      },
      fetchDeviceInfoSuccess: (state, action: PayloadAction<IDeviceInfo>) => {
         state.deviceInfo = action.payload
         state.error = ''
      },
      fetchDeviceInfoFail: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      },
      setFilter: (state, action: PayloadAction<IFilter>) => {
         state.filter = action.payload
      }
   }
});

export const DevicesActions = devicesSlice.actions;

export default devicesSlice.reducer;