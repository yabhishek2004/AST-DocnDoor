export type Role = 'customer' | 'serviceProvider' | 'doctor' | 'admin';

export interface Theme {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  background: string;
  backgroundLight: string;
  name: string;
}

export const themes: Record<Exclude<Role, 'admin'>, Theme> = {
  customer: {
    primary: '#2E6BFF',
    primaryLight: '#5A8AFF',
    primaryDark: '#1A4FCC',
    background: 'rgba(46, 107, 255, 0.1)',
    backgroundLight: 'rgba(46, 107, 255, 0.05)',
    name: 'Customer',
  },
  serviceProvider: {
    primary: '#10B981',
    primaryLight: '#34D399',
    primaryDark: '#059669',
    background: 'rgba(16, 185, 129, 0.1)',
    backgroundLight: 'rgba(16, 185, 129, 0.05)',
    name: 'Service Provider',
  },
  doctor: {
    primary: '#7C3AED',
    primaryLight: '#A78BFA',
    primaryDark: '#5B21B6',
    background: 'rgba(124, 58, 237, 0.1)',
    backgroundLight: 'rgba(124, 58, 237, 0.05)',
    name: 'Doctor',
  },
};

export const adminTheme: Theme = {
  primary: '#00E5FF',
  primaryLight: '#33EBFF',
  primaryDark: '#00B8CC',
  background: 'rgba(0, 229, 255, 0.1)',
  backgroundLight: 'rgba(0, 229, 255, 0.05)',
  name: 'Admin',
};

export const getTheme = (role: Role): Theme => {
  if (role === 'admin') return adminTheme;
  return themes[role];
};

