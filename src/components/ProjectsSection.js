import React from 'react';
import { Typography, Row, Col } from 'antd';
import { ProjectOutlined, UserOutlined, SoundOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ProjectCard from './ProjectCard';

const { Title } = Typography;

const ProjectsSection = () => {
  const projects = [
    {
      title: "Texas Travel Vlog",
      description: "A comprehensive travel documentation platform for exploring North Texas cities with responsive design and interactive features.",
      icon: <ProjectOutlined />,
      techStack: ["React", "CSS3", "JavaScript", "NPM"],
      features: [
        "Fully Responsive Design",
        "Intuitive Navigation", 
        "Interactive City Explorer"
      ],
      githubUrl: "https://github.com/AnkurAnubhav/React-MeetupProject"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my professional journey, skills, and featured projects with modern design and seamless user experience.",
      icon: <UserOutlined />,
      techStack: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
      features: [
        "Fully Responsive Design",
        "Smooth Navigation",
        "Professional Showcase"
      ],
      githubUrl: "https://github.com/AnkurAnubhav/PortfolioWebsite"
    },
    {
      title: "Jammming - Spotify Playlist Creator",
      description: "A React web application that integrates with Spotify API to search music library, create custom playlists, and save them directly to user's Spotify account.",
      icon: <SoundOutlined />,
      techStack: ["React", "JavaScript", "CSS3", "API", "OAuth"],
      features: [
        "Spotify Authentication",
        "Music Search & Browse",
        "Custom Playlist Creation",
        "Save to Spotify Account"
      ],
      githubUrl: "https://github.com/AnkurAnubhav/Jammming.git"
    },
    {
      title: "Full-Stack E-Commerce Application",
      description: "A comprehensive e-commerce platform with secure user authentication, shopping cart functionality, order management, and payment processing. Built with modern web technologies and best practices.",
      icon: <ShoppingCartOutlined />,
      techStack: ["Node.js", "Express", "PostgreSQL", "React", "JavaScript"],
      features: [
        "User Authentication & Registration",
        "Shopping Cart & Checkout",
        "Order Management System",
        "Secure Payment Processing",
        "Product Catalog & Search",
        "Customer Profile Management"
      ],
      githubUrl: "https://github.com/AnkurAnubhav/e_comm_app.git",
      frontendUrl: "https://github.com/AnkurAnubhav/ecommerce-frontend.git"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <Title level={2} className="section-title">
          Projects
        </Title>
        
        <Row gutter={[32, 48]}>
          {projects.map((project, index) => (
            <Col key={index} xs={24} lg={12}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ProjectsSection;
