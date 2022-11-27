import React, { FC } from "react";
import defaultDeviceImg from "../assets/img/12pro.jpg";
import { IDevice } from "../models";
import BrandNames from "../utils/brandNames";

interface Props {
   device: IDevice
}

const DeviceCard: FC<Props> = React.memo(({ device }) => {
   const { name, price, brandId } = device;

   const image = defaultDeviceImg;
   const brand = BrandNames[brandId];

   return (
      <div className="deviceCard">
         <div className="deviceCardImage ibg">
            <img src={image} alt="image" />
         </div>
         <div className="deviceCardBody">
            <p className="deviceCardBrand">{brand}</p>
            <p className="deviceCardName">{name}</p>
            <p className="deviceCardPrice">{price} $</p>
         </div>
      </div>
   );
});

export default DeviceCard;