# Privacy 101 - Interactive Presentation

An interactive, cinematic presentation about digital privacy, surveillance, and reclaiming your freedom. Built with Next.js, React, and Tailwind CSS.

![Privacy 101 Banner](https://img.shields.io/badge/Privacy-101-red?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan?style=flat-square&logo=tailwindcss)

## 🎯 Overview

Privacy 101 is an educational presentation designed to enlighten people about the surveillance economy and empower them with practical solutions. The presentation takes viewers on a journey through three parts:

- **Part I: The Problem** - Understanding surveillance capitalism and data harvesting
- **Part II: The Awakening** - Recognizing privacy as a fundamental right
- **Part III: The Solution** - Building your privacy toolkit

## ✨ Features

- 🎬 **22 Interactive Slides** with smooth animations
- 📹 **Embedded YouTube Videos** for key topics
- ⌨️ **Keyboard Navigation** (Arrow keys, Space, Enter, Home/End)
- 📱 **Touch/Swipe Support** for mobile devices
- 🎨 **Section Color Coding** (Red → Amber → Green → Blue)
- 📊 **Progress Tracking** with visual progress bar
- 🌙 **Dark Cinematic Theme** optimized for presentations
- 📱 **Fully Responsive** design for all screen sizes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/privacy101-presentation.git
   cd privacy101-presentation
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
privacy101-presentation/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with metadata
│       ├── page.tsx        # Main presentation component
│       └── globals.css     # Global styles and animations
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS configuration
└── README.md               # This file
```

## 🎮 Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Next Slide | `→` `Space` `Enter` | Swipe Left |
| Previous Slide | `←` `Backspace` | Swipe Right |
| First Slide | `Home` | - |
| Last Slide | `End` | - |
| Jump to Slide | Click dots | Tap dots |

## 📺 Featured Videos

The presentation includes these educational YouTube videos:

1. **Shadow Profiles** - How Facebook collects data on everyone
2. **WhatsApp vs Signal** - The truth about messaging privacy
3. **GrapheneOS** - Privacy-focused mobile operating system
4. **Bitcoin** - Financial freedom through decentralized money

## 🔧 Customization

### Adding New Slides

Edit the `slides` array in `src/app/page.tsx`:

```typescript
{
  id: 22, // Unique ID
  section: 'solution', // 'problem' | 'awakening' | 'solution' | 'closing'
  title: 'Your Title',
  subtitle: 'Your Subtitle',
  content: [
    'Bullet point 1',
    'Bullet point 2',
  ],
  highlight: 'Your quote or highlight',
  icon: '🔒', // Optional emoji icon
  videoId: 'YouTube_ID', // Optional YouTube video
  videoTitle: 'Video Title',
}
```

### Changing Colors

Modify the `sectionColors` object:

```typescript
const sectionColors = {
  problem: { bg: 'from-red-950 via-gray-950 to-gray-950', accent: 'text-red-400', text: 'text-red-300' },
  awakening: { bg: 'from-amber-950 via-gray-950 to-gray-950', accent: 'text-amber-400', text: 'text-amber-300' },
  solution: { bg: 'from-emerald-950 via-gray-950 to-gray-950', accent: 'text-emerald-400', text: 'text-emerald-300' },
  closing: { bg: 'from-blue-950 via-gray-950 to-gray-950', accent: 'text-blue-400', text: 'text-blue-300' },
}
```

## 🛠️ Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Styling

## 📝 Topics Covered

### The Problem
- Surveillance economy and data harvesting
- Shadow profiles and non-user tracking
- Phone surveillance and spyware
- Messaging privacy myths (WhatsApp)
- Email privacy concerns (Gmail)
- Financial surveillance (traditional banking)

### The Solution
- **GrapheneOS** - De-Googled phone security
- **Signal** - Private messaging
- **ProtonMail** - Encrypted email
- **Bitcoin** - Financial sovereignty
- **Burner SIMs** - Anonymous cellular

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Naomi Brockwell](https://www.youtube.com/@NaomiBrockwell) - Privacy advocacy and GrapheneOS content
- [The New Internet](https://www.youtube.com/@TheNewInternet) - Educational privacy content
- All the privacy advocates and open-source developers fighting for digital freedom

---

**Remember: Privacy isn't paranoia — it's power.**
