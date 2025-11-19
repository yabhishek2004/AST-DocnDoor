# Netlify Auto-Deployment Setup Guide

This guide will help you set up automatic deployment to Netlify whenever you make changes to your project.

## Prerequisites

1. **Install Git** (if not already installed):
   - Download from: https://git-scm.com/download/win
   - Or use: `winget install Git.Git` in PowerShell

2. **Create a GitHub account** (if you don't have one):
   - Sign up at: https://github.com

3. **Create a Netlify account** (if you don't have one):
   - Sign up at: https://app.netlify.com

## Step-by-Step Setup

### Step 1: Initialize Git Repository

Open PowerShell in your project directory and run:

```powershell
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., name it `tf` or `docndoor`)
3. **DO NOT** initialize with README, .gitignore, or license (you already have files)
4. Click "Create repository"

### Step 3: Connect Local Repository to GitHub

After creating the GitHub repository, you'll see instructions. Run these commands (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```powershell
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Connect to Netlify

1. **Log in to Netlify**: Go to https://app.netlify.com
2. **Click "Add new site"** → **"Import an existing project"**
3. **Choose "GitHub"** (or GitLab/Bitbucket if you prefer)
4. **Authorize Netlify** to access your GitHub account
5. **Select your repository** from the list
6. **Configure build settings** (Netlify should auto-detect these from `netlify.toml`):
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
7. **Click "Deploy site"**

### Step 5: Verify Auto-Deployment

1. Netlify will automatically build and deploy your site
2. You'll get a URL like: `https://your-site-name.netlify.app`
3. **Test auto-deployment**:
   - Make a small change to any file
   - Commit and push:
     ```powershell
     git add .
     git commit -m "Test auto-deployment"
     git push
     ```
   - Go to your Netlify dashboard
   - You should see a new deployment starting automatically!

## How It Works

- **Every time you push to your main branch**, Netlify will:
  1. Detect the change
  2. Run `npm install && npm run build`
  3. Deploy the `dist` folder
  4. Update your live site

## Useful Netlify Features

### Custom Domain
- Go to Site settings → Domain management
- Add your custom domain

### Environment Variables
- Go to Site settings → Environment variables
- Add any API keys or secrets your app needs

### Branch Deploys
- Netlify can deploy previews for pull requests
- Enable in Site settings → Build & deploy → Deploy contexts

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure `package.json` has the correct build script
- Verify Node version compatibility

### Site Not Updating
- Check that you pushed to the correct branch (usually `main`)
- Verify Netlify is connected to the right repository
- Check deployment logs in Netlify dashboard

### Git Not Found
- Install Git from https://git-scm.com/download/win
- Restart PowerShell after installation
- Verify with: `git --version`

## Your Current Configuration

Your `netlify.toml` is already configured with:
- ✅ Build command: `npm install && npm run build`
- ✅ Publish directory: `dist`
- ✅ SPA redirects (for React Router)

Everything is ready! Just follow the steps above to connect your repository.

