# SmartPlay 🎮🚶‍♂️

**AI Turns Movement Into a Game**

A Samsung One UI-inspired mobile application that motivates teenagers to explore Jelgava through gamified, AI-powered quests. Walk, run, discover historical landmarks, hunt for unique manhole covers, and find ancient trees while earning points and competing with friends.

---

## ✨ Features

### 🎯 Quest Categories
- **🔍 Manhole Cover Hunt** - Find and photograph unique manhole covers around Jelgava
- **🌳 Big Tree Locator** - Discover ancient and remarkable trees (dižkoki)
- **🧭 Orientation + History** - Navigate using GPS coordinates and learn Jelgava's history

### 🤖 AI-Powered Experience
- Personalized daily missions based on weather, age, and activity level
- Dynamic quest recommendations
- Adaptive difficulty

### 🏆 Gamification
- Points and XP system
- Achievement badges (Bronze, Silver, Gold, Platinum, Diamond)
- Level progression (1-100+)
- Daily streak tracking
- 4-tier leaderboards (Students, Teams, Classes, Schools)

### 📱 Samsung One UI Design
- Large, readable headers
- Bottom navigation for one-handed use
- Comfortable touch targets (44px+)
- Smooth animations
- Calm, professional color palette
- Native feel on Samsung devices

### 📍 Location Features
- Interactive quest map
- GPS coordinate navigation
- Real-time distance tracking
- Step counter integration
- Location-based quest discovery

---

## 🎨 Design System

Built following **Samsung One UI v5/6** guidelines:

### Color Palette
- **Primary**: `#1C74E9` (Samsung Blue)
- **Manhole Category**: `#5A6E85` (Industrial Grey-Blue)
- **Tree Category**: `#4BAF6E` (Natural Green)  
- **History Category**: `#FFA534` (Warm Orange)

### Key Principles
- Large header areas for comfortable viewing
- Content positioned in lower 2/3 of screen
- Generous spacing (8px grid system)
- Soft rounded corners (12-16px)
- Subtle elevation shadows
- Minimalistic icon style

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete documentation.

---

## 📱 Screenshots & Screens

### Implemented Screens
1. **Welcome & Profile Setup** - 5-step onboarding flow
2. **Home Screen** - AI daily quest, weather, step counter, featured quests
3. **Quest Categories** - Browse quests by category with progress tracking
4. **Quest Detail** - View quest info, navigate to location, submit answers
5. **Map Screen** - Interactive map with quest markers and filtering
6. **Rewards** - View badges, achievements, level progress, streaks
7. **Rankings** - 4 leaderboards (students, teams, classes, schools)
8. **Profile** - User stats, recent activity, quick actions

---

## 🏗️ Technical Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling with design tokens
- **Motion (Framer Motion)** - Smooth animations
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible component primitives
- **Sonner** - Toast notifications

---

## 📂 Project Structure

```
smartplay/
├── App.tsx                    # Main router and state management
├── /screens/                  # Full-page screens
│   ├── WelcomeScreen.tsx
│   ├── HomeScreen.tsx
│   ├── QuestCategoryScreen.tsx
│   ├── QuestDetailScreen.tsx
│   ├── MapScreen.tsx
│   ├── RewardsScreen.tsx
│   ├── RankingScreen.tsx
│   └── ProfileScreen.tsx
├── /components/               # Reusable UI components
│   ├── OneUIAppBar.tsx
│   ├── BottomNavigation.tsx
│   ├── QuestCard.tsx
│   ├── AIRecommendation.tsx
│   ├── PhotoUpload.tsx
│   ├── BadgeIcon.tsx
│   ├── StepCounter.tsx
│   └── WeatherWidget.tsx
├── /data/                     # Data models
│   └── quests.ts             # Quest definitions for Jelgava
└── /styles/
    └── globals.css           # Design system tokens
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/smartplay.git

# Navigate to project
cd smartplay

# Install dependencies
npm install

# Start development server
npm run dev
```

### Open in Browser
Visit `http://localhost:5173` (or the port shown in terminal)

---

## 🗺️ Quest Data

### Real Jelgava Locations

The app includes authentic quest data for Jelgava, Latvia:

**Sample Quests:**
- Find the sandstone plate at `56°53'40.7"N 23°32'05.9"E`
- Discover the memorial plaque at `56°38'51.9"N 23°43'27.8"E`
- Count the towers at the cathedral `56°38'56.8"N 23°43'26.0"E`
- Identify the famous person's birthplace at `56°38'45.3"N 23°43'15.0"E`

All quest text is in **Latvian** with authentic historical questions and coordinates.

---

## 🎮 How to Play

1. **Sign Up** - Enter your name, age, and activity level
2. **Get Daily Mission** - AI generates a personalized quest based on weather
3. **Choose Quest** - Browse by category or use the map
4. **Navigate** - Use GPS coordinates to find the location
5. **Complete** - Answer questions or take photos as evidence
6. **Earn Points** - Gain XP, level up, unlock badges
7. **Compete** - Climb the leaderboards with your school

---

## 🏆 Scoring System

- **Points**: Based on quest difficulty (5-25 points)
- **XP**: For leveling up (1 XP = 1 point)
- **Difficulty**: 1-5 stars per quest
- **Team Scoring**: Best 5 results count toward team total
- **Streaks**: Daily quest completion tracking

---

## 📸 Answer Types

### Photo Evidence
- Take pictures of manhole covers, trees, landmarks
- Multiple photos per quest
- Camera integration for real-time capture

### Text Input
- Free-form answers for historical questions
- Auto-grading (future feature)

### Multiple Choice
- Select correct answer from options
- Immediate feedback

---

## 🌍 Real-World Integration

### GPS & Navigation
- Uses device geolocation
- Opens Google Maps for turn-by-turn directions
- Distance calculation to quest locations

### Camera
- Native camera access on mobile devices
- Photo preview and upload
- Evidence submission workflow

### Step Counter
- Integration with device pedometer (future)
- Daily step goals
- Progress tracking

### Weather
- Mock weather data (OpenWeatherMap integration ready)
- Affects AI quest recommendations

---

## 🔐 Privacy & Safety

- No PII (Personally Identifiable Information) collected
- Location data used only for quest navigation
- Photos stored locally (backend integration optional)
- Age-appropriate content
- Safe exploration guidelines

---

## 🛠️ Customization

### Add New Quests

Edit `/data/quests.ts`:

```typescript
{
  id: 'new-quest-1',
  category: 'history',
  title: 'Your Quest Title',
  description: 'Quest description in Latvian',
  coordinates: {
    lat: 56.6509,
    lng: 23.7242,
    formatted: '56°39\'03.2"N 23°43\'27.0"E'
  },
  difficulty: 3,
  points: 15,
  answerType: 'photo',
  hint: 'Optional hint'
}
```

### Change Colors

Edit `/styles/globals.css`:

```css
:root {
  --primary: #YOUR_BRAND_COLOR;
  --manhole-accent: #YOUR_COLOR;
  --tree-accent: #YOUR_COLOR;
  --history-accent: #YOUR_COLOR;
}
```

### Add New Categories

1. Define in `/data/quests.ts`:
```typescript
export const questCategories = {
  yourcategory: {
    id: 'yourcategory',
    name: 'Category Name',
    color: '#HEXCOLOR',
    icon: '🎯'
  }
};
```

2. Update TypeScript types
3. Add quests to that category

---

## 📚 Documentation

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Complete design guidelines, color palette, typography, components
- **[IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)** - Technical documentation, integration guides, customization

---

## 🎯 Use Cases

### Schools & Education
- Physical education gamification
- Local history lessons
- Team building activities
- Inter-class competitions

### Tourism
- City exploration for visitors
- Hidden gems discovery
- Cultural heritage education
- Interactive city tours

### Health & Fitness
- Daily step goals
- Outdoor activity motivation
- Community challenges
- Healthy lifestyle promotion

---

## 🚀 Roadmap

### Phase 1 ✅ (Current)
- [x] Complete UI/UX design
- [x] All screen implementations
- [x] Quest system with real Jelgava data
- [x] Animation system
- [x] One UI design system

### Phase 2 (Next)
- [ ] Backend integration (Supabase)
- [ ] Real GPS tracking
- [ ] Weather API integration
- [ ] Google Maps integration
- [ ] User authentication
- [ ] Photo upload to cloud storage

### Phase 3 (Future)
- [ ] Offline mode
- [ ] Social sharing
- [ ] Team chat
- [ ] Push notifications
- [ ] AR features
- [ ] School admin dashboard

---

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines first.

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 🙏 Acknowledgments

- **Samsung One UI** - Design inspiration and guidelines
- **Jelgava Municipality** - Quest locations and historical data
- **OpenStreetMap** - Map data
- **Lucide Icons** - Beautiful icon set
- **Radix UI** - Accessible component primitives

---

## 📞 Contact

- **Project Link**: [https://github.com/yourusername/smartplay](https://github.com/yourusername/smartplay)
- **Email**: your.email@example.com
- **Website**: www.smartplay.lv

---

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ for Jelgava, Latvia**

*SmartPlay - Making movement a game, one quest at a time.* 🚶‍♀️🎮🏆
