import React from 'react';
import { Layout, Menu, Typography, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = ({ 
  currentSection, 
  mobileMenuVisible, 
  setMobileMenuVisible, 
  scrollToSection, 
  menuItems 
}) => {
  return (
    <AntHeader className="portfolio-header">
      <div className="header-content">
        <Title level={3} className="header-title">
          Ankur Anubhav
        </Title>
        
        {/* Desktop Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[currentSection]}
          className="desktop-menu"
          theme="dark"
        >
          {menuItems.map(item => (
            <Menu.Item 
              key={item.key} 
              icon={item.icon}
              onClick={() => scrollToSection(item.key)}
              className="menu-item"
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>

        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
          className="mobile-menu-button"
        />
      </div>

      {/* Mobile Menu */}
      {mobileMenuVisible && (
        <div className="mobile-menu">
          {menuItems.map(item => (
            <div
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              className="mobile-menu-item"
            >
              {item.icon} {item.label}
            </div>
          ))}
        </div>
      )}
    </AntHeader>
  );
};

export default Header;
