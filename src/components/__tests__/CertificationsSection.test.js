import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CertificationsSection from '../CertificationsSection';

describe('CertificationsSection Component', () => {
  test('renders certifications section with title', () => {
    render(<CertificationsSection />);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  test('renders Azure certifications', () => {
    render(<CertificationsSection />);
    
    // Check for AZ-900 certification
    expect(screen.getByText('Microsoft Azure Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('AZ-900')).toBeInTheDocument();
    
    // Check for AZ-204 certification
    expect(screen.getByText('Microsoft Azure Developer Associate')).toBeInTheDocument();
    expect(screen.getByText('AZ-204')).toBeInTheDocument();
  });

  test('renders certification status tags', () => {
    render(<CertificationsSection />);
    
    // Should have "Certified" tags for both certifications
    const certifiedTags = screen.getAllByText('Certified');
    expect(certifiedTags).toHaveLength(2);
  });

  test('renders certification levels', () => {
    render(<CertificationsSection />);
    
    expect(screen.getByText('Fundamentals Level')).toBeInTheDocument();
    expect(screen.getByText('Associate Level')).toBeInTheDocument();
  });

  test('renders certification descriptions', () => {
    render(<CertificationsSection />);
    
    expect(screen.getByText(/Cloud concepts, Azure services, security/)).toBeInTheDocument();
    expect(screen.getByText(/Developing Azure compute solutions/)).toBeInTheDocument();
  });

  test('has correct section id for navigation', () => {
    const { container } = render(<CertificationsSection />);
    const section = container.querySelector('#certifications');
    expect(section).toBeInTheDocument();
  });

  test('renders table structure', () => {
    render(<CertificationsSection />);
    
    // Check for table headers
    expect(screen.getByText('Certification')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Skills Covered')).toBeInTheDocument();
  });
});
