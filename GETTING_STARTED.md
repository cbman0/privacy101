# Privacy 101 Presentation

This folder contains a complete, standalone Next.js project for the Privacy 101 presentation.

## Quick Start

1. Open a terminal in this folder
2. Run: `npm install` or `bun install`
3. Run: `npm run dev` or `bun dev`
4. Open http://localhost:3000 in your browser

## Upload to GitHub

1. Create a new repository on GitHub
2. Push this folder's contents:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Privacy 101 Presentation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/privacy101-presentation.git
   git push -u origin main
   ```

## Deploy to Vercel (Free)

1. Go to vercel.com and sign up with GitHub
2. Click "Import Project"
3. Select your Privacy 101 repository
4. Click "Deploy"
5. Get your free URL like: privacy101-presentation.vercel.app

## Project Structure

- `src/app/page.tsx` - Main presentation (all slides and logic)
- `src/app/layout.tsx` - Root layout with SEO metadata
- `src/app/globals.css` - Styling and animations
- `package.json` - Dependencies

## Customization

Edit `src/app/page.tsx` to:
- Add/remove slides
- Change content
- Add more videos
- Modify colors
