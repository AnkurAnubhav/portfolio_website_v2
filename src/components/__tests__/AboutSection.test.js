import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from '../AboutSection';

describe('AboutSection Component', () => {
  test('renders about section with title', () => {
    render(<AboutSection />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  test('renders all about paragraphs', () => {
    render(<AboutSection />);
    
    // Check for key phrases from each paragraph
    expect(screen.getByText(/Hello there! My name is Ankur Anubhav/)).toBeInTheDocument();
    expect(screen.getByText(/Particularly proficient in full-stack web development/)).toBeInTheDocument();
    expect(screen.getByText(/I am at my best when collaborating/)).toBeInTheDocument();
    expect(screen.getByText(/I'm excited about the possibilities/)).toBeInTheDocument();
  });

  test('has correct section id for navigation', () => {
    const { container } = render(<AboutSection />);
    const section = container.querySelector('#about-me');
    expect(section).toBeInTheDocument();
  });

  test('contains professional experience information', () => {
    render(<AboutSection />);
    
    expect(screen.getByText(/Senior Software Engineer/)).toBeInTheDocument();
    expect(screen.getByText(/over half a decade/)).toBeInTheDocument();
    expect(screen.getByText(/Java, HTML, CSS, JavaScript, C#, and .NET/)).toBeInTheDocument();
  });

  test('mentions key professional qualities', () => {
    render(<AboutSection />);
    
    expect(screen.getByText(/strategic thinking and creative problem solving/)).toBeInTheDocument();
    expect(screen.getByText(/lifelong learner/)).toBeInTheDocument();
    expect(screen.getByText(/multidisciplinary teams/)).toBeInTheDocument();
  });
});
