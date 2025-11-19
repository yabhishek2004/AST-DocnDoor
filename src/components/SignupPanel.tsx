import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingLabelInput } from './FloatingLabelInput';
import { useAuthStore } from '../store/authStore';

export const SignupPanel = () => {
  const { theme, isSignupOpen, closeSignup, selectedRole } = useAuthStore();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AnimatePresence>
      {isSignupOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSignup}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-y-auto"
            style={{ backgroundColor: theme.primary }}
          >
            <div className="p-8 text-white">
              <button
                onClick={closeSignup}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="text-3xl font-semibold mb-8 mt-4">
                Create Your {theme.name} Account
              </h2>

              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 pt-6 pb-2 text-white bg-transparent border-2 border-white/30 rounded-lg outline-none transition-all duration-300 focus:border-white focus:shadow-lg placeholder-transparent"
                    placeholder="Username"
                    required
                  />
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-200 origin-left"
                    style={{
                      transform: username ? 'translateY(-8px) scale(0.85)' : 'translateY(-50%) scale(1)',
                      color: username ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    Username
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 pt-6 pb-2 text-white bg-transparent border-2 border-white/30 rounded-lg outline-none transition-all duration-300 focus:border-white focus:shadow-lg placeholder-transparent"
                    placeholder="Email"
                    required
                  />
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-200 origin-left"
                    style={{
                      transform: email ? 'translateY(-8px) scale(0.85)' : 'translateY(-50%) scale(1)',
                      color: email ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    E-Mail
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 pt-6 pb-2 text-white bg-transparent border-2 border-white/30 rounded-lg outline-none transition-all duration-300 focus:border-white focus:shadow-lg placeholder-transparent"
                    placeholder="Password"
                    required
                  />
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-200 origin-left"
                    style={{
                      transform: password ? 'translateY(-8px) scale(0.85)' : 'translateY(-50%) scale(1)',
                      color: password ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    Password
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-white text-gray-900 font-semibold rounded-lg transition-all duration-300"
                  style={{ color: theme.primary }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  CREATE ACCOUNT
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

