import React, { useState } from 'react';
import { Menu, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = async(event) => {
    const { key } = event;
    if (key === 'services') {
      navigate('/services');
    }else if(key === 'about'){
      navigate('/about');
    }else {
      navigate('/');
      setDrawerOpen(false);
      await new Promise((resolve) => setTimeout(resolve, 100));
      scrollToSection(`section-${key}`);
    }
    setDrawerOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    {
      key: 'home',
      label: 'HOME',
      icon: null,
    },
    {
      key: 'about',
      label: 'ABOUT US',
      icon: null,
    },
    {
      key: 'services',
      label: 'SERVICES',
      icon: null,
    },
    {
      key: 'work',
      label: 'WORK',
      icon: null,
    },
    {
      key: 'news',
      label: 'NEWS',
      icon: null,
    },
    {
      key: 'contact',
      label: 'CONTACT',
      icon: null,
    },
  
  ];

  return (
    <>
      <div className="menu-header">
        <MenuOutlined
          onClick={() => setDrawerOpen(true)}
          style={{ fontSize: '50px' }}
        />
      </div>
      <Drawer
        placement="right"
        closable={true}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        getContainer={false}
        bodyStyle={{ padding: 0 }}
        style={{ background: 'transparent' }} 
        className="custom-drawer"
      >
        <Menu 
        mode="vertical" 
        theme="light" 
        items={menuItems} 
        onClick={handleMenuClick}
        style={{ background: 'transparent'}} 
         />
      </Drawer>
    </>
  );
};

export default Header;
