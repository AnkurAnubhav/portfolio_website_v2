import React from 'react';
import { Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Title } = Typography;

const ResumeSection = () => {
  return (
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
  );
};

export default ResumeSection;
