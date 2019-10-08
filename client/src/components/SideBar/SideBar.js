import React, { useState } from 'react';
import { useHistory } from "react-router"

import { menus } from 'Modal/menu';
import Img from 'Components/Img/Img';
import me from 'Assets/images/me.jpg';

import './SideBar.scss';

function SideBar() {
  const history = useHistory();
  const [path, setPath] = useState(history.location.pathname || '/');

  const goToPath = ({ path }) => {
    history.push(path);
    setPath(path);
  }

  return (
    <div className="SideBar">
      <div className="logo">
        <Img src={me} width={200} height={150} isOpenPreview={true} />
      </div>
      {
        menus.map(menu => (
          <div
            className={`menu-item ${path === menu.path ? 'active' : ''}`}
            key={menu.id}
            onClick={() => goToPath(menu)}
          >
            {menu.name}
          </div>
        ))
      }
    </div>
  );
}

export default SideBar;