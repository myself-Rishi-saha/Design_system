
import React, { useState, KeyboardEvent } from 'react';

interface AccordionProps {
  title?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  count?: number;
  titlePrefix?: string;
  items?: {
    title: string;
    content: React.ReactNode;
    props?: Omit<AccordionProps, 'title' | 'children'>;
  }[];
}

export const Accordion: React.FC<AccordionProps> = ({
  title = '',
  children,
  disabled = false,
  variant = 'primary',
  size = 'md',
  color,
  count,
  titlePrefix = 'Item',
  items
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => !disabled && setIsOpen(!isOpen);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (['Enter', ' '].includes(e.key)) {
      e.preventDefault();
      toggleAccordion();
    }
  };

  const sizeClasses = {
    sm: 'p-2 text-sm',
    md: 'p-4 text-base',
    lg: 'p-6 text-lg',
  };

  const getColorStyles = () => {
    if (color) {
      return {
        base: `bg-[color-mix(in_srgb,var(--accordion-color)_30%,white)]`,
        hover: `hover:bg-[color-mix(in_srgb,var(--accordion-color)_45%,white)]`,
        focus: `focus:ring-2 focus:ring-[${color}]`,
        active: `bg-[color-mix(in_srgb,var(--accordion-color)_40%,white)]`,
      };
    }

    const variants = {
      primary: { base: 'bg-blue-50', hover: 'hover:bg-blue-100', focus: 'focus:ring-blue-300', active: 'bg-blue-100' },
      secondary: { base: 'bg-gray-100', hover: 'hover:bg-gray-200', focus: 'focus:ring-gray-300', active: 'bg-gray-200' },
      success: { base: 'bg-green-50', hover: 'hover:bg-green-100', focus: 'focus:ring-green-300', active: 'bg-green-100' },
      danger: { base: 'bg-red-50', hover: 'hover:bg-red-100', focus: 'focus:ring-red-300', active: 'bg-red-100' },
    };
    return variants[variant];
  };

  if (!count && !items) {
    const { base, hover, focus, active } = getColorStyles();
    return (
      <div
        className={`border border-gray-200 rounded-lg mb-4 overflow-hidden ${disabled ? 'opacity-60' : ''} w-80 m-4`}
        style={color ? { '--accordion-color': color } as React.CSSProperties : undefined}
      >
        <button
          className={`w-full text-left flex justify-between items-center transition-colors duration-200 ${sizeClasses[size]} ${base} ${!disabled ? `${hover} ${focus}` : ''} ${isOpen ? active : ''} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={toggleAccordion}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-disabled={disabled}
        >
          {title}
          <span className="text-lg">{isOpen ? '−' : '+'}</span>
        </button>
        {isOpen && (
          <div className={`${sizeClasses[size]} bg-white border-t border-gray-200`}>
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items ? (
        items.map((item, i) => (
          <Accordion
            key={i}
            title={item.title}
            {...item.props}
          >
            {item.content}
          </Accordion>
        ))
      ) : (
        Array.from({ length: count || 0 }).map((_, i) => (
          <Accordion
            key={i}
            title={`${titlePrefix} ${i + 1}`}
            variant={variant}
            size={size}
            disabled={disabled}
            color={color}
          >
            <p>Content for {titlePrefix.toLowerCase()} {i + 1}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Detail A</li>
              <li>Detail B</li>
              <li>Detail C</li>
            </ul>
          </Accordion>
        ))
      )}
    </div>
  );
};
