import React, { FC } from 'react';
import { IDeviceInfo } from '../models';
import defaultProductImg from '../assets/img/12pro.jpg'

interface Props {
   deviceInfo: IDeviceInfo
}

const DeviceInfoPreview: FC<Props> = React.memo(({ deviceInfo }) => {
   const { name, price, rating, img } = deviceInfo;

   const image = process.env.REACT_APP_API_URL + img || defaultProductImg;

   return (
      <div className="deviceInfoPreview">
         <div className="deviceInfoImage ibg">
            <img src={image} alt="Product" />
         </div>
         <div className="deviceInfoActions">
            <h3 className="deviceInfoName">{name}</h3>
            <p className="deviceInfoPrice">Price: <span>{price}$</span></p>
            <p className="deviceInfoRating">Rating: {rating}</p>
         </div>
      </div>
   );
});

export default DeviceInfoPreview;