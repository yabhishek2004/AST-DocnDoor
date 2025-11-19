import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// Plugin to copy static assets
function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const assetsToCopy = ['vendor', 'js', 'images', 'css']
      const distDir = resolve(__dirname, 'dist')
      
      assetsToCopy.forEach(asset => {
        const srcDir = resolve(__dirname, asset)
        const destDir = resolve(distDir, asset)
        
        if (existsSync(srcDir)) {
          copyDir(srcDir, destDir)
        }
      })
    }
  }
}

function copyDir(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true })
  }
  
  const entries = readdirSync(src, { withFileTypes: true })
  
  for (const entry of entries) {
    const srcPath = resolve(src, entry.name)
    const destPath = resolve(dest, entry.name)
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      copyFileSync(srcPath, destPath)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyStaticAssets()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        auth: resolve(__dirname, 'auth.html'),
      }
    }
  }
})
