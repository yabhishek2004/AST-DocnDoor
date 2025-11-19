# DocnDoor Authentication System

A modern, premium authentication UI system built with React + Tailwind CSS + Framer Motion, inspired by Ocula's login/signup animation style.

## Features

- **4 Role Support**: Customer, Service Provider, Doctor, and Admin (hidden)
- **Role-Based Theming**: Dynamic color themes that change based on selected role
  - Customer: Blue (#2E6BFF)
  - Service Provider: Green (#10B981)
  - Doctor: Purple (#7C3AED)
  - Admin: Dark mode with Neon accent (#00E5FF)
- **Smooth Animations**: Spring-based transitions (0.55s ease-out) using Framer Motion
- **Floating Labels**: Input fields with animated floating labels
- **Signup Panel**: Slide-in panel from the right with role-themed background
- **Button Morphing**: Sign-in button morphs into checkmark when form is valid
- **Responsive Design**: Fully responsive across all devices

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Application**
   - Main login page: `http://localhost:3000/` or `http://localhost:3000/login`
   - Admin login: `http://localhost:3000/admin-login`

## Project Structure

```
src/
├── config/
│   └── theme.ts          # Theme configuration for all roles
├── store/
│   └── authStore.ts      # Zustand store for auth state
├── components/
│   ├── AuthCard.tsx      # Main authentication card container
│   ├── RoleToggle.tsx    # 3-way role selector
│   ├── LoginForm.tsx     # Login form with validation
│   ├── SignupPanel.tsx   # Slide-in signup panel
│   ├── FloatingActionButton.tsx  # Blue bubble button
│   └── FloatingLabelInput.tsx   # Reusable input with floating label
├── pages/
│   ├── LoginPage.tsx     # Main login page
│   └── AdminLoginPage.tsx # Admin-only login page
├── App.tsx               # Main app with routing
├── App.css               # Global styles
└── main.tsx              # Entry point
```

## Usage

### From Navigation Bar

All HTML pages have been updated to link the "Sign In" button to the React authentication system at `/`.

### Direct Access

- Visit `http://localhost:3000/` for the main login page
- Visit `http://localhost:3000/admin-login` for admin access (hidden from role selector)

## Key Components

### RoleToggle
3-way toggle switch that instantly updates the entire UI theme when a role is selected.

### LoginForm
- Email and password fields with floating labels
- Real-time validation
- Button morphs into checkmark when valid
- "Forgot password?" link

### SignupPanel
- Slides in from the right
- Full-height colored panel matching role theme
- Username, Email, Password fields
- White borders on transparent background
- Reversed button colors (white button with theme text)

### AdminLoginPage
- Separate route (`/admin-login`)
- Dark mode design (#0A0A0C background)
- Dark grey card (#1B1B1F)
- Neon accent color (#00E5FF)
- No signup, no role toggle, no floating bubble

## Technologies

- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **Zustand**: State management
- **React Router**: Routing
- **Vite**: Build tool and dev server

## Customization

### Adding New Roles

1. Update `src/config/theme.ts` to add new theme
2. Add role to `RoleToggle.tsx` roles array
3. Update `authStore.ts` type definitions

### Changing Animation Timing

Edit the `transition` props in components:
- Spring animations: `stiffness` and `damping` values
- Duration: `duration` property (default: 0.55s)

### Theme Colors

Modify color values in `src/config/theme.ts`:
```typescript
export const themes: Record<Role, Theme> = {
  customer: {
    primary: '#2E6BFF',  // Change this
    // ...
  },
  // ...
};
```

## Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Notes

- The authentication system is a separate React app that runs alongside the static HTML pages
- The Sign In button in the navigation bar links to the React app
- Admin login is intentionally hidden from the main role selector
- All animations use Framer Motion's spring physics for natural motion
- The system is fully accessible with proper ARIA labels

