import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const AboutSection = () => {
  return (
    <section id="about-me" className="about-section">
      <div className="section-container">
        <Title level={2} className="section-title">
          About Me
        </Title>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={24}>
            <Paragraph className="about-paragraph">
              Hello there! My name is Ankur Anubhav, a Senior Software Engineer offering over half a decade of driving innovative software solutions to life. 
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
  );
};

export default AboutSection;
