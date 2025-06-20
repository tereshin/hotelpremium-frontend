import React from 'react';
import { useTranslation } from 'react-i18next';

interface BaseHeaderProps {
  title: string;
  items?: Array<{ label: string; href?: string }>;
  headerActions?: React.ReactNode;
  className?: string;
}

export const BaseHeader: React.FC<BaseHeaderProps> = ({ 
  title, 
  items = [], 
  headerActions,
  className = '' 
}) => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col gap-4 lg:gap-6 ${className}`}>
      {/* Breadcrumb */}
      {items.length > 0 && (
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
              {item.href ? (
                <a href={item.href} className="hover:text-gray-900">
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-900">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      )}

      {/* Header Content */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl lg:text-3xl font-light text-gray-900">
          {title}
        </h1>
        {headerActions && (
          <div className="flex items-center gap-2">
            {headerActions}
          </div>
        )}
      </div>
    </div>
  );
};

export default BaseHeader; 