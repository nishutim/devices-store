import React, { FC } from "react";
import { IDeviceInfoItem } from "../models";

interface Props {
   deviceCharacteristics: IDeviceInfoItem[]
}

const DeviceCharacteristics: FC<Props> = React.memo(({ deviceCharacteristics }) => {
   return (
      <div className="deviceInfoCharacteristics">
         <ul className="deviceInfoCharacteristicsList">
            {deviceCharacteristics.map((item => (
               <li key={item.id} className="deviceInfoCharacteristicsListItem">
                  <span>{item.title}</span>: {item.description}
               </li>
            )))}
         </ul>
      </div>
   );
});

export default DeviceCharacteristics;