import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { OneUIAppBar } from '../components/OneUIAppBar';
import { AIRecommendation } from '../components/AIRecommendation';
import { WeatherWidget } from '../components/WeatherWidget';
import { StepCounter } from '../components/StepCounter';
import { QuestCard } from '../components/QuestCard';
import { UserProfile } from './WelcomeScreen';
import { allQuests, generateDailyMission } from '../data/quests';
import { Trophy, TrendingUp, Target } from 'lucide-react';

interface HomeScreenProps {
  profile: UserProfile;
  onQuestClick: (questId: string) => void;
}

export function HomeScreen({ profile, onQuestClick }: HomeScreenProps) {
  const [steps, setSteps] = useState(3847);
  const [dailyMission, setDailyMission] = useState('');

  useEffect(() => {
    // Generate daily mission based on weather
    const mission = generateDailyMission('sunny', profile.activityLevel);
    setDailyMission(mission);

    // Simulate step counting
    const interval = setInterval(() => {
      setSteps(prev => prev + Math.floor(Math.random() * 10));
    }, 5000);

    return () => clearInterval(interval);
  }, [profile]);

  // Get featured quests (3 random ones)
  const featuredQuests = allQuests.slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-20">
      <OneUIAppBar 
        title="SmartPlay"
        subtitle={`Welcome back, ${profile.name}`}
      />

      <div className="px-4 space-y-4 pt-6">
        {/* AI Daily Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <AIRecommendation 
            mission={dailyMission}
            userName={profile.name}
          />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="bg-surface-1 rounded-[12px] p-3 text-center" style={{ boxShadow: 'var(--elevation-1)' }}>
            <div className="w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-4 h-4 text-warning" />
            </div>
            <p className="text-[20px]">127</p>
            <p className="text-[11px] text-secondary">Points</p>
          </div>
          
          <div className="bg-surface-1 rounded-[12px] p-3 text-center" style={{ boxShadow: 'var(--elevation-1)' }}>
            <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-2">
              <Target className="w-4 h-4 text-success" />
            </div>
            <p className="text-[20px]">8/15</p>
            <p className="text-[11px] text-secondary">Quests</p>
          </div>
          
          <div className="bg-surface-1 rounded-[12px] p-3 text-center" style={{ boxShadow: 'var(--elevation-1)' }}>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <p className="text-[20px]">5</p>
            <p className="text-[11px] text-secondary">Streak</p>
          </div>
        </motion.div>

        {/* Weather Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <WeatherWidget />
        </motion.div>

        {/* Step Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <StepCounter steps={steps} goal={10000} />
        </motion.div>

        {/* Featured Quests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pt-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[20px]">Featured Quests</h3>
            <button className="text-[14px] text-primary">See All</button>
          </div>

          <div className="space-y-3">
            {featuredQuests.map((quest, index) => (
              <motion.div
                key={quest.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <QuestCard 
                  quest={quest}
                  onClick={() => onQuestClick(quest.id)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="pt-2 pb-4"
        >
          <p className="text-[14px] text-secondary mb-3">Quick Start</p>
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-surface-1 rounded-[12px] p-4 flex flex-col items-center gap-2 hover:bg-surface-2 active:scale-95 transition-all">
              <span className="text-2xl">🔍</span>
              <span className="text-[12px]">Manhole Covers</span>
            </button>
            <button className="bg-surface-1 rounded-[12px] p-4 flex flex-col items-center gap-2 hover:bg-surface-2 active:scale-95 transition-all">
              <span className="text-2xl">🌳</span>
              <span className="text-[12px]">Big Trees</span>
            </button>
            <button className="bg-surface-1 rounded-[12px] p-4 flex flex-col items-center gap-2 hover:bg-surface-2 active:scale-95 transition-all">
              <span className="text-2xl">🧭</span>
              <span className="text-[12px]">History Quest</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
