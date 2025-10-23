import React from 'react';
import { Typography, Button } from 'antd';

const { Title } = Typography;

const HeroSection = ({ scrollToSection }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <Title level={1} className="hero-title">
          Hi, I'm Ankur
        </Title>
        <Title level={2} className="hero-subtitle">
          Full Stack Software Engineer
        </Title>
        <Button 
          type="primary" 
          size="large" 
          onClick={() => scrollToSection('about-me')}
          className="hero-button"
        >
          Get to know me
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
