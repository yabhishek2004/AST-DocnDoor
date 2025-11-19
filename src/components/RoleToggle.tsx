import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import { getTheme } from '../config/theme';
import type { Role } from '../config/theme';

const roles: Array<{ value: Exclude<Role, 'admin'>; label: string }> = [
  { value: 'customer', label: 'Customer' },
  { value: 'serviceProvider', label: 'Service Provider' },
  { value: 'doctor', label: 'Doctor' },
];

export const RoleToggle = () => {
  const { selectedRole, setRole } = useAuthStore();

  return (
    <div className="relative flex items-center justify-between p-1 bg-gray-100 rounded-xl mb-6">
      {roles.map((role) => {
        const isActive = selectedRole === role.value;
        const roleTheme = getTheme(role.value);
        
        return (
          <button
            key={role.value}
            onClick={() => setRole(role.value)}
            className="relative flex-1 px-4 py-2.5 text-sm font-medium transition-colors duration-300 rounded-lg z-10"
            style={{
              color: isActive ? '#FFFFFF' : '#6B7280',
            }}
          >
            {isActive && (
              <motion.div
                layoutId="activeRole"
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundColor: roleTheme.primary,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{role.label}</span>
          </button>
        );
      })}
    </div>
  );
};

