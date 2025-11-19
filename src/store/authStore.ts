import { create } from 'zustand';
import { Role, getTheme, Theme } from '../config/theme';

interface AuthState {
  selectedRole: Role;
  theme: Theme;
  authMode: 'login' | 'signup';
  setRole: (role: Exclude<Role, 'admin'>) => void;
  setAuthMode: (mode: 'login' | 'signup') => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  selectedRole: 'customer',
  theme: getTheme('customer'),
  authMode: 'login',
  setRole: (role) => set({ 
    selectedRole: role, 
    theme: getTheme(role),
  }),
  setAuthMode: (mode) => set({ authMode: mode }),
}));

