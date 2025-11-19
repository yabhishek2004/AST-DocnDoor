import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingLabelInput } from './FloatingLabelInput';
import { useAuthStore } from '../store/authStore';

export const AuthForm = () => {
  const { theme, authMode, setAuthMode } = useAuthStore();
  
  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginValid, setIsLoginValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Signup state
  const [username, setUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isSignupValid, setIsSignupValid] = useState(false);

  const checkLoginValidity = () => {
    const valid = email.includes('@') && password.length >= 6;
    setIsLoginValid(valid);
  };

  const checkSignupValidity = () => {
    const valid = username.length >= 3 && signupEmail.includes('@') && signupPassword.length >= 6;
    setIsSignupValid(valid);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoginValid) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignupValid) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
  };

  return (
    <div className="w-full">
      {/* Auth Mode Toggle */}
      <div className="relative flex items-center justify-between p-1 bg-gray-100 rounded-xl mb-6">
        <button
          onClick={() => setAuthMode('login')}
          className="relative flex-1 px-4 py-2.5 text-sm font-medium transition-colors duration-300 rounded-lg z-10"
          style={{
            color: authMode === 'login' ? '#FFFFFF' : '#6B7280',
          }}
        >
          {authMode === 'login' && (
            <motion.div
              layoutId="authMode"
              className="absolute inset-0 rounded-lg"
              style={{
                backgroundColor: theme.primary,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
          <span className="relative z-10">Sign In</span>
        </button>
        <button
          onClick={() => setAuthMode('signup')}
          className="relative flex-1 px-4 py-2.5 text-sm font-medium transition-colors duration-300 rounded-lg z-10"
          style={{
            color: authMode === 'signup' ? '#FFFFFF' : '#6B7280',
          }}
        >
          {authMode === 'signup' && (
            <motion.div
              layoutId="authMode"
              className="absolute inset-0 rounded-lg"
              style={{
                backgroundColor: theme.primary,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
          <span className="relative z-10">Sign Up</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {authMode === 'login' ? (
          <motion.form
            key="login"
            onSubmit={handleLoginSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Log In as {theme.name}
            </h2>

            <FloatingLabelInput
              type="email"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                checkLoginValidity();
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
                checkLoginValidity();
              }}
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
              {!isLoginValid ? (
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
          </motion.form>
        ) : (
          <motion.form
            key="signup"
            onSubmit={handleSignupSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Create Your {theme.name} Account
            </h2>

            <FloatingLabelInput
              type="text"
              label="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                checkSignupValidity();
              }}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              themeColor={theme.primary}
              required
            />

            <FloatingLabelInput
              type="email"
              label="Email"
              value={signupEmail}
              onChange={(e) => {
                setSignupEmail(e.target.value);
                checkSignupValidity();
              }}
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
              value={signupPassword}
              onChange={(e) => {
                setSignupPassword(e.target.value);
                checkSignupValidity();
              }}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
              themeColor={theme.primary}
              required
            />

            <AnimatePresence mode="wait">
              {!isSignupValid ? (
                <motion.button
                  key="signup-disabled"
                  type="submit"
                  disabled
                  className="w-full py-4 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#D1D5DB' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  CREATE ACCOUNT
                </motion.button>
              ) : (
                <motion.button
                  key="signup-active"
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
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className="font-semibold hover:underline"
                  style={{ color: theme.primary }}
                >
                  Sign In
                </button>
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

