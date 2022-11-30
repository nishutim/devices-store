import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { devices_selectBrands, devices_selectDevices, devices_selectError, devices_selectFilter, devices_selectIsLoading, devices_selectTypes } from "../store/reducers/devices/selectros";
import { fetchAllDevices, fetchBrands, fetchTypes } from "../store/reducers/devices/thunk-creators";
import Page from "../components/Page";
import DevicesFilter from "../components/DevicesFilter";
import DevicesList from "../components/DevicesList";
import Preloader from "../components/Preloader";

const DevicesPage = () => {
   const isLoading = useAppSelector(devices_selectIsLoading);
   const brands = useAppSelector(devices_selectBrands);
   const types = useAppSelector(devices_selectTypes);
   const devices = useAppSelector(devices_selectDevices);
   const filter = useAppSelector(devices_selectFilter);
   const error = useAppSelector(devices_selectError);

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchBrands());
      dispatch(fetchTypes());
   }, []);

   useEffect(() => {
      dispatch(fetchAllDevices(filter));
   }, [filter]);

   if (!brands || !types) return <Preloader />;
   if (error) return <div>{error}</div>;

   return (
      <Page>
         <div className="devices">
            <DevicesFilter
               brands={brands}
               types={types}
               filter={filter} />
            <DevicesList
               isLoading={isLoading}
               devices={devices} />
         </div>
      </Page>
   );
}

export default DevicesPage;