import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { auth_selectIsAuth, auth_selectUser } from "../store/reducers/auth/selectors";
import RouteNames from "../router/RouteNames";
import { logout } from "../store/reducers/auth/thunk-creators";

const Header = () => {
   const isAuth = useAppSelector(auth_selectIsAuth);
   const user = useAppSelector(auth_selectUser);

   const userName = user?.email || 'Guest';
   const isAdmin = user?.role === 'ADMIN';

   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const [disableBtn, setDisableBtn] = useState(false);

   const handleAdminPannelClick = () => {
      navigate(RouteNames.ADMIN);
   }

   const handleSignOut = async () => {
      setDisableBtn(true);
      await dispatch(logout());
      setDisableBtn(false);
   }

   const handleSignIn = () => {
      navigate(RouteNames.LOGIN);
   }

   return (
      <header className="header">
         <Container>
            <div className="headerBody d-flex flex-row align-items-center gap-4">
               <NavLink className="logo" to={RouteNames.DEVICES}>Devices-Store</NavLink>
               <div className="headerUsername">{userName}</div>
               {isAdmin && <Button onClick={handleAdminPannelClick} className="btn">Admin pannel</Button>}
               {isAuth ?
                  <Button disabled={disableBtn} onClick={handleSignOut} className="btn">Sign out</Button>
                  :
                  <Button onClick={handleSignIn} className="btn">Sign in</Button>
               }
            </div>
         </Container>
      </header>
   );
}

export default Header;