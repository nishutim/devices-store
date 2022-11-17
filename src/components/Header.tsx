import React from "react";
import { Button, Container } from "react-bootstrap";

const Header = () => {
   return (
      <header className="header">
         <Container>
            <div className="headerBody d-flex flex-row justify-content-between align-items-center">
               <Button>Hello</Button>
               <Button>GoodBuye</Button>
            </div>
         </Container>
      </header>
   );
}

export default Header;