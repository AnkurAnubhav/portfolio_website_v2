import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from '../ProjectCard';
import { ProjectOutlined } from '@ant-design/icons';

const mockProject = {
  title: 'Test Project',
  description: 'This is a test project description',
  icon: <ProjectOutlined />,
  techStack: ['React', 'JavaScript', 'CSS'],
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  githubUrl: 'https://github.com/test/project',
  liveUrl: 'https://test-project.com'
};

describe('ProjectCard Component', () => {
  test('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  test('renders tech stack tags', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
  });

  test('renders feature list', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Feature 3')).toBeInTheDocument();
  });

  test('renders action buttons with correct links', () => {
    render(<ProjectCard project={mockProject} />);
    
    const sourceCodeButton = screen.getByText('Source Code');
    const liveDemoButton = screen.getByText('Live Demo');
    
    expect(sourceCodeButton.closest('a')).toHaveAttribute('href', 'https://github.com/test/project');
    expect(liveDemoButton.closest('a')).toHaveAttribute('href', 'https://test-project.com');
  });

  test('does not render live demo button when liveUrl is not provided', () => {
    const projectWithoutLiveUrl = { ...mockProject, liveUrl: undefined };
    render(<ProjectCard project={projectWithoutLiveUrl} />);
    
    expect(screen.getByText('Source Code')).toBeInTheDocument();
    expect(screen.queryByText('Live Demo')).not.toBeInTheDocument();
  });

  test('renders separate backend and frontend buttons when frontendUrl is provided', () => {
    const fullStackProject = { 
      ...mockProject, 
      frontendUrl: 'https://github.com/test/frontend',
      liveUrl: undefined 
    };
    render(<ProjectCard project={fullStackProject} />);
    
    expect(screen.getByText('Backend Code')).toBeInTheDocument();
    expect(screen.getByText('Frontend Code')).toBeInTheDocument();
    expect(screen.queryByText('Source Code')).not.toBeInTheDocument();
  });

  test('renders correct button links for full-stack project', () => {
    const fullStackProject = { 
      ...mockProject, 
      frontendUrl: 'https://github.com/test/frontend'
    };
    render(<ProjectCard project={fullStackProject} />);
    
    const backendButton = screen.getByText('Backend Code');
    const frontendButton = screen.getByText('Frontend Code');
    
    expect(backendButton.closest('a')).toHaveAttribute('href', 'https://github.com/test/project');
    expect(frontendButton.closest('a')).toHaveAttribute('href', 'https://github.com/test/frontend');
  });

  test('renders tech stack and features sections with icons', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
    expect(screen.getByText('Key Features')).toBeInTheDocument();
  });
});
