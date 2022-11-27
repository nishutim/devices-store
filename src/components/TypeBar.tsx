import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { IType } from "../models";

interface Props {
   types: IType[]
   selectedType: number | null
   onTypeClick: (type: number | null) => void
}

const TypeBar: FC<Props> = React.memo(({ types, selectedType, onTypeClick }) => {
   const handleTypeClick = (type: number | null) => {
      onTypeClick(type);
      console.log(type);
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
               onClick={() => handleTypeClick(type.id)}
               active={type.id === selectedType}
            >
               {type.name}
            </ListGroup.Item>
         ))}
      </ListGroup>
   );
});

export default TypeBar;