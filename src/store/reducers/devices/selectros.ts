import { RootState } from './../../index';

export const devices_selectIsLoading = (state: RootState) => state.devices.isLoading;
export const devices_selectTypes = (state: RootState) => state.devices.types;
export const devices_selectBrands = (state: RootState) => state.devices.brands;
export const devices_selectDevices = (state: RootState) => state.devices.devices;
export const devices_selectDeviceInfo = (state: RootState) => state.devices.deviceInfo;
export const devices_selectTotalCount = (state: RootState) => state.devices.totalCount;
export const devices_selectFilter = (state: RootState) => state.devices.filter;
export const devices_selectError = (state: RootState) => state.devices.error;