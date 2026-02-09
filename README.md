# Synthesia - Modern Music Player

A beautiful, feature-rich music player web application built with **React + Vite + Tailwind CSS**.

## ✨ Features

### 🎵 Core Features
- **Smart Music Library** - Browse and manage your music collection
- **Advanced Search** - Search songs by name or artist in real-time
- **Favorites Management** - Save your favorite songs (persisted in localStorage)
- **Now Playing Queue** - See upcoming songs in a dedicated sidebar
- **Playlist Support** - Organize songs into playlists
- **Song Statistics** - View total songs, favorites count, and total duration

### 🎨 UI/UX Enhancements
- **Dark/Light Theme Toggle** - Switch between dark and light modes (theme preference saved)
- **Modern Animations** - Smooth transitions and interactive animations throughout
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Glass Morphism** - Beautiful frosted glass effects on components
- **Gradient UI** - Modern gradient backgrounds and text effects
- **Real-time Search** - Instant song filtering as you type

### 🔐 Authentication
- **User Registration** - Create accounts with email and password
- **User Login** - Secure login system
- **User Profile** - Display logged-in user information
- **Logout** - Clear session and return to login

### 🎧 Player Controls
- **Play/Pause** - Toggle playback
- **Next/Previous** - Navigate through songs
- **Progress Bar** - Seek to specific positions in songs
- **Duration Display** - View current time and total duration
- **Favorite Toggle** - Quick favorite marking from the player

### 📊 Dashboard
- **Quick Statistics** - Cards showing key metrics
  - Total songs available
  - Number of favorited songs
  - Total playlist duration
- **Queue Preview** - See what's coming next

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.3
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 3.4.19
- **Routing**: React Router DOM 7.12.0
- **Icons**: React Icons 5.5.0
- **CSS Processing**: PostCSS + Autoprefixer

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd static-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
static-frontend/
├── src/
│   ├── components/
│   │   ├── auth/              # Authentication components
│   │   ├── layout/            # Main layout components
│   │   ├── player/            # Music player components
│   │   ├── songs/             # Song display components
│   │   ├── search/            # Search functionality
│   │   └── common/            # Reusable components (Theme, Stats, Queue)
│   ├── pages/                 # Page components
│   ├── css/                   # Stylesheets organized by component
│   ├── assets/                # Images and static files
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Key Components

### Authentication
- `Login.jsx` - Login page with email validation
- `Signup.jsx` - Registration page with form validation
- `Auth.jsx` - Protected route wrapper

### Layout
- `SideMenu.jsx` - Navigation sidebar with user profile
- `MainArea.jsx` - Central content area
- `Footer.jsx` - Player controls at the bottom

### Player
- `ControlArea.jsx` - Play/pause/next/previous controls
- `SongDetail.jsx` - Currently playing song info
- `SongList.jsx` - Table view of songs
- `SongGrid.jsx` - Grid view of songs
- `Playlist.jsx` - Playlist management

### New Features
- `ThemeToggle.jsx` - Dark/light mode switcher
- `Statistics.jsx` - Dashboard metrics display
- `PlayerQueue.jsx` - Upcoming songs queue display

## 🔧 Configuration

### Theme Customization
Edit the CSS color variables in `src/css/global.css`:
```css
:root {
  --color-primary: #a855f7;
  --color-secondary: #ec4899;
  /* ... other variables */
}
```

### Tailwind Configuration
Customize in `tailwind.config.js` for extended colors and utilities.

## 🐛 Bug Fixes & Improvements

### Fixed Issues
1. ✅ User data now properly stored with name field
2. ✅ Favorites persist across browser sessions using localStorage
3. ✅ Improved error handling in authentication forms
4. ✅ Better state management for player controls
5. ✅ Theme persistence across sessions
6. ✅ Responsive layout on all screen sizes

### Enhanced Features
1. ✨ Added theme toggle for dark/light mode
2. ✨ Implemented queue visualization
3. ✨ Added statistics dashboard
4. ✨ Better animations and transitions
5. ✨ Improved loading states
6. ✨ Enhanced accessibility features

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🙋‍♂️ Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the development team.

---

**Last Updated**: February 7, 2026
**Version**: 2.0.0