import React from 'react';
import { Typography, Table, Space, Tag } from 'antd';
import { 
  AzureOriginal
} from 'devicons-react';
import { 
  SafetyCertificateOutlined,
  CalendarOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const CertificationsSection = () => {
  const certificationsData = [
    {
      key: '1',
      certification: (
        <Space direction="vertical" size="small">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AzureOriginal size="32" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '16px' }}>Microsoft Azure Fundamentals</div>
              <div style={{ color: '#666', fontSize: '14px' }}>AZ-900</div>
            </div>
          </div>
        </Space>
      ),
      status: (
        <Space direction="vertical" size="small">
          <Tag color="green" icon={<CheckCircleOutlined />}>
            Certified
          </Tag>
          <div style={{ fontSize: '12px', color: '#666' }}>
            <CalendarOutlined /> Fundamentals Level
          </div>
        </Space>
      ),
      description: 'Cloud concepts, Azure services, security, privacy, compliance, and Azure pricing and support'
    },
    {
      key: '2',
      certification: (
        <Space direction="vertical" size="small">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AzureOriginal size="32" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '16px' }}>Microsoft Azure Developer Associate</div>
              <div style={{ color: '#666', fontSize: '14px' }}>AZ-204</div>
            </div>
          </div>
        </Space>
      ),
      status: (
        <Space direction="vertical" size="small">
          <Tag color="blue" icon={<CheckCircleOutlined />}>
            Certified
          </Tag>
          <div style={{ fontSize: '12px', color: '#666' }}>
            <CalendarOutlined /> Associate Level
          </div>
        </Space>
      ),
      description: 'Developing Azure compute solutions, storage, security, monitoring, and connecting to third-party services'
    }
  ];

  const certificationsColumns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <SafetyCertificateOutlined style={{ color: '#3213bb' }} />
          Certification
        </div>
      ),
      dataIndex: 'certification',
      key: 'certification',
      width: '40%'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '20%',
      align: 'center'
    },
    {
      title: 'Skills Covered',
      dataIndex: 'description',
      key: 'description',
      width: '40%'
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">
        <Title level={2} className="section-title">
          Certifications
        </Title>
        <Table
          dataSource={certificationsData}
          columns={certificationsColumns}
          pagination={false}
          bordered
          className="certifications-table"
        />
      </div>
    </section>
  );
};

export default CertificationsSection;
