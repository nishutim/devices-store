import IDevice from "./IDevice";
import IDeviceInfoItem from "./IDeviceInfoItem";

interface IDeviceInfo {
   id: number
   name: string
   price: number
   rating: number
   img: string
   createdAt: string
   updatedAt: string
   typeId: number
   brandId: number
   info: IDeviceInfoItem[]
}

export default IDeviceInfo;