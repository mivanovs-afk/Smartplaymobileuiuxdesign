# SmartPlay Implementation Guide

## 🚀 Quick Start

The SmartPlay app is now fully implemented and ready to use! This guide explains the structure, features, and how to extend the application.

---

## 📁 Project Structure

```
smartplay/
├── App.tsx                          # Main application router and state
├── /screens/                        # Full-page screen components
│   ├── WelcomeScreen.tsx           # Onboarding flow (5 steps)
│   ├── HomeScreen.tsx              # Main dashboard with AI quest
│   ├── QuestCategoryScreen.tsx     # Quest browsing by category
│   ├── QuestDetailScreen.tsx       # Individual quest view
│   ├── MapScreen.tsx               # Quest map with markers
│   ├── RewardsScreen.tsx           # Achievements and badges
│   ├── RankingScreen.tsx           # Leaderboards (4 tabs)
│   └── ProfileScreen.tsx           # User profile and stats
├── /components/                     # Reusable UI components
│   ├── OneUIAppBar.tsx             # Top navigation bar
│   ├── BottomNavigation.tsx        # Bottom tab navigation
│   ├── QuestCard.tsx               # Quest list item
│   ├── AIRecommendation.tsx        # Daily AI mission card
│   ├── PhotoUpload.tsx             # Camera/photo submission
│   ├── BadgeIcon.tsx               # Achievement badges
│   ├── StepCounter.tsx             # Step tracking widget
│   └── WeatherWidget.tsx           # Weather display
├── /data/                           # Data models and mock data
│   └── quests.ts                   # Quest data for Jelgava
├── /styles/                         # Global styles
│   └── globals.css                 # Design system tokens
└── DESIGN_SYSTEM.md                # Complete design documentation
```

---

## 🎨 Design System

All design tokens are defined in `/styles/globals.css`:

### Quick Reference
- **Primary color**: `#1C74E9` (Samsung Blue)
- **Spacing unit**: 8px
- **Border radius**: 12-16px for cards
- **Typography**: System font stack
- **Shadows**: 4 elevation levels

See `DESIGN_SYSTEM.md` for complete documentation.

---

## 🧩 Core Components

### OneUIAppBar
Top navigation with Samsung One UI style.

```tsx
<OneUIAppBar 
  title="Page Title"
  subtitle="Optional subtitle"
  onBack={() => handleBack()}
/>
```

### BottomNavigation
Three-tab bottom navigation (Quests, Map, Profile).

```tsx
<BottomNavigation 
  activeTab={activeTab}
  onTabChange={(tab) => setActiveTab(tab)}
/>
```

### QuestCard
Displays quest information in a card format.

```tsx
<QuestCard 
  quest={questObject}
  onClick={() => handleQuestClick(quest.id)}
  completed={false}
/>
```

### AIRecommendation
Hero card with daily AI-generated mission.

```tsx
<AIRecommendation 
  mission="Find 5 manhole covers near Rimi"
  userName="Anna"
/>
```

### PhotoUpload
Camera upload interface with preview.

```tsx
<PhotoUpload 
  onPhotoSelect={(file) => handleUpload(file)}
  maxPhotos={5}
/>
```

---

## 📱 Screen Flow

### 1. Welcome Flow
```
WelcomeScreen (5 steps)
  1. Welcome splash
  2. Name input
  3. Age input
  4. Activity level selection
  5. City selection
  ↓
HomeScreen
```

### 2. Main Navigation
```
Bottom Navigation Tabs:
├── Quests → HomeScreen
├── Map → MapScreen
└── Profile → ProfileScreen
```

### 3. Quest Flow
```
HomeScreen
  ↓ (click quest card)
QuestDetailScreen
  ↓ (submit answer)
Success animation → HomeScreen
```

### 4. Profile Flow
```
ProfileScreen
├── View Rewards → RewardsScreen
└── View Rankings → RankingScreen
```

---

## 🎯 Quest System

### Quest Data Structure
Located in `/data/quests.ts`:

```typescript
export interface Quest {
  id: string;
  category: 'manhole' | 'trees' | 'history';
  title: string;
  description: string;
  coordinates?: { lat, lng, formatted };
  difficulty: 1 | 2 | 3 | 4 | 5;
  points: number;
  answerType: 'text' | 'multiple-choice' | 'photo';
  correctAnswer?: string;
  choices?: string[];
  hint?: string;
}
```

### Quest Categories

1. **Manhole Cover Hunt** (`manhole`)
   - Color: `#5A6E85`
   - Icon: 🔍
   - Example: "Find 5 lūkas vākus near Rimi"

2. **Big Tree Locator** (`trees`)
   - Color: `#4BAF6E`
   - Icon: 🌳
   - Example: "Find 3 big trees in Ģintermuiža park"

3. **Orientation + History** (`history`)
   - Color: `#FFA534`
   - Icon: 🧭
   - Example: "Navigate to coordinate and answer question"

### Adding New Quests

Edit `/data/quests.ts` and add to the `allQuests` array:

```typescript
{
  id: 'unique-id',
  category: 'manhole',
  title: 'Quest Title in Latvian',
  description: 'Detailed description',
  coordinates: {
    lat: 56.6509,
    lng: 23.7242,
    formatted: '56°39\'03.2"N 23°43\'27.0"E'
  },
  difficulty: 3,
  points: 20,
  answerType: 'photo',
  hint: 'Optional hint text'
}
```

---

## 🎮 State Management

### App.tsx State
```typescript
// User profile (set after onboarding)
const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

// Current screen navigation
const [currentScreen, setCurrentScreen] = useState<Screen>({ type: 'welcome' });

// Bottom nav active tab
const [activeTab, setActiveTab] = useState<NavTab>('quests');
```

### Navigation Pattern
```typescript
// Navigate to quest detail
setCurrentScreen({ type: 'quest-detail', questId: 'quest-1' });

// Navigate back to home
setCurrentScreen({ type: 'home' });

// Switch tabs
setActiveTab('map');
```

---

## 🎨 Styling Conventions

### Using Design Tokens
```tsx
// Background colors
className="bg-surface-1"        // White cards
className="bg-surface-2"        // Light gray background
className="bg-primary"          // Samsung blue

// Text colors
className="text-primary"        // Main text
className="text-secondary"      // Secondary text
className="text-tertiary"       // Muted text

// Border radius
className="rounded-[12px]"      // Standard
className="rounded-[16px]"      // Cards
className="rounded-[20px]"      // Hero cards
```

### Custom Styles with CSS Variables
```tsx
style={{ 
  backgroundColor: category.color,
  boxShadow: 'var(--elevation-2)'
}}
```

---

## ✨ Animation Patterns

### Card Entrance
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  {/* content */}
</motion.div>
```

### List Item Stagger
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.05 }}
  >
    {/* content */}
  </motion.div>
))}
```

### Button Press
```tsx
<motion.button
  whileTap={{ scale: 0.95 }}
  className="..."
>
  Click me
</motion.button>
```

### Progress Bar
```tsx
<motion.div
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  transition={{ duration: 1, ease: 'easeOut' }}
  className="h-2 bg-primary"
/>
```

---

## 🔧 Customization Guide

### Change Color Scheme

Edit `/styles/globals.css`:

```css
:root {
  --primary: #YOUR_COLOR;        /* Main brand color */
  --manhole-accent: #YOUR_COLOR; /* Manhole category */
  --tree-accent: #YOUR_COLOR;    /* Tree category */
  --history-accent: #YOUR_COLOR; /* History category */
}
```

### Modify Quest Categories

Edit `/data/quests.ts`:

```typescript
export const questCategories = {
  yourcategory: {
    id: 'yourcategory',
    name: 'Your Category Name',
    nameLatvian: 'Nosaukums latviski',
    color: '#HEXCOLOR',
    icon: '🎯',
    description: 'Category description'
  }
};
```

### Add New Screen

1. Create file in `/screens/YourScreen.tsx`
2. Add screen type to App.tsx:
```typescript
type Screen = 
  | { type: 'your-screen' }
  | // ... existing screens
```
3. Add to router in App.tsx:
```typescript
case 'your-screen':
  return <YourScreen onBack={() => setCurrentScreen({ type: 'home' })} />;
```

---

## 📊 Real-World Integration

### GPS Tracking
Replace simulated location with real GPS:

```typescript
// In MapScreen.tsx
useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => console.error('GPS error:', error)
    );
  }
}, []);
```

### Step Counter
Use device pedometer API:

```typescript
// In StepCounter.tsx
useEffect(() => {
  // iOS/Android native step counter
  // Requires native bridge or PWA API
  if ('Pedometer' in window) {
    // Implementation depends on platform
  }
}, []);
```

### Camera Integration
Already implemented in PhotoUpload component:

```tsx
<input
  type="file"
  accept="image/*"
  capture="environment"  // Opens camera on mobile
  onChange={handleFileSelect}
/>
```

### Weather API
Replace mock weather in WeatherWidget:

```typescript
useEffect(() => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Jelgava&appid=YOUR_KEY')
    .then(res => res.json())
    .then(data => setWeather({
      condition: data.weather[0].main,
      temp: Math.round(data.main.temp - 273.15),
      icon: mapWeatherIcon(data.weather[0].icon)
    }));
}, []);
```

### Google Maps Integration
Replace simulated map in MapScreen:

```tsx
import { GoogleMap, Marker } from '@react-google-maps/api';

<GoogleMap
  center={{ lat: userLocation.lat, lng: userLocation.lng }}
  zoom={14}
>
  {quests.map(quest => (
    <Marker
      key={quest.id}
      position={{ lat: quest.coordinates.lat, lng: quest.coordinates.lng }}
      onClick={() => onQuestClick(quest.id)}
    />
  ))}
</GoogleMap>
```

---

## 🗄️ Backend Integration (Future)

### Supabase Setup

1. User Authentication
2. Quest Progress Storage
3. Leaderboard Data
4. Photo Uploads
5. Real-time Rankings

Example schema:
```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT,
  age INT,
  activity_level TEXT,
  city TEXT,
  created_at TIMESTAMP
);

-- Quest completions
CREATE TABLE quest_completions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  quest_id TEXT,
  completed_at TIMESTAMP,
  answer TEXT,
  photo_url TEXT,
  points_earned INT
);

-- Leaderboard (materialized view)
CREATE MATERIALIZED VIEW leaderboard AS
SELECT 
  user_id,
  SUM(points_earned) as total_points,
  COUNT(*) as quests_completed
FROM quest_completions
GROUP BY user_id
ORDER BY total_points DESC;
```

---

## 🧪 Testing Checklist

### Manual Testing
- [ ] Onboarding flow (all 5 steps)
- [ ] Home screen loads with correct data
- [ ] Quest cards clickable
- [ ] Quest detail shows correct info
- [ ] Photo upload works
- [ ] Map markers appear
- [ ] Bottom navigation switches tabs
- [ ] Back buttons work correctly
- [ ] Animations smooth (60fps)
- [ ] Touch targets comfortable (44px+)

### Browser Testing
- [ ] Chrome (Android)
- [ ] Safari (iOS)
- [ ] Firefox
- [ ] Samsung Internet

### Device Testing
- [ ] iPhone (various sizes)
- [ ] Samsung Galaxy
- [ ] Other Android devices
- [ ] Tablet (responsive layout)

---

## 🐛 Common Issues & Solutions

### Issue: Animations laggy
**Solution**: Reduce motion complexity, use `will-change` CSS property

### Issue: Bottom nav covers content
**Solution**: Add `pb-20` padding to screen containers

### Issue: Images not loading
**Solution**: Check ImageWithFallback component usage

### Issue: Touch targets too small
**Solution**: Minimum 44x44px, add padding if needed

### Issue: Text too small on some devices
**Solution**: Use relative units (rem), test on various screen sizes

---

## 📱 PWA Setup (Optional)

### Add to Home Screen
Create `manifest.json`:

```json
{
  "name": "SmartPlay",
  "short_name": "SmartPlay",
  "description": "AI Turns Movement Into a Game",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F8F9FB",
  "theme_color": "#1C74E9",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Service Worker
For offline support and caching.

---

## 🎓 Learning Resources

### Samsung One UI
- Official Design Guidelines
- Samsung Developer Portal

### React & Motion
- Motion (Framer Motion) documentation
- React Hooks patterns

### Tailwind CSS v4
- Tailwind documentation
- Design tokens guide

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
```bash
vercel deploy
# or
netlify deploy
```

### Environment Variables
```env
VITE_GOOGLE_MAPS_API_KEY=your_key
VITE_WEATHER_API_KEY=your_key
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key
```

---

## 📞 Support

For questions or issues:
1. Check DESIGN_SYSTEM.md for design guidelines
2. Review this implementation guide
3. Inspect existing components for patterns
4. Test on multiple devices

---

## ✅ Launch Checklist

Before launching:
- [ ] All quest data accurate
- [ ] Latvian text proofread
- [ ] Coordinates verified
- [ ] Photos/images optimized
- [ ] Animations smooth
- [ ] Touch targets tested
- [ ] Back navigation works
- [ ] Error states handled
- [ ] Loading states added
- [ ] Empty states designed
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] PWA manifest configured
- [ ] Analytics integrated
- [ ] Privacy policy added
- [ ] Terms of service added

---

## 🎉 You're Ready!

The SmartPlay app is fully functional and ready for use. All screens are implemented with Samsung One UI design principles, smooth animations, and a complete quest system for Jelgava.

**Start exploring and good luck with your quests!** 🚀
