import React from 'react';
import { Layout, Space, Button, Typography } from 'antd';
import { 
  InstagramOutlined, 
  YoutubeOutlined, 
  GithubOutlined, 
  LinkedinOutlined 
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  return (
    <AntFooter className="portfolio-footer">
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
    </AntFooter>
  );
};

export default Footer;
