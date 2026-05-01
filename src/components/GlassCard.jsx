import React from 'react';

export default function GlassCard({ 
  children, 
  title, 
  className = "", 
  onClick 
}) {
  return (
    <div 
      className={`glass-card ${className}`} 
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {title && <h3 className="mb-3">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}