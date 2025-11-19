import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';

export const FloatingActionButton = () => {
  const { theme, toggleSignup, isSignupOpen } = useAuthStore();

  return (
    <motion.button
      onClick={toggleSignup}
      className="fixed top-6 right-6 w-14 h-14 rounded-full text-white shadow-lg z-50 flex items-center justify-center"
      style={{ backgroundColor: theme.primary }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
      aria-label="Toggle signup"
    >
      <motion.svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        animate={{ rotate: isSignupOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </motion.svg>
    </motion.button>
  );
};

