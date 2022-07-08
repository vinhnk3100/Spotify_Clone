import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Layout, Menu, Button } from 'antd';
import { MenuUnfoldOutlined, PlusCircleOutlined } from '@ant-design/icons';
import styles from './_SiderLayout.module.scss';
import { siderItems } from '../../utils/constants';

const { Sider } = Layout;

export default function SiderLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [locationKey, setLocationKey] = useState(siderItems[0].key);

  // Get Navigation when re-loading page
  useEffect(() => {
    const currentLocationPathname = location.pathname;

    // Get the SubMenu Array
    const subMenuItems = siderItems[3].children.concat(siderItems[4].children);

    // Change the submenu item into Menu
    const menuItems = siderItems.map(item => {
      return item;
    });

    const getMenuKey = menuItems.concat(subMenuItems).find(menu => {
      return menu.href === currentLocationPathname;
    });

    setLocationKey(getMenuKey.key);
  }, [location.pathname]);

  // ==================== Navigator sider menu handler
  const handleNavigationMenu = ({ item: { props }, key }) => {
    const currentHref = props.href;
    setLocationKey(key);
    // let currentHref = '';
    // const keyMenu = e.key;

    // const item = siderItems.find(({ key }) => {
    //   return key === keyMenu;
    // });

    // if (!item) {
    //   let subMenuItems = siderItems[3].children.concat(siderItems[4].children);

    //   currentHref = subMenuItems.find(item => {
    //     return item.key === keyMenu;
    //   });

    //   currentHref = currentHref.href;
    // } else {
    //   currentHref = item.href;
    // }

    navigate(currentHref);
  };

  return (
    <Sider
      className={`${styles.custom_sider_layout} custom_sider_layout`}
      collapsed={false}
    >
      <div
        className={`${styles.ant_sider_collapse_container} d-flex justify-content-start align-items-center ms-3`}
      >
        <button
          className={`${styles.ant_sider_collapse_btn} trigger`}
          type='button'
        >
          <MenuUnfoldOutlined />
        </button>
      </div>

      <section>
        <Menu
          className={`${styles.custom_sider_items} custom_sider_items`}
          activeKey={`${locationKey}`}
          mode={'inline'}
          defaultOpenKeys={['your_library_submenu', 'playlist_submenu']}
          items={siderItems}
          onClick={items => handleNavigationMenu(items)}
        ></Menu>
      </section>

      <section className={`${styles.custom_playlist_section}`}>
        <div className={`${styles.custom_sider_divide_topBar}`}></div>

        <div
          className={`${styles.custom_sider_new_playlist_section} ms-4 d-flex justify-content-start`}
        >
          <Button
            icon={<PlusCircleOutlined />}
            className={`${styles.new_playlist_btn} d-flex align-items-center justify-content-center`}
            size='large'
          >
            New Playlist
          </Button>
        </div>
      </section>

      {/* {items.map((item, index) => (
        <div key={index} className={`${styles.custom_sider_items} ms-4`}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.custom_sider_items} ${styles.active}`
                : `${styles.custom_sider_items}`
            }
            to={item.href}
          >
            {item.icon}
            {item.label}
          </NavLink>
        </div>
      ))}

      <div className={`${styles.custom_sider_playlist_section} ms-4`}>
        YOUR LIBRARY
      </div>
      {libraryItems.map((item, index) => (
        <div key={index} className={`${styles.custom_sider_items} ms-4`}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.custom_sider_items} ${styles.active}`
                : `${styles.custom_sider_items}`
            }
            to={item.href}
          >
            {item.label}
          </NavLink>
        </div>
      ))}

      <div className={`${styles.custom_sider_playlist_section} ms-4`}>
        PLAYLISTS
      </div>
      {playLists.map((item, index) => (
        <div key={index} className={`${styles.custom_sider_items} ms-4`}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.custom_sider_items} ${styles.active}`
                : `${styles.custom_sider_items}`
            }
            to={item.href}
          >
            {item.label}
          </NavLink>
        </div>
      ))}

      */}
    </Sider>
  );
}
