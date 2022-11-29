import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { IType } from "../models";

interface Props {
   types: IType[]
   selectedType: IType | null
   onTypeClick: (type: IType | null) => void
}

const TypeBar: FC<Props> = React.memo(({ types, selectedType, onTypeClick }) => {
   const handleTypeClick = (type: IType | null) => {
      onTypeClick(type);
   }

   return (
      <ListGroup className="brandBar">
         <ListGroup.Item
            className="brandBarBrand"
            onClick={() => handleTypeClick(null)}
            active={selectedType === null}
         >
            All
         </ListGroup.Item>
         {types.map(type => (
            <ListGroup.Item
               className="brandBarBrand"
               key={type.id}
               onClick={() => handleTypeClick(type)}
               active={type.id === selectedType?.id}
            >
               {type.name}
            </ListGroup.Item>
         ))}
      </ListGroup>
   );
});

export default TypeBar;