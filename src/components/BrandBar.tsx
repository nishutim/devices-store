import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { IBrand } from "../models";

interface Props {
   brands: IBrand[]
   selectedBrand: number | null
   onBrandClick: (brand: number | null) => void
}

const BrandBar: FC<Props> = React.memo(({ brands, selectedBrand, onBrandClick }) => {
   const handleBrandClick = (brand: number | null) => {
      onBrandClick(brand);
      console.log(brand);
   }

   return (
      <ListGroup className="brandBar">
         <ListGroup.Item
            className="brandBarBrand"
            onClick={() => handleBrandClick(null)}
            active={selectedBrand === null}
         >
            All
         </ListGroup.Item>
         {brands.map(brand => (
            <ListGroup.Item
               className="brandBarBrand"
               key={brand.id}
               onClick={() => handleBrandClick(brand.id)}
               active={brand.id === selectedBrand}
            >
               {brand.name}
            </ListGroup.Item>
         ))}
      </ListGroup>
   );
});

export default BrandBar;