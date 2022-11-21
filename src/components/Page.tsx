import React, { FC } from "react";
import { Container } from "react-bootstrap";

interface Props {
   className?: string
   children?: React.ReactNode
}

const Page: FC<Props> = React.memo(({ className = '', children }) => {
   const defaultClassName = className ? ' pageBody' : 'pageBody';

   return (
      <div className="page">
         <Container className={className + defaultClassName}>
            {children}
         </Container>
      </div>
   );
});

export default Page;