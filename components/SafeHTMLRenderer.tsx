// src/components/SafeHTMLRenderer.tsx
import React from 'react';

interface SafeHTMLRendererProps {
  html: string;
  className?: string;
}

const SafeHTMLRenderer: React.FC<SafeHTMLRendererProps> = ({ html, className = '' }) => {
  return (
    <div 
      className={`blog-content ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default SafeHTMLRenderer;