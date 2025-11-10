# SmartPlay - Samsung One UI Design System

## 🎨 Design Philosophy

SmartPlay follows Samsung One UI design principles to create a comfortable, accessible mobile experience optimized for one-handed use.

### Core Principles
- **Reachability First**: Important UI elements placed in the bottom half of the screen
- **Large Touch Targets**: Minimum 44x44px for comfortable tapping
- **Clear Visual Hierarchy**: Large headers, consistent spacing, clear typography
- **Smooth Animations**: Subtle, performance-optimized transitions
- **Calm Color Palette**: Non-distracting colors that reduce eye strain

---

## 🎨 Color System

### Primary Theme
```css
--primary: #1C74E9 (Samsung Blue)
--primary-light: #4A90ED
--primary-dark: #2B5CD7
```

### Quest Category Accents
Each quest category has a unique color:
- **Manhole Covers**: `#5A6E85` (Industrial grey-blue)
- **Big Trees**: `#4BAF6E` (Natural green)
- **Orientation/History**: `#FFA534` (Warm orange)

### Neutral Palette
```css
--surface-1: #FFFFFF (Cards, primary surfaces)
--surface-2: #F8F9FB (Secondary backgrounds)
--surface-3: #ECEEF2 (Tertiary, borders)
--surface-4: #D1D5DB (Disabled states)
```

### Text Colors
```css
--text-primary: #1A1B1E (High emphasis)
--text-secondary: #5F6368 (Medium emphasis)
--text-tertiary: #9AA0A6 (Low emphasis)
--text-disabled: #C4C7CC (Disabled)
```

### Semantic Colors
```css
--success: #4BAF6E (Completed, positive actions)
--warning: #FFA534 (Alerts, attention needed)
--error: #E53935 (Errors, destructive actions)
--info: #1C74E9 (Information, hints)
```

---

## 📐 Spacing System

One UI uses an 8px base unit:

```css
--spacing-xs: 4px   (0.5 unit)
--spacing-sm: 8px   (1 unit)
--spacing-md: 16px  (2 units)
--spacing-lg: 24px  (3 units)
--spacing-xl: 32px  (4 units)
--spacing-2xl: 48px (6 units)
```

### Usage Guidelines
- **Component padding**: 16px (md) for most cards
- **Section spacing**: 24px (lg) between major sections
- **Element gaps**: 8px (sm) for related items, 16px (md) for groups
- **Screen padding**: 16px horizontal, 24px vertical

---

## 🔤 Typography

### Font Family
System font stack for optimal native feel:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

### Type Scale
```
H1: 32px / 600 / -0.5px letter-spacing (Page titles)
H2: 24px / 600 / -0.3px letter-spacing (Section headers)
H3: 20px / 600 (Card titles)
H4: 18px / 600 (Subheadings)
Body: 16px / 400 (Primary text)
Caption: 14px / 500 (Labels)
Small: 12px / 400 (Supporting text)
Tiny: 11px / 400 (Metadata)
```

### One UI Typography Rules
- **Large Headers**: Top sections have oversized titles (28-32px)
- **Consistent Line Height**: 1.4-1.5 for readability
- **Medium Weight Headers**: 600 weight for emphasis without harshness
- **Letter Spacing**: Negative for large text, normal for body

---

## 🎯 Border Radius

One UI uses generous, friendly corner radii:

```css
--radius-sm: 8px   (Small buttons, chips)
--radius-md: 12px  (Standard buttons, inputs)
--radius-lg: 16px  (Cards)
--radius-xl: 24px  (Hero cards, modals)
```

### Component Examples
- Buttons: 12px
- Input fields: 12px
- Cards: 16px
- Hero/Feature cards: 20px
- Bottom sheets: 24px (top corners only)
- Avatars/Badges: 50% (perfect circles)

---

## ✨ Elevation (Shadows)

Subtle shadows for depth without harshness:

```css
--elevation-1: 0 1px 3px rgba(0, 0, 0, 0.06)  (Slight lift)
--elevation-2: 0 2px 6px rgba(0, 0, 0, 0.08)  (Standard cards)
--elevation-3: 0 4px 12px rgba(0, 0, 0, 0.10) (Prominent cards)
--elevation-4: 0 8px 24px rgba(0, 0, 0, 0.12) (Floating elements)
```

### Usage
- Level 1: Minor elevation (progress bars, dividers)
- Level 2: Standard cards, list items
- Level 3: Hero cards, important CTAs
- Level 4: Modals, bottom sheets, floating action buttons

---

## 🧩 Component Library

### OneUIAppBar
**Purpose**: Top navigation with large title area

**Props**:
- `title`: Main title text
- `subtitle`: Secondary text below title
- `onBack`: Back button handler
- `actions`: Right-side action buttons
- `transparent`: Blur backdrop effect

**Design Details**:
- Fixed height: 56px
- Sticky positioning
- Large touch targets (44px minimum)
- Optional backdrop blur for transparency

---

### BottomNavigation
**Purpose**: Primary navigation (3-5 tabs)

**Design Details**:
- Fixed at bottom
- Height: 64px
- Active state: Primary color with weight increase
- Animated indicator dot
- Large icons (24px)

**Interaction**:
- Active scale on tap
- Smooth color transitions
- Layout animation for active indicator

---

### QuestCard
**Purpose**: Display quest information in lists

**Design Details**:
- Rounded 16px
- Left border (4px) in category color
- Elevation 2 shadow
- Tap scale animation (0.98)

**Content Layout**:
- Category icon + badge (top)
- Title (16px)
- Description (14px, 2-line clamp)
- Metadata row: coordinates, points, difficulty

---

### AIRecommendation
**Purpose**: Daily AI-generated mission card

**Design Details**:
- Gradient background (primary to primary-dark)
- White text
- Decorative background circles
- Rotating AI icon
- Elevated CTA button

**Interactive Elements**:
- "Start Quest" button with scale animation
- Soft entrance animation

---

### PhotoUpload
**Purpose**: Camera/photo submission interface

**Design Details**:
- 3-column grid for thumbnails
- Aspect ratio: 1:1
- Rounded 12px
- Animated photo additions (scale + fade)
- Remove button (top-right)
- Submit button appears after first photo

**Features**:
- Camera capture support
- Multiple photo selection
- Preview thumbnails
- Max photos limit

---

### BadgeIcon
**Purpose**: Achievement badges with visual flair

**Types**: Bronze, Silver, Gold, Platinum, Diamond

**Design Details**:
- SVG-based star shape
- Radial gradient fills
- Glow effect when unlocked
- Grayscale + opacity for locked state
- Hover scale animation

**Sizes**: sm (48px), md (64px), lg (96px)

---

### StepCounter
**Purpose**: Display daily step progress

**Design Details**:
- Card layout with icon
- Large number display
- Animated progress bar
- Goal completion message

---

### WeatherWidget
**Purpose**: Show current weather in Jelgava

**Design Details**:
- Icon + temperature + condition
- Compact horizontal layout
- Updates affect AI recommendations

---

## 📱 Screen Layouts

### 1. Welcome & Profile Setup
**Structure**:
- Progress bar at top
- Large title area (oneui-header-spacing)
- Single-column form
- Bottom action bar

**Flow**: 5 steps
1. Welcome splash
2. Name input
3. Age input
4. Activity level selection
5. City confirmation

**Design Notes**:
- Each step animated (fade + slide)
- Back button on steps 2-5
- Primary CTA always visible

---

### 2. Home Screen
**Layout** (Top to Bottom):
- App bar with greeting
- AI recommendation card (hero)
- Stats row (3 columns)
- Weather widget
- Step counter
- Featured quests section
- Quick action buttons

**Scroll Behavior**:
- Sticky app bar
- Smooth scroll
- Bottom nav always visible

---

### 3. Quest Categories
**Layout**:
- Sticky category pills below app bar
- Category header card with progress
- Map preview
- Rules section
- Quest list

**Category Pills**:
- Horizontal scroll
- Active state in category color
- Shows progress (completed/total)

---

### 4. Quest Detail
**Layout**:
- Hero card with quest info
- Coordinates card (if applicable)
- Map preview with marker
- Hint section (expandable)
- Answer submission area

**Interaction**:
- "Navigate" opens Google Maps
- Bottom sheet for hints
- Photo/text/multiple-choice answers
- Success animation on submission

---

### 5. Map Screen
**Layout**:
- Full-screen map simulation
- Category filter pills (top-left)
- Floating action buttons (top-right)
- Bottom stats card

**Map Elements**:
- Animated quest markers (category colors)
- Pulsing user location
- Tap markers for quest info
- Category filtering

---

### 6. Rewards Screen
**Layout**:
- Level card (gradient hero)
- Streak indicator
- Badge grid
- Achievements list
- Weekly challenge card

**Animations**:
- Staggered entrance
- Progress bar animations
- Badge unlock effects

---

### 7. Rankings
**Layout**:
- Podium (top 3)
- Tab navigation (4 tabs)
- Leaderboard lists

**Tabs**: Students | Teams | Classes | Schools

**Design Details**:
- Animated podium with scale/float
- Medal emojis for top 3
- Current user highlighted
- Smooth tab transitions

---

### 8. Profile Screen
**Layout**:
- Hero card with avatar
- Stats grid (2x2)
- Quick action buttons
- Recent activity timeline
- Activity summary

**Actions**:
- View rewards
- View rankings
- Settings (future)

---

## 🎭 Animation Guidelines

### Motion Principles
- **Duration**: 200-400ms for most transitions
- **Easing**: ease-out for entrances, ease-in-out for state changes
- **Scale**: 0.95-1.0 for press states, 0.98 for cards
- **Fade**: Combine with movement (fade + slide)

### Common Patterns

**Card Entrance**:
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}
```

**Button Press**:
```css
active:scale-95 transition-transform
```

**Tab Indicator**:
```javascript
<motion.div layoutId="activeTab" />
```

**Floating Animation**:
```javascript
animate={{ y: [0, -10, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

---

## 📐 Layout Rules

### Container Max Width
- Mobile-first design
- Max width: 480px
- Centered on larger screens

### Safe Areas
- Bottom nav respects safe area insets
- Padding: 16px sides, 24px top/bottom

### Touch Targets
- Minimum: 44x44px
- Ideal: 48x48px
- Spacing: 8px minimum between targets

### Content Spacing
- Screen padding: 16px horizontal
- Section spacing: 24px vertical
- Card gaps: 12px-16px

---

## 🎯 Interaction Patterns

### Button States
1. **Default**: Normal appearance
2. **Hover**: Slight color shift (web only)
3. **Active**: Scale 0.95, slight color darken
4. **Disabled**: 40% opacity, no pointer events

### Card Interactions
- **Tap**: Scale 0.98
- **Long press**: (Future: context menu)
- **Swipe**: (Future: quick actions)

### Form Inputs
- **Focus**: Primary color border, subtle glow
- **Error**: Red border + error message below
- **Success**: Green checkmark (right side)

### Navigation
- **Tab change**: Smooth content transition
- **Back**: Slide from left
- **Modal**: Fade in + slide up from bottom

---

## 🌙 Dark Mode (Future)

Design tokens prepared for dark mode:
- Inverted surface colors
- Adjusted text contrast
- Softer shadows
- Muted accent colors

---

## ♿ Accessibility

### Implemented Features
- Semantic HTML
- ARIA labels on icon buttons
- Focus visible states
- Sufficient color contrast (WCAG AA)
- Large touch targets

### Future Improvements
- Screen reader testing
- Keyboard navigation
- Reduced motion preference
- High contrast mode

---

## 📱 Responsive Behavior

### Breakpoints
- Mobile: < 480px (primary target)
- Tablet: 480-768px (centered, max-width)
- Desktop: > 768px (centered, max-width)

### Adaptive Elements
- Bottom navigation (mobile only)
- Sidebar navigation (tablet+, future)
- Multi-column layouts (tablet+, future)

---

## 🛠️ Implementation Notes

### Technology Stack
- **React**: Component framework
- **Motion/React**: Animations (formerly Framer Motion)
- **Tailwind CSS v4**: Utility-first styling
- **Lucide React**: Icon library
- **Sonner**: Toast notifications
- **Radix UI**: Accessible component primitives (via shadcn)

### File Structure
```
/App.tsx                      # Main app router
/screens/                     # Full-page screens
  WelcomeScreen.tsx
  HomeScreen.tsx
  QuestCategoryScreen.tsx
  QuestDetailScreen.tsx
  MapScreen.tsx
  RewardsScreen.tsx
  RankingScreen.tsx
  ProfileScreen.tsx
/components/                  # Reusable components
  OneUIAppBar.tsx
  BottomNavigation.tsx
  QuestCard.tsx
  AIRecommendation.tsx
  PhotoUpload.tsx
  BadgeIcon.tsx
  StepCounter.tsx
  WeatherWidget.tsx
/data/                        # Data and types
  quests.ts
/styles/                      # Global styles
  globals.css                 # Design tokens + typography
```

---

## 🎮 Quest System

### Quest Categories
1. **Manhole Cover Hunt** (Atrodi Jelgavas lūkas vākus)
   - Color: #5A6E85
   - Icon: 🔍
   - Focus: Urban exploration, photography

2. **Big Tree Locator** (Dižkoki Jelgavā)
   - Color: #4BAF6E
   - Icon: 🌳
   - Focus: Nature discovery, environment

3. **Orientation + History** (Brīvību Meklējot)
   - Color: #FFA534
   - Icon: 🧭
   - Focus: Navigation, Jelgava history

### Answer Types
- **Photo**: Camera upload with evidence
- **Text**: Free text input
- **Multiple Choice**: Radio button selection

### Scoring System
- Points based on difficulty (1-5)
- Team scoring: Best 5 results count
- XP for leveling up
- Badges for milestones

---

## 📊 Data Structure

### Quest Object
```typescript
{
  id: string
  category: 'manhole' | 'trees' | 'history'
  title: string
  description: string
  coordinates?: { lat, lng, formatted }
  difficulty: 1-5
  points: number
  answerType: 'text' | 'multiple-choice' | 'photo'
  correctAnswer?: string
  choices?: string[]
  hint?: string
}
```

### User Profile
```typescript
{
  name: string
  age: number
  activityLevel: string
  city: string
}
```

---

## 🎨 Brand Identity

### App Name
**SmartPlay** - AI Turns Movement Into a Game

### Tagline
Motivate teenagers to walk, run, explore their city, and complete real-world quests

### Target Audience
- Age: 13-18 years old
- Location: Jelgava, Latvia
- Interest: Gamification, exploration, physical activity

### Voice & Tone
- **Encouraging**: Positive reinforcement
- **Playful**: Fun without being childish
- **Educational**: Learning through exploration
- **Achievement-focused**: Clear progress and rewards

---

## ✅ Design Checklist

### Component Creation
- [ ] Follows One UI spacing (8px grid)
- [ ] Uses design tokens (CSS variables)
- [ ] Minimum 44px touch targets
- [ ] Proper elevation (shadow)
- [ ] Smooth animations (200-400ms)
- [ ] Accessible (ARIA, focus states)
- [ ] Responsive (mobile-first)

### Screen Design
- [ ] Large header area (oneui-header-spacing)
- [ ] Content in bottom 2/3 of screen
- [ ] Bottom navigation visible
- [ ] Safe area padding
- [ ] Proper back navigation
- [ ] Loading states
- [ ] Empty states
- [ ] Error handling

### Code Quality
- [ ] TypeScript types
- [ ] Proper props interface
- [ ] Motion animations
- [ ] CSS utility classes
- [ ] No hardcoded colors
- [ ] Reusable components
- [ ] Performance optimized

---

## 🚀 Future Enhancements

### Phase 2 Features
- Real GPS tracking
- Camera integration with AR
- Offline mode with local storage
- Social sharing
- Team chat
- School administration panel
- Achievement notifications
- Weather API integration
- Google Maps API integration

### Design Improvements
- Dark mode full implementation
- Tablet/desktop layouts
- Accessibility audit
- Animation performance optimization
- Component library documentation
- Storybook integration

---

## 📚 References

### Samsung One UI Guidelines
- Large, readable text
- One-handed operation focus
- Natural, smooth animations
- Comfortable viewing area
- Minimalistic, clean design

### Design Inspiration
- Samsung Health
- Google Fit
- Pokemon GO (quest mechanics)
- Duolingo (gamification)
- Strava (activity tracking)

---

## 🎯 Success Metrics

### User Engagement
- Daily active users
- Quest completion rate
- Average session duration
- Steps per user per day

### Design KPIs
- Time to complete onboarding
- Navigation success rate
- Quest discovery rate
- Photo submission quality

---

**Design System Version**: 1.0  
**Last Updated**: November 2025  
**Design Tool**: Code-first (React + Tailwind)  
**Platform**: Mobile Web (iOS/Android browsers)
