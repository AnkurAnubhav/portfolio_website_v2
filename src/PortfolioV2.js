import React, { useState, useEffect } from 'react';
import {
  Layout,
  Menu,
  Typography,
  Button,
  Row,
  Col,
  Card,
  Input,
  message,
  Table,
  Space
} from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  ExperimentOutlined,
  ContactsOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  DownloadOutlined,
  SendOutlined,
  ProjectOutlined,
  ToolOutlined,
  StarOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  GithubOutlined,
  SoundOutlined
} from '@ant-design/icons';
import { 
  JavaOriginal, 
  CsharpOriginal, 
  ExpressOriginal,
  ElasticsearchOriginal,
  ReactOriginal,
  DockerPlain,
  GitOriginal,
  BootstrapOriginal,
  AmazonwebservicesOriginalWordmark,
  PostmanOriginal,
  AzureOriginal,
  TerraformOriginal,
  AnsibleOriginal,
  RedisOriginal,
  MicrosoftsqlserverPlainWordmark, 
  PostgresqlOriginalWordmark,
  Html5OriginalWordmark,
  ReduxOriginal
} from 'devicons-react';
import './portfolio.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

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
      const sections = ['about-me', 'projects', 'skills', 'experience', 'contact'];
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

  const handleContactSubmit = () => {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      message.error('Please fill in all fields');
      return;
    }
    console.log('Contact form values:', contactForm);
    message.success('Message sent successfully!');
    setContactForm({ name: '', email: '', message: '' });
  };

  const skillsData = [
    {
      key: '1',
      technologies: (
        <Space wrap size="large">
          <CsharpOriginal size="32" />
          <ElasticsearchOriginal size="32" />
          <GitOriginal size="32" />
          <ReactOriginal size="32" />
          <DockerPlain size="32" />
          <AzureOriginal size="32" />
          <AmazonwebservicesOriginalWordmark size="32" />
          <BootstrapOriginal size="32" />
          <TerraformOriginal size="32" />
          <AnsibleOriginal size="32" />
          <RedisOriginal size="32" />
          <ReduxOriginal size="32" />
        </Space>
      ),
      companies: 'CarOffer (A Cargurus Company) - Software Engineer'
    },
    {
      key: '2',
      technologies: (
        <Space wrap size="large">
          <GitOriginal size="32" />
          <CsharpOriginal size="32" />
          <MicrosoftsqlserverPlainWordmark size="32" />
          <Html5OriginalWordmark size="32" />
          <PostmanOriginal size="32" />
        </Space>
      ),
      companies: 'CityOn Systems - Senior Software Engineer'
    },
    {
      key: '3',
      technologies: (
        <Space wrap size="large">
          <PostgresqlOriginalWordmark size="32" />
          <JavaOriginal size="32" />
          <ExpressOriginal size="32" />
        </Space>
      ),
      companies: 'Autodidactic Skills'
    }
  ];

  const skillsColumns = [
    {
      title: "Technologies I've worked with",
      dataIndex: 'technologies',
      key: 'technologies',
      width: '60%'
    },
    {
      title: "Places I've Worked",
      dataIndex: 'companies',
      key: 'companies',
      width: '40%'
    }
  ];

  const menuItems = [
    { key: 'about-me', label: 'About', icon: <UserOutlined /> },
    { key: 'projects', label: 'Projects', icon: <ProjectOutlined /> },
    { key: 'skills', label: 'Skills', icon: <ToolOutlined /> },
    { key: 'experience', label: 'Experience', icon: <ExperimentOutlined /> },
    { key: 'contact', label: 'Contact', icon: <ContactsOutlined /> }
  ];

  return (
    <Layout className="portfolio-layout">
      {/* Header/Navigation */}
      <Header className="portfolio-header">
        <div className="header-content">
          <Title level={3} className="header-title">
            Ankur Anubhav
          </Title>
          
          {/* Desktop Menu */}
          <Menu
            mode="horizontal"
            selectedKeys={[currentSection]}
            className="desktop-menu"
            theme="dark"
          >
            {menuItems.map(item => (
              <Menu.Item 
                key={item.key} 
                icon={item.icon}
                onClick={() => scrollToSection(item.key)}
                className="menu-item"
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>

          {/* Mobile Menu Button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            className="mobile-menu-button"
          />
        </div>

        {/* Mobile Menu */}
        {mobileMenuVisible && (
          <div className="mobile-menu">
            {menuItems.map(item => (
              <div
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="mobile-menu-item"
              >
                {item.icon} {item.label}
              </div>
            ))}
          </div>
        )}
      </Header>

      <Content className="portfolio-content">
        {/* Hero Section */}
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

        {/* About Me Section */}
        <section id="about-me" className="about-section">
          <div className="section-container">
            <Title level={2} className="section-title">
              About Me
            </Title>
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} lg={24}>
                <Paragraph className="about-paragraph">
                  Hello there! My name is Ankur Anubhav, a Senior Software Engineer offering over five years of driving innovative software solutions to life. 
                  I harness the power of strategic thinking and creative problem solving to enable businesses to remain technology-forward and maintain competitive advantages. 
                  I am a lifelong learner who continually updates technical toolkits by embracing emerging technologies and methodologies.
                </Paragraph>
                <Paragraph className="about-paragraph">
                  Particularly proficient in full-stack web development, I utilize my expertise in Java, HTML, CSS, JavaScript, C#, and .NET to develop and optimize high-performing web applications. 
                  Having worked on an array of projects in various industrial domains, I am uniquely equipped with insights needed to create scalable software solutions that fulfill user needs while surpassing business goals.
                </Paragraph>
                <Paragraph className="about-paragraph">
                  I am at my best when collaborating with multidisciplinary teams, believing that synergy paves the way for realizing extraordinary outcomes. 
                  My professional journey is testament to my dedication to technological excellence, but more than that, it reflects my unwavering commitment to making a genuine impact in the realm of software development.
                </Paragraph>
                <Paragraph className="about-paragraph">
                  I'm excited about the possibilities that lie ahead and am always on the lookout for new opportunities to grow, learn, and make a meaningful impact in the world of software development.
                  Let's connect and explore how we can create something extraordinary together!
                </Paragraph>
              </Col>
            </Row>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="section-container">
            <Title level={2} className="section-title">
              Projects
            </Title>
            
            <Row gutter={[32, 48]}>
              {/* Project 1 */}
              <Col xs={24} lg={12}>
                <Card
                  hoverable
                  className="project-card"
                  cover={
                    <div className="project-cover">
                      <div className="project-image">
                        <div className="project-overlay">
                          <div className="project-icon">
                            <ProjectOutlined />
                          </div>
                        </div>
                        <div className="project-gradient"></div>
                        <div className="project-title-overlay">
                          <Title level={3} className="project-cover-title">Texas Travel Vlog</Title>
                        </div>
                      </div>
                    </div>
                  }
                >
                  <div className="project-content">
                    <div className="project-header">
                      <Title level={4} className="project-main-title">Texas Travel Vlog</Title>
                      <Paragraph className="project-description">
                        A comprehensive travel documentation platform for exploring North Texas cities with responsive design and interactive features.
                      </Paragraph>
                    </div>

                    <div className="project-tech-stack">
                      <Title level={5} className="tech-title">
                        <ToolOutlined className="section-icon" /> Tech Stack
                      </Title>
                      <div className="tech-tags">
                        <span className="tech-tag react">React</span>
                        <span className="tech-tag css">CSS3</span>
                        <span className="tech-tag js">JavaScript</span>
                        <span className="tech-tag npm">NPM</span>
                      </div>
                    </div>

                    <div className="project-features">
                      <Title level={5} className="features-title">
                        <StarOutlined className="section-icon" /> Key Features
                      </Title>
                      <div className="features-list">
                        <div className="feature-item">
                          <CheckCircleOutlined className="feature-check" />
                          <span>Fully Responsive Design</span>
                        </div>
                        <div className="feature-item">
                          <CheckCircleOutlined className="feature-check" />
                          <span>Intuitive Navigation</span>
                        </div>
                        <div className="feature-item">
                          <CheckCircleOutlined className="feature-check" />
                          <span>Interactive City Explorer</span>
                        </div>
                      </div>
                    </div>

                    <div className="project-actions">
                      <Button 
                        icon={<GithubOutlined />}
                        href="https://github.com/AnkurAnubhav/React-MeetupProject" 
                        target="_blank"
                        className="action-button secondary-action"
                      >
                        Source Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>

              {/* Project 2 */}
              <Col xs={24} lg={12}>
                <Card
                  hoverable
                  className="project-card"
                  cover={
                    <div className="project-cover">
                      <div className="project-image">
                        <div className="project-overlay">
                          <div className="project-icon">
                            <UserOutlined />
                          </div>
                        </div>
                        <div className="project-gradient"></div>
                        <div className="project-title-overlay">
                          <Title level={3} className="project-cover-title">Portfolio Project</Title>
                        </div>
                      </div>
                    </div>
                  }
                >
                  <div className="project-content">
                    <div className="project-header">
                      <Title level={4} className="project-main-title">Portfolio Website</Title>
                      <Paragraph className="project-description">
                        A personal portfolio website showcasing my professional journey, skills, and featured projects with modern design and seamless user experience.
                      </Paragraph>
                    </div>

                    <div className="project-tech-stack">
                      <Title level={5} className="tech-title">
                        <ToolOutlined className="section-icon" /> Tech Stack
                      </Title>
                      <div className="tech-tags">
                        <span className="tech-tag html">HTML5</span>
                        <span className="tech-tag css">CSS3</span>
                        <span className="tech-tag js">JavaScript</span>
                        <span className="tech-tag jquery">jQuery</span>
                        <span className="tech-tag bootstrap">Bootstrap</span>
                      </div>
                    </div>

                    <div className="project-features">
                      <Title level={5} className="features-title">
                        <StarOutlined className="section-icon" /> Key Features
                      </Title>
                      <div className="features-list">
                        <div className="feature-item">
                          <CheckCircleOutlined className="feature-check" />
                          <span>Fully Responsive Design</span>
                        </div>
                        <div className="feature-item">
                          <CheckCircleOutlined className="feature-check" />
                          <span>Smooth Navigation</span>
                        </div>
                        <div className="feature-item">
                          <CheckCircleOutlined className="feature-check" />
                          <span>Professional Showcase</span>
                        </div>
                      </div>
                    </div>

                    <div className="project-actions">
                      <Button 
                        icon={<GithubOutlined />}
                        href="https://github.com/AnkurAnubhav/PortfolioWebsite" 
                        target="_blank"
                        className="action-button secondary-action"
                      >
                        Source Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row gutter={[32, 48]}>
                <Col xs={24} lg={12}>
                  <Card
                    hoverable
                    className="project-card"
                    cover={
                      <div className="project-cover">
                        <div className="project-image">
                          <div className="project-overlay">
                            <div className="project-icon">
                              <SoundOutlined />
                            </div>
                          </div>
                          <div className="project-gradient"></div>
                          <div className="project-title-overlay">
                            <Title level={3} className="project-cover-title">Jammming</Title>
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <div className="project-content">
                      <div className="project-header">
                        <Title level={4} className="project-main-title">Jammming - Spotify Playlist Creator</Title>
                        <Paragraph className="project-description">
                          A React web application that integrates with Spotify API to search music library, create custom playlists, and save them directly to user's Spotify account.
                        </Paragraph>
                      </div>

                      <div className="project-tech-stack">
                        <Title level={5} className="tech-title">
                          <ToolOutlined className="section-icon" /> Tech Stack
                        </Title>
                        <div className="tech-tags">
                          <span className="tech-tag react">React</span>
                          <span className="tech-tag js">JavaScript</span>
                          <span className="tech-tag css">CSS3</span>
                          <span className="tech-tag api">Spotify API</span>
                          <span className="tech-tag oauth">OAuth</span>
                        </div>
                      </div>

                      <div className="project-features">
                        <Title level={5} className="features-title">
                          <StarOutlined className="section-icon" /> Key Features
                        </Title>
                        <div className="features-list">
                          <div className="feature-item">
                            <CheckCircleOutlined className="feature-check" />
                            <span>Spotify Authentication</span>
                          </div>
                          <div className="feature-item">
                            <CheckCircleOutlined className="feature-check" />
                            <span>Music Search & Browse</span>
                          </div>
                          <div className="feature-item">
                            <CheckCircleOutlined className="feature-check" />
                            <span>Custom Playlist Creation</span>
                          </div>
                          <div className="feature-item">
                            <CheckCircleOutlined className="feature-check" />
                            <span>Save to Spotify Account</span>
                          </div>
                        </div>
                      </div>

                      <div className="project-actions">
                        <Button 
                          icon={<GithubOutlined />}
                          href="https://github.com/AnkurAnubhav/Jammming.git" 
                          target="_blank"
                          className="action-button secondary-action"
                        >
                          Source Code
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
            </Row>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="section-container">
            <Title level={2} className="section-title">
              Experience & Skills
            </Title>
            <Table
              dataSource={skillsData}
              columns={skillsColumns}
              pagination={false}
              bordered
              className="skills-table"
            />
          </div>
        </section>

        {/* Resume Section */}
        <section id="experience" className="resume-section">
          <div className="resume-container">
            <Title level={2} className="resume-title">
              Check out my résumé!
            </Title>
            <Button
              type="primary"
              size="large"
              icon={<DownloadOutlined />}
              href="Ankur Anubhav.pdf"
              target="_blank"
              className="resume-button"
            >
              Get my CV
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="section-container">
            <Title level={1} className="contact-title">
              Contact Me
            </Title>
            
            <Row gutter={[48, 48]}>
              <Col xs={24} lg={10}>
                <div className="contact-info">
                  <Title level={3} className="contact-role">Senior Software Engineer</Title>
                  <Paragraph className="contact-description">
                    Please feel free to contact me with questions, comments or collaborations.
                  </Paragraph>
                  <div className="contact-details">
                    <Paragraph className="contact-detail">
                      <MailOutlined className="contact-icon" />
                      ankuranubhav1994@gmail.com
                    </Paragraph>
                    <Paragraph className="contact-detail">
                      <PhoneOutlined className="contact-icon" />
                      +1(984)218-8053
                    </Paragraph>
                  </div>
                </div>
              </Col>

              <Col xs={24} lg={14}>
                <div className="contact-form">
                  <div className="form-group">
                    <Input
                      placeholder="Your name"
                      prefix={<UserOutlined />}
                      size="large"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <Input
                      placeholder="Your email"
                      prefix={<MailOutlined />}
                      size="large"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <TextArea
                      placeholder="Your message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="form-textarea"
                    />
                  </div>

                  <Button
                    type="primary"
                    size="large"
                    icon={<SendOutlined />}
                    block
                    onClick={handleContactSubmit}
                    className="form-submit-button"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Content>

      {/* Footer */}
      <Footer className="portfolio-footer">
        <Space size="large" className="footer-icons">
          <Button
            type="text"
            icon={<InstagramOutlined />}
            href="https://www.instagram.com/_ankuranubhav94_/"
            target="_blank"
            className="footer-icon-button"
          />
          <Button
            type="text"
            icon={<YoutubeOutlined />}
            href="https://music.youtube.com/channel/UCmurt2l0rtyKp-tD536fMJA"
            target="_blank"
            className="footer-icon-button"
          />
          <Button
            type="text"
            icon={<GithubOutlined />}
            href="https://github.com/AnkurAnubhav"
            target="_blank"
            className="footer-icon-button"
          />
          <Button
            type="text"
            icon={<LinkedinOutlined />}
            href="https://www.linkedin.com/in/ankur-anubhav/"
            target="_blank"
            className="footer-icon-button"
          />
        </Space>
        <div className="footer-copyright">
          <Text>&copy; 2025 - Ankur Anubhav</Text>
        </div>
      </Footer>
    </Layout>
  );
};

export default Portfolio;