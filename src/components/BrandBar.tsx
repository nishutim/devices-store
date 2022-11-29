import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { IBrand } from "../models";

interface Props {
   brands: IBrand[]
   selectedBrand: IBrand | null
   onBrandClick: (brand: IBrand | null) => void
}

const BrandBar: FC<Props> = React.memo(({ brands, selectedBrand, onBrandClick }) => {
   const handleBrandClick = (brand: IBrand | null) => {
      onBrandClick(brand);
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
               onClick={() => handleBrandClick(brand)}
               active={brand.id === selectedBrand?.id}
            >
               {brand.name}
            </ListGroup.Item>
         ))}
      </ListGroup>
   );
});

export default BrandBar;