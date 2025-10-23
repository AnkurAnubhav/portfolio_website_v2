import React from 'react';
import { Alert, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

class SectionErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`Error in ${this.props.sectionName}:`, error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <Alert
            message={`Error loading ${this.props.sectionName || 'section'}`}
            description="Something went wrong while loading this section. Please try again."
            type="error"
            showIcon
            action={
              <Button 
                size="small" 
                icon={<ReloadOutlined />} 
                onClick={this.handleRetry}
                type="primary"
              >
                Retry
              </Button>
            }
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default SectionErrorBoundary;
