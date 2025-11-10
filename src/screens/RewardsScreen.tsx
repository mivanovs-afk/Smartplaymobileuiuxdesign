import { motion } from 'motion/react';
import { OneUIAppBar } from '../components/OneUIAppBar';
import { BadgeIcon, BadgeType } from '../components/BadgeIcon';
import { Trophy, TrendingUp, Award, Flame } from 'lucide-react';
import { Progress } from '../components/ui/progress';

interface RewardsScreenProps {
  onBack: () => void;
}

export function RewardsScreen({ onBack }: RewardsScreenProps) {
  const userStats = {
    level: 8,
    xp: 1274,
    nextLevelXp: 1500,
    totalPoints: 347,
    questsCompleted: 23,
    dailyStreak: 12
  };

  const badges = [
    { type: 'gold' as BadgeType, label: 'Explorer', unlocked: true },
    { type: 'silver' as BadgeType, label: 'Photographer', unlocked: true },
    { type: 'bronze' as BadgeType, label: 'Navigator', unlocked: true },
    { type: 'platinum' as BadgeType, label: 'Champion', unlocked: false },
    { type: 'diamond' as BadgeType, label: 'Legend', unlocked: false }
  ];

  const achievements = [
    { 
      icon: '🔍', 
      title: 'Manhole Master', 
      description: 'Found 10 unique manhole covers',
      progress: 10,
      total: 10,
      unlocked: true
    },
    { 
      icon: '🌳', 
      title: 'Tree Hugger', 
      description: 'Discovered 5 big trees',
      progress: 5,
      total: 10,
      unlocked: false
    },
    { 
      icon: '🧭', 
      title: 'History Buff', 
      description: 'Completed all history quests',
      progress: 3,
      total: 8,
      unlocked: false
    },
    { 
      icon: '👟', 
      title: 'Marathon Walker', 
      description: 'Walked 100,000 steps',
      progress: 45000,
      total: 100000,
      unlocked: false
    }
  ];

  const xpProgress = (userStats.xp / userStats.nextLevelXp) * 100;

  return (
    <div className="min-h-screen bg-background pb-20">
      <OneUIAppBar 
        title="Rewards"
        subtitle="Your achievements"
        onBack={onBack}
      />

      <div className="px-4 py-6 space-y-6">
        {/* Level Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary to-primary-dark rounded-[20px] p-6 text-white relative overflow-hidden"
          style={{ boxShadow: 'var(--elevation-3)' }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[14px] opacity-90 mb-1">Current Level</p>
                <p className="text-[40px]">Level {userStats.level}</p>
              </div>
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Trophy className="w-10 h-10" />
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-[13px] opacity-90">
                <span>XP Progress</span>
                <span>{userStats.xp} / {userStats.nextLevelXp}</span>
              </div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${xpProgress}%` }}
                  className="h-full bg-white rounded-full"
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
              <div>
                <p className="text-[24px]">{userStats.totalPoints}</p>
                <p className="text-[12px] opacity-80">Total Points</p>
              </div>
              <div>
                <p className="text-[24px]">{userStats.questsCompleted}</p>
                <p className="text-[12px] opacity-80">Quests Done</p>
              </div>
              <div>
                <p className="text-[24px]">{userStats.dailyStreak}</p>
                <p className="text-[12px] opacity-80">Day Streak 🔥</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Streak Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-orange-500 to-red-500 rounded-[16px] p-5 text-white"
          style={{ boxShadow: 'var(--elevation-2)' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Flame className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <p className="text-[12px] opacity-90">Daily Streak</p>
              <p className="text-[24px]">{userStats.dailyStreak} Days</p>
            </div>
            <div className="text-right">
              <p className="text-[12px] opacity-90">Keep it up!</p>
              <p className="text-[14px]">🔥🔥🔥</p>
            </div>
          </div>
        </motion.div>

        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-[20px] mb-4">Badges</h3>
          <div className="bg-surface-1 rounded-[16px] p-5" style={{ boxShadow: 'var(--elevation-2)' }}>
            <div className="grid grid-cols-3 gap-6">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <BadgeIcon 
                    type={badge.type}
                    size="md"
                    unlocked={badge.unlocked}
                    label={badge.label}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-[20px] mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-surface-1 rounded-[16px] p-4"
                style={{ 
                  boxShadow: 'var(--elevation-1)',
                  opacity: achievement.unlocked ? 1 : 0.7
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[12px] bg-surface-2 flex items-center justify-center text-2xl flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-[16px] mb-0.5">{achievement.title}</h4>
                        <p className="text-[13px] text-secondary">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && (
                        <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <Progress 
                        value={(achievement.progress / achievement.total) * 100}
                        className="h-2"
                      />
                      <p className="text-[11px] text-tertiary">
                        {achievement.progress.toLocaleString()} / {achievement.total.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Weekly Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-[16px] p-5 text-white"
          style={{ boxShadow: 'var(--elevation-2)' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-6 h-6" />
            <div>
              <p className="text-[12px] opacity-90">Weekly Challenge</p>
              <p className="text-[18px]">Complete 15 Quests</p>
            </div>
          </div>
          <Progress value={60} className="h-2 mb-2" />
          <p className="text-[12px] opacity-90">9/15 completed · Reward: 50 XP</p>
        </motion.div>
      </div>
    </div>
  );
}
