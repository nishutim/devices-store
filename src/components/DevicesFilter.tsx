import React, { FC } from "react";
import { useAppDispatch } from "../hooks/redux";
import { IBrand, IFilter, IType } from "../models";
import { DevicesActions } from "../store/reducers/devices";
import BrandBar from "./BrandBar";
import TypeBar from "./TypeBar";

interface Props {
   brands: IBrand[]
   types: IType[]
   filter: IFilter
}

const DevicesFilter: FC<Props> = React.memo(({ brands, types, filter }) => {
   const selectedBrand = filter.brand;
   const selectedType = filter.type;

   const dispatch = useAppDispatch();

   const handleBrandClick = (brand: IBrand | null) => {
      if (brand?.id !== filter?.brand?.id) {
         const newFilter = { ...filter, brand };
         dispatch(DevicesActions.setFilter(newFilter));
      }
   }

   const handleTypeClick = (type: IType | null) => {
      if (type?.id !== filter?.type?.id) {
         const newFilter = { ...filter, type };
         dispatch(DevicesActions.setFilter(newFilter));
      }
   }

   return (
      <div className="devicesFilter">
         <div className="divicesFilterItem">
            <h4 className="devicesFilterTitle">Brands</h4>
            <BrandBar
               onBrandClick={handleBrandClick}
               brands={brands}
               selectedBrand={selectedBrand} />
         </div>
         <div className="divicesFilterItem">
            <h4 className="devicesFilterTitle">Device Types</h4>
            <TypeBar
               onTypeClick={handleTypeClick}
               types={types}
               selectedType={selectedType} />
         </div>
      </div>
   );
});

export default DevicesFilter;