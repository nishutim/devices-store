import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { devices_selectBrands, devices_selectTypes } from '../store/reducers/devices/selectros';
import { createBrand, createDevice, createType, fetchBrands, fetchTypes } from '../store/reducers/devices/thunk-creators';
import Page from '../components/Page';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import Preloader from '../components/Preloader';

const AdminPage = () => {
   const [showCreateType, setShowCreateType] = useState(false);
   const [showCreateBrand, setShowCreateBrand] = useState(false);
   const [showCreateDevice, setShowCreateDevice] = useState(false);

   const types = useAppSelector(devices_selectTypes);
   const brands = useAppSelector(devices_selectBrands);

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchTypes());
      dispatch(fetchBrands());
   }, []);

   const closeCreateType = useCallback(() => {
      setShowCreateType(false);
   }, []);

   const closeCreateBrand = useCallback(() => {
      setShowCreateBrand(false);
   }, []);

   const closeCreateDevice = useCallback(() => {
      setShowCreateDevice(false);
   }, []);

   const handleCreateType = useCallback(async (type: string) => {
      await dispatch(createType(type));
   }, []);

   const handleCreateBrand = useCallback(async (brand: string) => {
      await dispatch(createBrand(brand));
   }, []);

   const handleCreateDevice = useCallback(async (device: FormData) => {
      await dispatch(createDevice(device));
   }, []);

   if (!types || !brands) return <Preloader />;

   return (
      <Page className="adminPage">
         <div className='adminPageActions d-flex flex-row justify-content-center gap-4'>
            <Button className='adminPageBtn' onClick={() => setShowCreateType(true)}>Create Type</Button>
            <Button className='adminPageBtn' onClick={() => setShowCreateBrand(true)}>Create Brand</Button>
            <Button className='adminPageBtn' onClick={() => setShowCreateDevice(true)}>Create Device</Button>
            <CreateType
               show={showCreateType}
               onHide={closeCreateType}
               onSubmit={handleCreateType} />
            <CreateBrand
               show={showCreateBrand}
               onHide={closeCreateBrand}
               onSubmit={handleCreateBrand} />
            <CreateDevice
               show={showCreateDevice}
               onHide={closeCreateDevice}
               types={types}
               brands={brands}
               onSubmit={handleCreateDevice} />
         </div>
      </Page>
   );
};

export default AdminPage;
