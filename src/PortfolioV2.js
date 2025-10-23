import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import {
  UserOutlined,
  ExperimentOutlined,
  ContactsOutlined,
  ProjectOutlined,
  ToolOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SectionErrorBoundary from './components/SectionErrorBoundary';
import './portfolio.css';

const { Content } = Layout;

const Portfolio = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('about-me');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-me', 'projects', 'skills', 'certifications', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuVisible(false);
  };

  const menuItems = [
    { key: 'about-me', label: 'About', icon: <UserOutlined /> },
    { key: 'projects', label: 'Projects', icon: <ProjectOutlined /> },
    { key: 'skills', label: 'Skills', icon: <ToolOutlined /> },
    { key: 'certifications', label: 'Certifications', icon: <SafetyCertificateOutlined /> },
    { key: 'experience', label: 'Experience', icon: <ExperimentOutlined /> },
    { key: 'contact', label: 'Contact', icon: <ContactsOutlined /> }
  ];

  return (
    <Layout className="portfolio-layout">
      <Header
        currentSection={currentSection}
        mobileMenuVisible={mobileMenuVisible}
        setMobileMenuVisible={setMobileMenuVisible}
        scrollToSection={scrollToSection}
        menuItems={menuItems}
      />

      <Content className="portfolio-content">
        <SectionErrorBoundary sectionName="Hero Section">
          <HeroSection scrollToSection={scrollToSection} />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="About Section">
          <AboutSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Projects Section">
          <ProjectsSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Skills Section">
          <SkillsSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Certifications Section">
          <CertificationsSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Resume Section">
          <ResumeSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Contact Section">
          <ContactSection 
            contactForm={contactForm} 
            setContactForm={setContactForm} 
          />
        </SectionErrorBoundary>
      </Content>

      <Footer />
    </Layout>
  );
};

export default Portfolio;