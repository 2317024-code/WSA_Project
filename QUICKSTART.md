# Quick Start Guide - Synthesia Music Player

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
cd static-frontend
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: `http://localhost:5173`

### Step 4: Login/Signup
- Click "Create one" to sign up with a test account
- Enter email and password (any email/password combination works for demo)
- Or use "Sign In" with existing credentials

### Step 5: Explore Features
- 🎵 **Home**: Browse all songs
- 🔍 **Search**: Find songs by name or artist
- ❤️ **Favorite**: Add songs to favorites (saved automatically)
- 🎧 **Queue**: See upcoming songs in the right sidebar
- 📊 **Stats**: View music library statistics
- 🌙 **Theme**: Toggle dark/light mode (click moon/sun icon)

---

## 🎯 Key Features to Try

### 1. Add Favorites
1. Go to Home page
2. Click the heart icon next to any song
3. See it appear in your favorites
4. Refresh page - favorites are still there!

### 2. Switch Theme
1. Look for the moon/sun icon in the sidebar
2. Click to toggle dark/light mode
3. Theme preference is saved automatically

### 3. Search Songs
1. Click Search in the sidebar
2. Type song name or artist
3. See results filter in real-time

### 4. View Queue
1. Look at the right sidebar
2. See "Now Playing Queue" with upcoming songs
3. Click any song to play it next

### 5. Check Statistics
1. Look at the top of the page
2. See total songs, favorites, and duration
3. Stats update as you add favorites

---

## 📱 Responsive Design

### Desktop (1200px+)
- Full 3-column layout
- Sidebar | Content | Queue

### Tablet (768px - 1199px)
- Compact queue
- Visible sidebar

### Mobile (Below 768px)
- Hidden queue
- Collapsed sidebar
- Vertical layout

---

## 🔐 Demo Credentials

Use any email and password combination (no backend validation):
- Email: `test@example.com`
- Password: `password123`

Or create your own account - it's all stored locally!

---

## 🎨 Theming

### Automatic Dark Mode
- Browser respects `prefers-color-scheme` setting
- Can toggle manually with theme button
- Preference saved to localStorage

### Available Themes
1. **Light Mode**: Clean, bright interface
2. **Dark Mode**: Easy on the eyes at night

---

## 🐛 Troubleshooting

### Issue: Theme not changing
**Solution**: Clear browser cache and reload

### Issue: Favorites disappeared
**Solution**: Check if localStorage is enabled in your browser

### Issue: Queue not showing
**Solution**: Ensure window width is > 768px (not on mobile)

### Issue: Search not working
**Solution**: Make sure you're on the Search tab

### Issue: Port 5173 already in use
**Solution**: Use a different port:
```bash
npm run dev -- --port 3000
```

---

## 📚 Helpful Resources

### Documentation Files
- `README.md` - Complete project overview
- `FEATURES.md` - Detailed feature descriptions
- `CHANGELOG.md` - Version history and changes

### Code Files Structure
```
src/
├── pages/           # Main page components
├── components/      # Reusable components
│   ├── auth/       # Login/Signup
│   ├── layout/     # Sidebar, Main, Footer
│   ├── player/     # Music player components
│   ├── songs/      # Song display
│   ├── search/     # Search functionality
│   └── common/     # Theme, Stats, Queue
└── css/            # Stylesheets
    └── [components]/  # Component-specific CSS
```

---

## 🎮 Keyboard Shortcuts (Future)

Coming in v2.1.0:
- `Space` - Play/Pause
- `→` - Next song
- `←` - Previous song
- `F` - Add to favorites
- `T` - Toggle theme

---

## 💡 Pro Tips

1. **Organize Favorites**: Add songs you like to easily find them later
2. **Use Search**: Find songs quickly by typing artist or song name
3. **Check Queue**: See what's playing next before it starts
4. **Monitor Stats**: Keep track of your music library size
5. **Switch Themes**: Choose the theme that works best for you

---

## 🚀 Build for Production

When ready to deploy:

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

Output files will be in the `dist/` folder

---

## 🤝 Need Help?

1. Check the documentation files (README.md, FEATURES.md)
2. Review the code comments
3. Open an issue on GitHub
4. Contact the development team

---

## 📝 Notes

- **Data Storage**: All data (favorites, theme) stored in browser localStorage
- **No Backend**: Currently a frontend-only application
- **Demo Songs**: Using hardcoded Spotify image URLs
- **Test Mode**: Free to use without authentication

---

## ✨ What's New in v2.0.0?

1. ✨ Dark/Light theme toggle
2. 📊 Statistics dashboard
3. 🎧 Player queue sidebar
4. 💾 Favorites persistence
5. 🎨 Enhanced UI with animations
6. 📱 Better responsive design

---

**Happy Listening! 🎵**

For detailed information, see [README.md](./README.md) and [FEATURES.md](./FEATURES.md)
