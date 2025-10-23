import React from 'react';
import { Typography, Table, Space } from 'antd';
import { 
  CsharpOriginal, 
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
  ReduxOriginal,
  JavaOriginal,
  ExpressOriginal
} from 'devicons-react';

const { Title } = Typography;

const SkillsSection = () => {
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

  return (
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
  );
};

export default SkillsSection;
