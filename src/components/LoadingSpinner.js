import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner = ({ 
  size = 'large', 
  tip = 'Loading...', 
  style = {},
  children 
}) => {
  const defaultStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: children ? 'auto' : '200px',
    ...style
  };

  return (
    <div style={defaultStyle}>
      <Spin size={size} tip={tip}>
        {children}
      </Spin>
    </div>
  );
};

export default LoadingSpinner;
