import { $axios } from "../http";
import { IBrand, IDevice, IFilter, IType } from "../models";

class DevicesService {
   static fetchTypes = async () => {
      const { data } = await $axios.get<IType[]>('/type');
      return data;
   }

   static fetchBrands = async () => {
      const { data } = await $axios.get<IBrand[]>('/brand');
      return data;
   }

   static fetchAllDevices = async (filter: IFilter) => {
      const brandId = filter.brand && filter.type ?
         `?brandId=${filter.brand}&`
         :
         filter.brand ?
            `?brandId=${filter.brand}`
            :
            '';
      const typeId = filter.brand && filter.type ?
         `typeId=${filter.type}`
         :
         filter.type ?
            `?typeId=${filter.type}`
            :
            '';
      const { data } = await $axios.get<{ count: number, rows: IDevice[] }>('/device' + brandId + typeId);
      return data;
   }

   static fetchDevice = async (id: number) => {
      const { data } = await $axios.get<IDevice>('/device/' + id);
      return data;
   }
}

export default DevicesService;