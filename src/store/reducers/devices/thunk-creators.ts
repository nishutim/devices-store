import { AppDispatch } from "../..";
import { DevicesActions } from ".";
import DevicesService from "../../../services/devicesService";
import { IFilter } from "../../../models";

export const fetchTypes = () => async (dispatch: AppDispatch) => {
   try {
      const data = await DevicesService.fetchTypes();
      dispatch(DevicesActions.fetchTypesSuccess(data));
   } catch (e: any) {
      dispatch(DevicesActions.fetchTypesFail(e.message));
   }
}

export const fetchBrands = () => async (dispatch: AppDispatch) => {
   try {
      const data = await DevicesService.fetchBrands();
      dispatch(DevicesActions.fetchBrandsSuccess(data));
   } catch (e: any) {
      dispatch(DevicesActions.fetchBrandsFail(e.message));
   }
}

export const fetchAllDevices = (filter: IFilter) => async (dispatch: AppDispatch) => {
   dispatch(DevicesActions.toggleIsLoading(true));
   try {
      const data = await DevicesService.fetchAllDevices(filter);
      dispatch(DevicesActions.fetchAllDevicesSuccess(data));
   } catch (e: any) {
      dispatch(DevicesActions.fetchAllDevicesFail(e.message));
   }
   dispatch(DevicesActions.toggleIsLoading(false));
}

export const fetchDeviceData = (id: number) => async (dispatch: AppDispatch) => {
   dispatch(DevicesActions.toggleIsLoading(true));
   try {
      const data = await DevicesService.fetchDevice(id);
      dispatch(DevicesActions.fetchDeviceSuccess(data));
   } catch (e: any) {
      dispatch(DevicesActions.fetchDeviceFail(e.message));
   }
   dispatch(DevicesActions.toggleIsLoading(false));
}