import React, { ChangeEvent, FC, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { IBrand, IDeviceInfoItem, IType } from '../../models';
import getTrimmedFirstLetterCapitalizedValue from '../../utils/getTrimmedFirstLetterCapitalizedValue';

interface Props {
   show: boolean
   onHide: () => void
   types: IType[]
   brands: IBrand[]
   onSubmit: (device: FormData) => Promise<void>
}

const CreateDevice: FC<Props> = React.memo(({ show, onHide, types, brands, onSubmit }) => {
   const [disableBtn, setDisableBtn] = useState(false);
   const [selectedType, setSelectedType] = useState<IType | null>(null);
   const [selectedBrand, setSelectedBrand] = useState<IType | null>(null);
   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [file, setFile] = useState<File | null>(null);
   const [info, setInfo] = useState<IDeviceInfoItem[]>([]);

   const selectType = (type: IType) => {
      setSelectedType(type);
   }

   const selectBrand = (brand: IBrand) => {
      setSelectedBrand(brand);
   }

   const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
   }

   const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPrice(e.target.value);
   }

   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
         setFile(files[0]);
      }
   }

   const addInfo = () => {
      setInfo(info => [...info, {
         title: '',
         description: '',
         id: Date.now()
      }]);
   }

   const handleInfoChange = (key: string, value: string, id: number) => {
      setInfo(info.map(item => (
         item.id === id
            ? { ...item, [key]: value }
            : item
      )))
   }

   const removeInfo = (id: number) => {
      setInfo(info.filter(item => item.id !== id));
   }

   const handleSubmit = async () => {
      setDisableBtn(true);

      let validName = getTrimmedFirstLetterCapitalizedValue(name);
      let validInfo = info.map(item => {
         let validTitle = getTrimmedFirstLetterCapitalizedValue(item.title);
         let validDescription = getTrimmedFirstLetterCapitalizedValue(item.description);
         return {
            ...item,
            title: validTitle,
            description: validDescription
         }
      });

      const formData = new FormData();
      formData.append('typeId', `${selectedType?.id}`);
      formData.append('brandId', `${selectedBrand?.id}`);
      formData.append('name', validName);
      formData.append('price', price);
      if (file) formData.append('img', file);
      formData.append('info', JSON.stringify(validInfo));

      await onSubmit(formData);

      setSelectedType(null);
      setSelectedBrand(null);
      setName('');
      setPrice('');
      setFile(null);
      setInfo([]);

      setDisableBtn(false);
   }

   return (
      <Modal show={show} centered>
         <Modal.Header>
            <Modal.Title>Create Device</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form className='d-flex flex-column'>
               <h4 className='createDeviceTitle'>Choose type and brand:</h4>
               <div className='mb-4 d-flex flex-row gap-4'>
                  <Dropdown>
                     <Dropdown.Toggle>{selectedType ? `${selectedType.name}` : 'Choose Type'}</Dropdown.Toggle>
                     <Dropdown.Menu>
                        {types.map(type => (
                           <Dropdown.Item key={type.id} onClick={() => selectType(type)}>
                              {type.name}
                           </Dropdown.Item>
                        ))}
                     </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                     <Dropdown.Toggle>{selectedBrand ? `${selectedBrand.name}` : 'Choose Brand'}</Dropdown.Toggle>
                     <Dropdown.Menu>
                        {brands.map(brand => (
                           <Dropdown.Item key={brand.id} onClick={() => selectBrand(brand)}>
                              {brand.name}
                           </Dropdown.Item>
                        ))}
                     </Dropdown.Menu>
                  </Dropdown>
               </div>
               <h4 className='createDeviceTitle'>Enter device name:</h4>
               <Form.Control
                  className='mb-4'
                  value={name}
                  onChange={handleNameChange}
                  placeholder={'Enter device name...'} />
               <h4 className='createDeviceTitle'>Enter device price:</h4>
               <Form.Control
                  className='mb-4'
                  type='number'
                  value={price}
                  onChange={handlePriceChange}
                  placeholder={'Enter device price...'} />
               <h4 className='createDeviceTitle'>Choose device image:</h4>
               <Form.Control
                  className='mb-4'
                  type='file'
                  onChange={handleFileChange}
                  placeholder={'Choose device image'} />
               <h4 className='createDeviceTitle'>Add characteristic:</h4>
               <Button className='align-self-start' onClick={addInfo}>Add Characteristic</Button>
               <ul className='m-0 p-0 d-flex flex-column'>
                  {info.map(item => (
                     <li key={item.id} className='mt-2 d-flex flex-row gap-2'>
                        <Form.Control
                           value={item.title}
                           onChange={(e: any) => handleInfoChange('title', e.target.value, item.id)}
                           placeholder={'Characteristic title...'} />
                        <Form.Control
                           value={item.description}
                           onChange={(e: any) => handleInfoChange('description', e.target.value, item.id)}
                           placeholder={'Characteristic text...'} />
                        <Button variant='danger' onClick={() => removeInfo(item.id)}>Delete</Button>
                     </li>
                  ))}
               </ul>
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant='danger' onClick={onHide}>
               Close
            </Button>
            <Button variant='success' disabled={disableBtn} onClick={handleSubmit}>
               Create Device
            </Button>
         </Modal.Footer>
      </Modal>
   );
});

export default CreateDevice;