import React from 'react';
import SideNav from 'react-simple-sidenav'
import SidenavItems from './sidenav_item';

const Nav = (props) => {
  return (
    <SideNav
        showNav={props.showNav}
        onHideNav={props.hideNav}
        navStyle={{
          background:'#242424',
          maxWidth:'220px',
          position:'relative',
          paddingTop:8,
          marginTop:8     
        }}
    >
      <SidenavItems/>
    </SideNav>
  );
};

export default Nav; 