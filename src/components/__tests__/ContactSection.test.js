import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactSection from '../ContactSection';

// Mock antd message
jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  message: {
    error: jest.fn(),
    success: jest.fn()
  }
}));

const mockContactForm = {
  name: '',
  email: '',
  message: ''
};

const mockSetContactForm = jest.fn();

const mockProps = {
  contactForm: mockContactForm,
  setContactForm: mockSetContactForm
};

describe('ContactSection Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders contact section with form fields', () => {
    render(<ContactSection {...mockProps} />);
    
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<ContactSection {...mockProps} />);
    
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('ankuranubhav1994@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+1(984)218-8053')).toBeInTheDocument();
  });

  test('updates form fields when user types', () => {
    render(<ContactSection {...mockProps} />);
    
    const nameInput = screen.getByPlaceholderText('Your name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    
    expect(mockSetContactForm).toHaveBeenCalledWith({
      ...mockContactForm,
      name: 'John Doe'
    });
  });

  test('shows error when submitting empty form', async () => {
    const { message } = require('antd');
    render(<ContactSection {...mockProps} />);
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(message.error).toHaveBeenCalledWith('Please enter your name');
    });
  });

  test('shows error for invalid email', async () => {
    const { message } = require('antd');
    const propsWithInvalidEmail = {
      ...mockProps,
      contactForm: {
        name: 'John Doe',
        email: 'invalid-email',
        message: 'Test message'
      }
    };
    
    render(<ContactSection {...propsWithInvalidEmail} />);
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(message.error).toHaveBeenCalledWith('Please enter a valid email address');
    });
  });

  test('submits form successfully with valid data', async () => {
    const { message } = require('antd');
    const propsWithValidData = {
      ...mockProps,
      contactForm: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message'
      }
    };
    
    render(<ContactSection {...propsWithValidData} />);
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    // Check loading state
    expect(screen.getByText('Sending...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(message.success).toHaveBeenCalledWith('Message sent successfully! I\'ll get back to you soon.');
    });
  });

  test('shows loading state during form submission', async () => {
    const propsWithValidData = {
      ...mockProps,
      contactForm: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message'
      }
    };
    
    render(<ContactSection {...propsWithValidData} />);
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Sending...')).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });
});
