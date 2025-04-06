#!/bin/bash

# setup-structure.sh
# Script to set up the new structure for nilebitlabs.com

# Define the project root
PROJECT_ROOT="."

# Create directories
echo "Creating directory structure..."

# App directory (Next.js pages)
mkdir -p $PROJECT_ROOT/app/about
mkdir -p $PROJECT_ROOT/app/services
mkdir -p $PROJECT_ROOT/app/solutions
mkdir -p $PROJECT_ROOT/app/portfolio
mkdir -p $PROJECT_ROOT/app/blog/[slug]
mkdir -p $PROJECT_ROOT/app/contact
mkdir -p $PROJECT_ROOT/app/team
mkdir -p $PROJECT_ROOT/app/faq
mkdir -p $PROJECT_ROOT/app/terms
mkdir -p $PROJECT_ROOT/app/privacy

# Components directory
mkdir -p $PROJECT_ROOT/components/ui
mkdir -p $PROJECT_ROOT/components/sections
mkdir -p $PROJECT_ROOT/components/layout

# Lib directory
mkdir -p $PROJECT_ROOT/lib

# Public directory
mkdir -p $PROJECT_ROOT/public/fonts/webfonts
mkdir -p $PROJECT_ROOT/public/img/logo
mkdir -p $PROJECT_ROOT/public/img/icons
mkdir -p $PROJECT_ROOT/public/img/hero
mkdir -p $PROJECT_ROOT/public/img/portfolio
mkdir -p $PROJECT_ROOT/public/img/blog
mkdir -p $PROJECT_ROOT/public/img/team

# Styles directory
mkdir -p $PROJECT_ROOT/styles/components
mkdir -p $PROJECT_ROOT/styles/sections

# Scripts directory
mkdir -p $PROJECT_ROOT/scripts

# Create placeholder files
echo "Creating placeholder files..."

# App files
touch $PROJECT_ROOT/app/favicon.ico
touch $PROJECT_ROOT/app/globals.css
touch $PROJECT_ROOT/app/layout.tsx
touch $PROJECT_ROOT/app/page.tsx
touch $PROJECT_ROOT/app/about/page.tsx
touch $PROJECT_ROOT/app/services/page.tsx
touch $PROJECT_ROOT/app/solutions/page.tsx
touch $PROJECT_ROOT/app/portfolio/page.tsx
touch $PROJECT_ROOT/app/blog/page.tsx
touch $PROJECT_ROOT/app/blog/[slug]/page.tsx
touch $PROJECT_ROOT/app/contact/page.tsx
touch $PROJECT_ROOT/app/team/page.tsx
touch $PROJECT_ROOT/app/faq/page.tsx
touch $PROJECT_ROOT/app/terms/page.tsx
touch $PROJECT_ROOT/app/privacy/page.tsx
touch $PROJECT_ROOT/app/404.tsx

# Component files
touch $PROJECT_ROOT/components/ui/Button.tsx
touch $PROJECT_ROOT/components/ui/Card.tsx
touch $PROJECT_ROOT/components/ui/Navbar.tsx
touch $PROJECT_ROOT/components/ui/Footer.tsx
touch $PROJECT_ROOT/components/ui/Hero.tsx
touch $PROJECT_ROOT/components/sections/HomeHero.tsx
touch $PROJECT_ROOT/components/sections/ServicesSection.tsx
touch $PROJECT_ROOT/components/sections/SolutionsSection.tsx
touch $PROJECT_ROOT/components/sections/PortfolioSection.tsx
touch $PROJECT_ROOT/components/sections/BlogSection.tsx
touch $PROJECT_ROOT/components/sections/ContactForm.tsx
touch $PROJECT_ROOT/components/layout/Header.tsx
touch $PROJECT_ROOT/components/layout/MainLayout.tsx

# Lib files
touch $PROJECT_ROOT/lib/data.ts
touch $PROJECT_ROOT/lib/utils.ts

# Public files
touch $PROJECT_ROOT/public/favicon.ico
touch $PROJECT_ROOT/public/sitemap.xml

# Styles files
touch $PROJECT_ROOT/styles/tailwind.css
touch $PROJECT_ROOT/styles/components/Button.module.css
touch $PROJECT_ROOT/styles/components/Card.module.css
touch $PROJECT_ROOT/styles/sections/Hero.module.css
touch $PROJECT_ROOT/styles/sections/ContactForm.module.css

# Scripts file
touch $PROJECT_ROOT/scripts/setup-structure.sh

# Add basic content to some files
echo "Adding basic content to some files..."

# Add a basic layout.tsx
cat <<EOL > $PROJECT_ROOT/app/layout.tsx
import './globals.css';
import { MainLayout } from '../components/layout/MainLayout';

export const metadata = {
  title: 'NileBit Labs',
  description: 'Innovative Tech Solutions by NileBit Labs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
EOL

# Add a basic page.tsx (Homepage)
cat <<EOL > $PROJECT_ROOT/app/page.tsx
import { HomeHero } from '../components/sections/HomeHero';

export default function Home() {
  return (
    <main>
      <HomeHero />
      {/* Add more sections here */}
    </main>
  );
}
EOL

# Add a basic tailwind.css
cat <<EOL > $PROJECT_ROOT/styles/tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# Add a basic tailwind.config.ts
cat <<EOL > $PROJECT_ROOT/tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6200', // Orange accent
        dark: '#1A1A1A',    // Dark background
        light: '#FFFFFF',   // Light text
      },
    },
  },
  plugins: [],
};
EOL

echo "Project structure setup complete!"
echo "Next steps:"
echo "1. Run 'chmod +x scripts/setup-structure.sh' to make this script executable (if not already)."
echo "2. Install dependencies: 'npm install'."
echo "3. Start the dev server: 'npm run dev'."