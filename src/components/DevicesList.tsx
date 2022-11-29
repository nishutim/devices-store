import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IDevice } from "../models";
import RouteNames from "../router/RouteNames";
import DeviceCard from "./DeviceCard";
import Preloader from "./Preloader";

interface Props {
   isLoading: boolean
   devices: IDevice[] | null
}

const DevicesList: FC<Props> = React.memo(({ isLoading, devices }) => {
   const navigate = useNavigate();

   const handleItemClick = (id: number) => {
      navigate(RouteNames.DEVICES + '/' + id)
   }

   if (!devices || isLoading) return <Preloader />;
   if (!devices.length) return <div className="devicesWarningMessage">Seems like we're out of what you search now</div>

   return (
      <ul className="devicesList">
         {devices.map(device => (
            <li key={device.id} onClick={() => handleItemClick(device.id)} className="deviceListItem">
               <DeviceCard device={device} />
            </li>
         ))}
      </ul>
   );
});

export default DevicesList;