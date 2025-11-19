import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingLabelInput } from './FloatingLabelInput';
import { useAuthStore } from '../store/authStore';

export const LoginForm = () => {
  const { theme, selectedRole, toggleSignup } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const checkValidity = () => {
    const valid = email.includes('@') && password.length >= 6;
    setIsValid(valid);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    checkValidity();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    checkValidity();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    // Handle successful login
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Log In as {theme.name}
      </h2>

      <FloatingLabelInput
        type="email"
        label="Email"
        value={email}
        onChange={handleEmailChange}
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        }
        themeColor={theme.primary}
        required
      />

      <FloatingLabelInput
        type="password"
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        }
        themeColor={theme.primary}
        required
      />

      <div className="mb-6 text-right">
        <a
          href="#"
          className="text-sm text-gray-600 hover:underline"
          style={{ color: theme.primary }}
        >
          Forgot your password?
        </a>
      </div>

      <AnimatePresence mode="wait">
        {!isValid ? (
          <motion.button
            key="signin"
            type="submit"
            disabled
            className="w-full py-4 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#D1D5DB' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            SIGN IN
          </motion.button>
        ) : (
          <motion.button
            key="checkmark"
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
            style={{ backgroundColor: theme.primary }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 17,
            }}
          >
            {isSubmitting ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
              />
            ) : (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 mb-3">Don't have an account?</p>
        <motion.button
          type="button"
          onClick={toggleSignup}
          className="w-full py-3 font-semibold rounded-lg transition-all duration-300 border-2"
          style={{
            borderColor: theme.primary,
            color: theme.primary,
            backgroundColor: 'transparent',
          }}
          whileHover={{
            scale: 1.02,
            backgroundColor: theme.backgroundLight,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 17,
          }}
        >
          CREATE ACCOUNT
        </motion.button>
      </div>
    </form>
  );
};

