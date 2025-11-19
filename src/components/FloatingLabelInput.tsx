import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingLabelInputProps {
  type?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  themeColor: string;
  required?: boolean;
}

export const FloatingLabelInput = ({
  type = 'text',
  label,
  value,
  onChange,
  icon,
  themeColor,
  required = false,
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative mb-5">
      <div className="relative">
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className="w-full px-4 pt-6 pb-2 text-gray-900 bg-transparent border-2 rounded-lg outline-none transition-all duration-300 focus:shadow-lg"
          style={{
            borderColor: isFocused ? themeColor : '#E5E7EB',
            boxShadow: isFocused ? `0 0 0 3px ${themeColor}20` : 'none',
          }}
        />
        <motion.label
          initial={false}
          animate={{
            top: isActive ? '12px' : '50%',
            fontSize: isActive ? '12px' : '16px',
            color: isActive ? themeColor : '#9CA3AF',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-4 pointer-events-none origin-left"
          style={{ 
            transform: isActive ? 'translateY(0)' : 'translateY(-50%)',
            transformOrigin: 'left center',
          }}
        >
          {label}
        </motion.label>
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

