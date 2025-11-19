import { useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingLabelInput } from '../components/FloatingLabelInput';
import { adminTheme } from '../config/theme';

export const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: '#0A0A0C' }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.55,
        }}
        className="w-full max-w-md rounded-[22px] shadow-soft-lg p-8"
        style={{ backgroundColor: '#1B1B1F' }}
      >
        <h2 className="text-3xl font-semibold mb-2 text-white">
          Administrator Access Only
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          Secure login for authorized personnel
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <FloatingLabelInput
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            }
            themeColor={adminTheme.primary}
            required
          />

          <FloatingLabelInput
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            themeColor={adminTheme.primary}
            required
          />

          <motion.button
            type="submit"
            disabled={isSubmitting || !email.includes('@') || password.length < 6}
            className="w-full py-4 text-gray-900 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            style={{ 
              backgroundColor: adminTheme.primary,
              color: '#0A0A0C',
            }}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
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
                className="w-6 h-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto"
              />
            ) : (
              'SIGN IN'
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

