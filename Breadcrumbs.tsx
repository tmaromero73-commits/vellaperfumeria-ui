import React from 'react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const ChevronRightIcon = () => (
    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  if (!items || items.length <= 1) {
    // Don't render breadcrumbs if there's only one or zero items (e.g., on the home page)
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-500 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <div className="mx-2" aria-hidden="true">
                <ChevronRightIcon />
              </div>
            )}
            {item.onClick && index < items.length - 1 ? (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  item.onClick?.();
                }}
                className="hover:text-brand-purple-dark hover-underline-effect"
              >
                {item.label}
              </a>
            ) : (
              <span className="font-semibold text-brand-primary" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;