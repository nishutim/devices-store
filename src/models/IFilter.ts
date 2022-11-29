import IBrand from './IBrand';
import IType from './IType';

interface IFilter {
   brand: IBrand | null
   type: IType | null
}

export default IFilter;