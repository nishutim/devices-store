import React, { FC } from 'react';
import defaultProductImg from '../assets/img/12pro.jpg'
import { IDeviceInfo } from '../models';
import BrandNames from '../utils/brandNames';

interface Props {
   deviceInfo: IDeviceInfo
}

const DeviceInfoPreview: FC<Props> = React.memo(({ deviceInfo }) => {
   const { name, price, rating, img, brandId } = deviceInfo;

   const image = process.env.REACT_APP_API_URL + img || defaultProductImg;
   const brand = BrandNames[brandId];

   return (
      <div className="deviceInfoPreview">
         <div className="deviceInfoImage ibg">
            <img src={image} alt="Product Image" />
         </div>
         <div className="deviceInfoActions">
            <h3 className="deviceInfoName">{brand + ' ' + name}</h3>
            <p className="deviceInfoPrice">Price: <span>{price}$</span></p>
            <p className="deviceInfoRating">Rating: {rating}</p>
         </div>
      </div>
   );
});

export default DeviceInfoPreview;