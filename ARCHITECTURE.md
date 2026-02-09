# 🎨 Synthesia Project Architecture & Components

## Project Structure

```
static-frontend/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── vite.config.js            # Vite build configuration
│   ├── tailwind.config.js         # Tailwind CSS configuration
│   └── postcss.config.js          # PostCSS configuration
│
├── 📚 Documentation
│   ├── README.md                  # Complete project overview
│   ├── FEATURES.md               # Detailed features documentation
│   ├── CHANGELOG.md              # Version history and changes
│   ├── QUICKSTART.md             # Quick start guide
│   ├── ENHANCEMENTS.md           # Enhancement summary
│   └── ARCHITECTURE.md           # This file
│
├── 📁 Source Code (src/)
│   │
│   ├── 📄 main.jsx               # Application entry point
│   ├── 📄 App.jsx                # Root component with routing
│   ├── 📄 App.css                # Main app styles
│   │
│   ├── 📁 pages/                 # Page components
│   │   ├── Homepage.jsx          # Main music player page
│   │   ├── Login.jsx             # Login page
│   │   └── Signup.jsx            # Registration page
│   │
│   ├── 📁 components/            # Reusable components
│   │   │
│   │   ├── 📁 auth/              # Authentication components
│   │   │   └── Auth.jsx          # Auth wrapper component
│   │   │
│   │   ├── 📁 layout/            # Main layout components
│   │   │   ├── SideMenu.jsx      # Left sidebar navigation
│   │   │   ├── MainArea.jsx      # Central content area
│   │   │   └── Footer.jsx        # Bottom player controls
│   │   │
│   │   ├── 📁 player/            # Music player components
│   │   │   ├── ControlArea.jsx   # Play/pause/next buttons
│   │   │   ├── SongDetail.jsx    # Current song display
│   │   │   ├── SongList.jsx      # Table view of songs
│   │   │   ├── Playlist.jsx      # Playlist manager
│   │   │   └── Features.jsx      # Player features
│   │   │
│   │   ├── 📁 songs/             # Song display components
│   │   │   └── SongGrid.jsx      # Grid view of songs
│   │   │
│   │   ├── 📁 search/            # Search functionality
│   │   │   └── SearchBar.jsx     # Search input component
│   │   │
│   │   └── 📁 common/            # NEW: Shared components
│   │       ├── ThemeToggle.jsx   # Dark/light mode switcher
│   │       ├── Statistics.jsx    # Dashboard metrics
│   │       └── PlayerQueue.jsx   # Song queue display
│   │
│   ├── 📁 css/                   # Stylesheets
│   │   │
│   │   ├── 📄 global.css         # NEW: Global theme variables
│   │   │
│   │   ├── 📁 auth/
│   │   │   ├── Auth.css
│   │   │   ├── Login.css
│   │   │   ├── Signup.css
│   │   │   ├── EditProfile.css
│   │   │   ├── Input.css
│   │   │   └── ResetPassword.css
│   │   │
│   │   ├── 📁 common/            # NEW: Shared component styles
│   │   │   ├── Modal.css
│   │   │   ├── ThemeToggle.css   # NEW
│   │   │   ├── Statistics.css    # NEW
│   │   │   └── PlayerQueue.css   # NEW
│   │   │
│   │   ├── 📁 footer/
│   │   │   ├── ControlArea.css
│   │   │   ├── Feature.css
│   │   │   ├── Footer.css
│   │   │   └── SongDetail.css
│   │   │
│   │   ├── 📁 mainArea/
│   │   │   ├── MainArea.css
│   │   │   ├── Playlist.css
│   │   │   └── SongList.css
│   │   │
│   │   ├── 📁 pages/
│   │   │   └── HomePage.css
│   │   │
│   │   ├── 📁 search/
│   │   │   └── SearchBar.css
│   │   │
│   │   ├── 📁 sidemenu/
│   │   │   └── SideMenu.css
│   │   │
│   │   └── 📁 songs/
│   │       ├── SongCard.css
│   │       └── SongGrid.css
│   │
│   ├── 📁 assets/                # Static files
│   │   └── wsa-logo.jpg
│   │
│   └── 📁 songs/                 # Song data (if any)
│
├── 📁 dist/                       # Build output (created after build)
│
└── 📁 node_modules/               # Dependencies (created after npm install)
```

---

## Component Hierarchy

```
App
├── Router (BrowserRouter)
│   ├── Login (Page)
│   ├── Signup (Page)
│   └── Protected Routes
│       └── Homepage (Page)
│           ├── Statistics (NEW)
│           ├── SideMenu
│           │   ├── Logo
│           │   ├── Navigation
│           │   ├── ThemeToggle (NEW)
│           │   └── UserProfile
│           ├── MainArea
│           │   ├── Auth
│           │   ├── SearchBar (conditionally shown)
│           │   ├── Playlist (conditionally shown)
│           │   └── SongList or SongGrid (conditionally shown)
│           ├── PlayerQueue (NEW)
│           │   └── QueueItems
│           └── Footer
│               ├── SongDetail
│               └── ControlArea
```

---

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Homepage State                       │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  - view (home/search/favourite)                          │
│  - currentSongIndex                                      │
│  - isPlaying                                             │
│  - currentTime                                           │
│  - favorites []                    (localStorage sync)   │
│  - theme (dark/light)              (localStorage sync)   │
│                                                           │
└─────────────────────────────────────────────────────────┘
         │              │                │
         ▼              ▼                ▼
    SideMenu      MainArea         PlayerQueue
    (view)     (content/songs)    (currentSongIndex)
         │              │                │
         ▼              ▼                ▼
  Navigation      SearchBar         Queue Display
  ThemeToggle    SongList/Grid       Click to Play
  UserProfile    Favorites View
```

---

## Feature Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Synthesia Features                     │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Authentication Layer                                    │
│  ├─ Login (validation + localStorage)                   │
│  └─ Signup (form validation)                            │
│                                                           │
│  Music Management Layer                                  │
│  ├─ Song List (table view)                              │
│  ├─ Song Grid (card view)                               │
│  ├─ Search (real-time filtering)                        │
│  └─ Favorites (persistent storage)                      │
│                                                           │
│  Player Control Layer                                    │
│  ├─ Play/Pause                                          │
│  ├─ Next/Previous                                       │
│  ├─ Progress Bar                                        │
│  └─ Volume (future)                                     │
│                                                           │
│  UI Enhancement Layer                                    │
│  ├─ Theme Toggle (dark/light)                           │
│  ├─ Statistics Display                                  │
│  └─ Queue Visualization                                 │
│                                                           │
│  Persistence Layer                                       │
│  ├─ localStorage (favorites)                            │
│  ├─ localStorage (theme preference)                     │
│  └─ localStorage (user data)                            │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## Storage Architecture

```
┌──────────────────────────────────────────────────┐
│          Browser localStorage                    │
├──────────────────────────────────────────────────┤
│                                                   │
│  user: {                                         │
│    name: "John",                                 │
│    email: "john@example.com",                    │
│    isAuthenticated: true,                        │
│    loginTime: "2026-02-07T..."                   │
│  }                                               │
│                                                   │
│  favorites: [                                    │
│    { id: 1, name: "Song1", ... },                │
│    { id: 3, name: "Song3", ... },                │
│    ...                                           │
│  ]                                               │
│                                                   │
│  theme: "dark"  (or "light")                     │
│                                                   │
└──────────────────────────────────────────────────┘
```

---

## Styling Architecture

```
┌─────────────────────────────────────────────┐
│          CSS/Styling System                 │
├─────────────────────────────────────────────┤
│                                              │
│  Global (global.css)                        │
│  ├─ CSS custom properties (--color-*)       │
│  ├─ Theme variables (light/dark)            │
│  ├─ Global animations                       │
│  └─ Accessibility settings                  │
│                                              │
│  Component Stylesheets                      │
│  ├─ Tailwind @apply directives              │
│  ├─ Component-specific animations           │
│  ├─ Responsive breakpoints                  │
│  └─ Dark theme overrides                    │
│                                              │
│  Responsive Breakpoints                     │
│  ├─ 480px - Mobile                          │
│  ├─ 768px - Tablet                          │
│  ├─ 1024px - Large Tablet                   │
│  ├─ 1200px - Desktop                        │
│  └─ 1920px+ - Large Desktop                 │
│                                              │
│  Color Scheme                                │
│  ├─ Light Mode (white/gray bg)              │
│  └─ Dark Mode (dark gray/black bg)          │
│                                              │
└─────────────────────────────────────────────┘
```

---

## Authentication Flow

```
User arrives at app
        │
        ▼
Is user authenticated?
        │
        ├─ NO ──┐
        │       │
        │       ▼
        │   Check localStorage
        │       │
        │       ├─ Found ──┐
        │       │          │
        │       │          ▼
        │       │      Load user data
        │       │          │
        │       │          ▼
        │       │      Redirect to /
        │       │
        │       └─ Not found ──┐
        │                      │
        │                      ▼
        │                  Show login/signup
        │                      │
        │                   ┌──┴──┐
        │                   │     │
        │                   ▼     ▼
        │                 Login Signup
        │                   │     │
        │                   └──┬──┘
        │                      │
        │                      ▼
        │                  Save to localStorage
        │                      │
        │                      ▼
        │                  Redirect to /
        │
        └─ YES ──┐
                │
                ▼
            Load app
                │
                ▼
            Homepage
```

---

## Theme Toggle Flow

```
App Loads
    │
    ├─ Check localStorage for "theme"
    │   │
    │   ├─ Found ──┐
    │   │          │
    │   │          ▼
    │   │      Apply theme
    │   │          │
    │   │          ▼
    │   │      Set data-theme attribute
    │   │
    │   └─ Not found ──┐
    │                  │
    │                  ▼
    │              Use system preference
    │                  │
    │                  ▼
    │              Save preference
    │
    └─ User clicks theme toggle
        │
        ▼
    Switch theme (dark ↔ light)
        │
        ▼
    Save to localStorage
        │
        ▼
    Update data-theme attribute
        │
        ▼
    CSS updates automatically
```

---

## Favorites Flow

```
User adds/removes favorite
        │
        ▼
Update state (setFavorites)
        │
        ▼
useEffect triggers
        │
        ▼
Save to localStorage
        │
        ├─ Update heart icon
        │
        ├─ Update favorites count in stats
        │
        └─ Update favorites view (if active)

On app load
        │
        ▼
useEffect on mount
        │
        ▼
Load favorites from localStorage
        │
        ▼
Restore state (setFavorites)
```

---

## Responsive Design Strategy

```
Mobile First Approach:
┌────────────────────────────────────────┐
│                                        │
│  1. Design for mobile (< 480px)        │
│                                        │
│  2. Add improvements for tablet        │
│     (480px - 768px)                    │
│                                        │
│  3. Enhance for large screens          │
│     (768px - 1200px)                   │
│                                        │
│  4. Optimize for desktop               │
│     (1200px+)                          │
│                                        │
└────────────────────────────────────────┘

Breakpoint Changes:
┌─────────────┬─────────────────────────┐
│ Breakpoint  │ Layout Changes          │
├─────────────┼─────────────────────────┤
│ < 480px     │ Single column, no queue │
│ 480-768px   │ Sidebar collapsed       │
│ 768-1200px  │ 2 columns, queue hidden │
│ > 1200px    │ 3 columns, full layout  │
└─────────────┴─────────────────────────┘
```

---

## Performance Optimization

```
┌─────────────────────────────────────────┐
│      Performance Strategies             │
├─────────────────────────────────────────┤
│                                          │
│  Code Splitting                         │
│  ├─ Route-based splitting                │
│  └─ Dynamic imports (future)             │
│                                          │
│  State Management                       │
│  ├─ useMemo for expensive calculations  │
│  ├─ Efficient localStorage operations    │
│  └─ Minimal re-renders                   │
│                                          │
│  CSS Optimization                       │
│  ├─ Tailwind CSS purging                 │
│  ├─ Minified production build            │
│  └─ CSS transitions (GPU accelerated)    │
│                                          │
│  Asset Optimization                     │
│  ├─ Image optimization                  │
│  ├─ Icon library (React Icons)           │
│  └─ Lazy loading (future)                │
│                                          │
└─────────────────────────────────────────┘
```

---

## Error Handling

```
┌─────────────────────────────────────────┐
│      Error Handling Strategy            │
├─────────────────────────────────────────┤
│                                          │
│  Form Validation                        │
│  ├─ Email format validation              │
│  ├─ Password requirements                │
│  ├─ Required field checks                │
│  └─ Real-time error clearing             │
│                                          │
│  Storage Errors                         │
│  ├─ Try-catch for JSON parsing           │
│  └─ Fallback to defaults                 │
│                                          │
│  UI Feedback                            │
│  ├─ Error messages                       │
│  ├─ Loading states                       │
│  ├─ Disabled buttons during submission   │
│  └─ Visual feedback                      │
│                                          │
└─────────────────────────────────────────┘
```

---

## Build & Deployment

```
Development
    │
    ├─ npm install
    │
    └─ npm run dev
        │
        ▼
    Vite Dev Server
    (http://localhost:5173)

Production Build
    │
    ├─ npm run build
    │
    ▼
    Vite Build Process
    │
    ├─ Minification
    ├─ Code splitting
    ├─ Asset optimization
    └─ Source map generation
        │
        ▼
    dist/ folder ready
        │
        ├─ index.html
        ├─ assets/
        │   ├─ index-[hash].js
        │   └─ index-[hash].css
        └─ Other assets

Deployment
    │
    ├─ Deploy dist/ to host
    ├─ Configure server
    └─ Enable gzip compression
```

---

## Summary

This architecture provides:
- ✅ Clean component organization
- ✅ Efficient state management
- ✅ Data persistence
- ✅ Theme support
- ✅ Responsive design
- ✅ Performance optimization
- ✅ Accessibility
- ✅ Error handling
- ✅ Future scalability

---

**Document Version**: 1.0  
**Last Updated**: February 7, 2026  
**Status**: Production Ready
