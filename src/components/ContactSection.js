import React, { useState } from 'react';
import { Typography, Row, Col, Input, Button, message, Modal } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  UserOutlined, 
  SendOutlined 
} from '@ant-design/icons';
import { submitContactFormWithFallback, fallbackToEmail } from '../services/contactService';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactSection = ({ contactForm, setContactForm }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContactSubmit = async () => {
    try {
      // Validation
      if (!contactForm.name?.trim()) {
        message.error('Please enter your name');
        return;
      }
      
      if (!contactForm.email?.trim()) {
        message.error('Please enter your email');
        return;
      }
      
      if (!validateEmail(contactForm.email)) {
        message.error('Please enter a valid email address');
        return;
      }
      
      if (!contactForm.message?.trim()) {
        message.error('Please enter your message');
        return;
      }

      setIsSubmitting(true);

      // Submit form using the contact service
      const result = await submitContactFormWithFallback({
        name: contactForm.name.trim(),
        email: contactForm.email.trim(),
        message: contactForm.message.trim()
      });

      if (result.success) {
        message.success(result.message);
        setContactForm({ name: '', email: '', message: '' });
      } else {
        if (result.fallbackAvailable) {
          // Show modal asking if user wants to use email fallback
          Modal.confirm({
            title: 'Send via Email?',
            content: `${result.error} Would you like to open your email client to send the message directly?`,
            okText: 'Yes, Open Email',
            cancelText: 'Cancel',
            onOk: () => {
              fallbackToEmail(contactForm);
              setContactForm({ name: '', email: '', message: '' });
              message.info('Email client opened. Please send the message from there.');
            }
          });
        } else {
          message.error(result.error);
        }
      }
      
    } catch (error) {
      console.error('Error submitting contact form:', error);
      message.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
                loading={isSubmitting}
                disabled={isSubmitting}
                className="form-submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactSection;
