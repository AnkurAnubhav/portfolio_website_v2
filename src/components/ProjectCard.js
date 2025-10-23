import React from 'react';
import { Card, Typography, Button } from 'antd';
import { 
  ToolOutlined, 
  StarOutlined, 
  CheckCircleOutlined, 
  GithubOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    icon,
    techStack,
    features,
    githubUrl,
    frontendUrl,
    liveUrl
  } = project;

  return (
    <Card
      hoverable
      className="project-card"
      cover={
        <div className="project-cover">
          <div className="project-image">
            <div className="project-overlay">
              <div className="project-icon">
                {icon}
              </div>
            </div>
            <div className="project-gradient"></div>
            <div className="project-title-overlay">
              <Title level={3} className="project-cover-title">{title}</Title>
            </div>
          </div>
        </div>
      }
    >
      <div className="project-content">
        <div className="project-header">
          <Title level={4} className="project-main-title">{title}</Title>
          <Paragraph className="project-description">
            {description}
          </Paragraph>
        </div>

        <div className="project-tech-stack">
          <Title level={5} className="tech-title">
            <ToolOutlined className="section-icon" /> Tech Stack
          </Title>
          <div className="tech-tags">
            {techStack.map((tech, index) => (
              <span key={index} className={`tech-tag ${tech.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-features">
          <Title level={5} className="features-title">
            <StarOutlined className="section-icon" /> Key Features
          </Title>
          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <CheckCircleOutlined className="feature-check" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="project-actions">
          <Button 
            icon={<GithubOutlined />}
            href={githubUrl} 
            target="_blank"
            className="action-button secondary-action"
          >
            {frontendUrl ? 'Backend Code' : 'Source Code'}
          </Button>
          {frontendUrl && (
            <Button 
              icon={<GithubOutlined />}
              href={frontendUrl} 
              target="_blank"
              className="action-button secondary-action"
            >
              Frontend Code
            </Button>
          )}
          {liveUrl && (
            <Button 
              type="primary"
              href={liveUrl} 
              target="_blank"
              className="action-button primary-action"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
