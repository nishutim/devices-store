import { $axios, $axiosAuth } from '../http';
import { IBrand, IDevice, IDeviceInfo, IFilter, IType } from '../models';

class DevicesService {
   static fetchTypes = async () => {
      const { data } = await $axios.get<IType[]>('/type');
      return data;
   };

   static fetchBrands = async () => {
      const { data } = await $axios.get<IBrand[]>('/brand');
      return data;
   };

   static fetchAllDevices = async (filter: IFilter) => {
      const brandId = filter.brand && filter.type ? `?brandId=${filter.brand.id}&` : filter.brand ? `?brandId=${filter.brand.id}` : '';
      const typeId = filter.brand && filter.type ? `typeId=${filter.type.id}` : filter.type ? `?typeId=${filter.type.id}` : '';
      const { data } = await $axios.get<{ count: number; rows: IDevice[] }>('/device' + brandId + typeId);
      return data;
   };

   static fetchDevice = async (id: number) => {
      const { data } = await $axios.get<IDeviceInfo>('/device/' + id);
      return data;
   };

   static createType = async (type: string) => {
      const { data } = await $axiosAuth.post('/type', { name: type });
      return data;
   };

   static createBrand = async (brand: string) => {
      const { data } = await $axiosAuth.post('/brand', { name: brand });
      return data;
   };

   static createDevice = async (device: FormData) => {
      const { data } = await $axiosAuth.post('/device', device);
      return data;
   };
}

export default DevicesService;
