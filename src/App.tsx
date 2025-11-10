import { useState } from 'react';
import { WelcomeScreen, UserProfile } from './screens/WelcomeScreen';
import { HomeScreen } from './screens/HomeScreen';
import { QuestCategoryScreen } from './screens/QuestCategoryScreen';
import { QuestDetailScreen } from './screens/QuestDetailScreen';
import { MapScreen } from './screens/MapScreen';
import { RewardsScreen } from './screens/RewardsScreen';
import { RankingScreen } from './screens/RankingScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { BottomNavigation } from './components/BottomNavigation';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

type Screen = 
  | { type: 'welcome' }
  | { type: 'home' }
  | { type: 'quest-categories' }
  | { type: 'quest-detail'; questId: string }
  | { type: 'map' }
  | { type: 'rewards' }
  | { type: 'rankings' }
  | { type: 'profile' };

type NavTab = 'quests' | 'map' | 'profile';

export default function App() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [currentScreen, setCurrentScreen] = useState<Screen>({ type: 'welcome' });
  const [activeTab, setActiveTab] = useState<NavTab>('quests');

  const handleProfileComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentScreen({ type: 'home' });
    toast.success(`Welcome to SmartPlay, ${profile.name}! 🎉`);
  };

  const handleQuestClick = (questId: string) => {
    setCurrentScreen({ type: 'quest-detail', questId });
  };

  const handleQuestComplete = () => {
    toast.success('Quest completed! +15 points earned! 🎉');
    setCurrentScreen({ type: 'home' });
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    
    switch (tab) {
      case 'quests':
        setCurrentScreen({ type: 'home' });
        break;
      case 'map':
        setCurrentScreen({ type: 'map' });
        break;
      case 'profile':
        setCurrentScreen({ type: 'profile' });
        break;
    }
  };

  const renderScreen = () => {
    if (!userProfile && currentScreen.type !== 'welcome') {
      return <WelcomeScreen onComplete={handleProfileComplete} />;
    }

    switch (currentScreen.type) {
      case 'welcome':
        return <WelcomeScreen onComplete={handleProfileComplete} />;
      
      case 'home':
        return (
          <HomeScreen 
            profile={userProfile!}
            onQuestClick={handleQuestClick}
          />
        );
      
      case 'quest-categories':
        return (
          <QuestCategoryScreen 
            onQuestClick={handleQuestClick}
            onBack={() => setCurrentScreen({ type: 'home' })}
          />
        );
      
      case 'quest-detail':
        return (
          <QuestDetailScreen 
            questId={currentScreen.questId}
            onBack={() => setCurrentScreen({ type: 'home' })}
            onComplete={handleQuestComplete}
          />
        );
      
      case 'map':
        return (
          <MapScreen 
            onQuestClick={handleQuestClick}
          />
        );
      
      case 'rewards':
        return (
          <RewardsScreen 
            onBack={() => setCurrentScreen({ type: 'profile' })}
          />
        );
      
      case 'rankings':
        return (
          <RankingScreen 
            onBack={() => setCurrentScreen({ type: 'profile' })}
          />
        );
      
      case 'profile':
        return (
          <ProfileScreen 
            profile={userProfile!}
            onViewRewards={() => setCurrentScreen({ type: 'rewards' })}
            onViewRankings={() => setCurrentScreen({ type: 'rankings' })}
          />
        );
      
      default:
        return <WelcomeScreen onComplete={handleProfileComplete} />;
    }
  };

  const showBottomNav = userProfile && !['welcome', 'quest-detail', 'rewards', 'rankings'].includes(currentScreen.type);

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="relative">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      {showBottomNav && (
        <BottomNavigation 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      )}

      {/* Toast Notifications */}
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: 'var(--surface-1)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            fontSize: '14px'
          }
        }}
      />
    </div>
  );
}
