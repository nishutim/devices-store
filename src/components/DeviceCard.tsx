import React, { FC } from "react";
import { IDevice } from "../models";
import defaultDeviceImg from "../assets/img/12pro.jpg";

interface Props {
   device: IDevice
}

const DeviceCard: FC<Props> = React.memo(({ device }) => {
   const { name, price, img } = device;

   const image = process.env.REACT_APP_API_URL + img || defaultDeviceImg;

   return (
      <div className="deviceCard">
         <div className="deviceCardImage ibg">
            <img src={image} alt="" />
         </div>
         <div className="deviceCardBody">
            <p className="deviceCardName">{name}</p>
            <p className="deviceCardPrice">{price} $</p>
         </div>
      </div>
   );
});

export default DeviceCard;