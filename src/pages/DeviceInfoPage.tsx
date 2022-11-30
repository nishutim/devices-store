import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { devices_selectDeviceInfo, devices_selectError, devices_selectIsLoading } from "../store/reducers/devices/selectros";
import { fetchDeviceInfo } from "../store/reducers/devices/thunk-creators";
import Page from "../components/Page";
import Preloader from "../components/Preloader";
import GlobalErrorMessage from "../components/GlobalErrorMessage";
import DeviceInfoPreview from "../components/DeviceInfoPreview";
import DeviceCharacteristics from "../components/DeviceCharacteristics";

const DeviceInfoPage = () => {
   const isLoading = useAppSelector(devices_selectIsLoading);
   const deviceInfo = useAppSelector(devices_selectDeviceInfo);
   const error = useAppSelector(devices_selectError);

   const { id } = useParams();
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (id) {
         dispatch(fetchDeviceInfo(Number(id)));
      }
   }, [id]);

   if (!deviceInfo || isLoading) return <Preloader />;
   if (error) return <GlobalErrorMessage message={error} />;

   return (
      <Page>
         <DeviceInfoPreview deviceInfo={deviceInfo} />
         <DeviceCharacteristics deviceCharacteristics={deviceInfo.info} />
      </Page>
   );
}

export default DeviceInfoPage;