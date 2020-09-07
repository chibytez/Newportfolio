import React from 'react';
import {Link} from 'react-router-dom';
import { faHome, faPhone, faBriefcase, faLaugh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidenav_item.css"

const SidenavItems = () => {

  const items = [
    {
      type: 'navItem',
      icon:faHome,
      text:' Home',
      link:'/'
    },
    {
      type: 'navItem',
      icon:faLaugh,
      text:' About Me',
      link:'/about'
    },
    {
      type: 'navItem',
      icon:faBriefcase,
      text:' My Works',
      link:'/works',
    },
    {
      type: 'navItem',
      icon:faPhone,
      text:' How to Reach Me',
      link:'/contact'
    }
  ]

  const element = (item,i) =>(
    <div key={i} className={item.type}>
      <Link to={item.link}>
        <FontAwesomeIcon icon={item.icon}/>
        {item.text}
      </Link>
    </div>
  )

  const showItems = () =>(
  
      items.map((item,i)=>{
            return element(item,i)  
        })
  )

  return (
    <div>
      {showItems()}
    </div>
  );
};



export default SidenavItems;