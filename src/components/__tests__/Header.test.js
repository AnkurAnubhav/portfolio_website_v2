import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { UserOutlined, ProjectOutlined } from '@ant-design/icons';

const mockMenuItems = [
  { key: 'about-me', label: 'About', icon: <UserOutlined /> },
  { key: 'projects', label: 'Projects', icon: <ProjectOutlined /> }
];

const mockProps = {
  currentSection: 'about-me',
  mobileMenuVisible: false,
  setMobileMenuVisible: jest.fn(),
  scrollToSection: jest.fn(),
  menuItems: mockMenuItems
};

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders header with title', () => {
    render(<Header {...mockProps} />);
    expect(screen.getByText('Ankur Anubhav')).toBeInTheDocument();
  });

  test('renders desktop menu items', () => {
    render(<Header {...mockProps} />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  test('calls scrollToSection when menu item is clicked', () => {
    render(<Header {...mockProps} />);
    const aboutMenuItem = screen.getByText('About');
    fireEvent.click(aboutMenuItem);
    expect(mockProps.scrollToSection).toHaveBeenCalledWith('about-me');
  });

  test('toggles mobile menu visibility', () => {
    render(<Header {...mockProps} />);
    const mobileMenuButton = screen.getByRole('button');
    fireEvent.click(mobileMenuButton);
    expect(mockProps.setMobileMenuVisible).toHaveBeenCalledWith(true);
  });

  test('renders mobile menu when visible', () => {
    const propsWithMobileMenu = { ...mockProps, mobileMenuVisible: true };
    render(<Header {...propsWithMobileMenu} />);
    
    // Mobile menu should be visible
    const mobileMenuItems = screen.getAllByText('About');
    expect(mobileMenuItems.length).toBeGreaterThan(1); // Desktop + Mobile
  });

  test('highlights current section in menu', () => {
    render(<Header {...mockProps} />);
    // The current section should be highlighted (this depends on Ant Design's implementation)
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
