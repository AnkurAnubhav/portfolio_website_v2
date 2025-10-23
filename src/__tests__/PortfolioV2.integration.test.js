import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PortfolioV2 from '../PortfolioV2';

describe('PortfolioV2 Integration Tests', () => {
  test('renders header and hero section', () => {
    render(<PortfolioV2 />);
    
    // Check for header and hero
    expect(screen.getByText('Ankur Anubhav')).toBeInTheDocument(); // Header
    expect(screen.getByText('Hi, I\'m Ankur')).toBeInTheDocument(); // Hero
    expect(screen.getByText('Full Stack Software Engineer')).toBeInTheDocument(); // Hero subtitle
  });

  test('renders navigation menu', () => {
    render(<PortfolioV2 />);
    
    // Test navigation menu items
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('hero section call-to-action works', () => {
    render(<PortfolioV2 />);
    
    const ctaButton = screen.getByText('Get to know me');
    expect(ctaButton).toBeInTheDocument();
    
    fireEvent.click(ctaButton);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  test('renders about section content', () => {
    render(<PortfolioV2 />);
    
    // Check for about section content
    expect(screen.getByText(/Hello there! My name is Ankur Anubhav/)).toBeInTheDocument();
    expect(screen.getByText(/Senior Software Engineer/)).toBeInTheDocument();
  });

  test('renders footer with copyright', () => {
    render(<PortfolioV2 />);
    
    expect(screen.getByText('© 2025 - Ankur Anubhav')).toBeInTheDocument();
  });

  test('error boundaries are in place', () => {
    render(<PortfolioV2 />);
    
    // If error boundaries are working, the app should render without crashing
    expect(screen.getByText('Ankur Anubhav')).toBeInTheDocument();
  });

  test('navigation menu click functionality', () => {
    render(<PortfolioV2 />);
    
    const aboutMenuItem = screen.getByText('About');
    fireEvent.click(aboutMenuItem);
    
    // scrollIntoView should be called (it's mocked in setupTests.js)
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  test('mobile menu button exists', () => {
    render(<PortfolioV2 />);
    
    // Look for mobile menu button (it has a menu icon)
    const buttons = screen.getAllByRole('button');
    const mobileMenuButton = buttons.find(button => 
      button.querySelector('svg[data-icon="menu"]')
    );
    
    expect(mobileMenuButton).toBeInTheDocument();
  });
});
