# Anam Ismail Signature Salon

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open the app in your browser at http://localhost:5173

## Preview production build locally

1. Build the app for production:
   ```bash
   npm run build
   ```

2. Preview the built app:
   ```bash
   npm run preview
   ```

3. Open the preview in your browser at http://localhost:4173

## Vercel deployment

This project uses Nitro’s Vercel preset for deployment.

1. Commit your code and push to GitHub.
2. Connect your repository to Vercel.
3. In Vercel settings, use the default build command:
   ```bash
   npm run vercel-build
   ```

Vercel will deploy the Nitro-generated `.vercel/output` server functions and static assets automatically.
