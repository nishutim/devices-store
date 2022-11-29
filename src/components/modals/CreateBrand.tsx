import React, { ChangeEvent, FC, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

interface Props {
   show: boolean
   onHide: () => void
   onSubmit: (brand: string) => Promise<void>
}

const CreateBrand: FC<Props> = ({ show, onHide, onSubmit }) => {
   const [disableBtn, setDisableBtn] = useState(false);
   const [value, setValue] = useState('');

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   }

   const handleSubmit = async () => {
      setDisableBtn(true);
      await onSubmit(value);
      setValue('');
      setDisableBtn(false);
   }

   return (
      <Modal show={show} onHide={onHide} centered>
         <Modal.Header>
            <Modal.Title>Create Brand</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Control
                  value={value}
                  onChange={handleChange}
                  placeholder='Enter brand name...' />
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant='danger' onClick={onHide}>
               Close
            </Button>
            <Button variant='success' disabled={disableBtn} onClick={handleSubmit}>
               Create brand
            </Button>
         </Modal.Footer>
      </Modal>
   );
}

export default CreateBrand;