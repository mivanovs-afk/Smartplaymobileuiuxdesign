import { motion } from 'motion/react';
import { OneUIAppBar } from '../components/OneUIAppBar';
import { UserProfile } from './WelcomeScreen';
import { User, MapPin, TrendingUp, Settings, Trophy, Target, Flame, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';

interface ProfileScreenProps {
  profile: UserProfile;
  onViewRewards: () => void;
  onViewRankings: () => void;
}

export function ProfileScreen({ profile, onViewRewards, onViewRankings }: ProfileScreenProps) {
  const stats = {
    questsCompleted: 23,
    totalPoints: 347,
    level: 8,
    streak: 12,
    totalSteps: 145230,
    distance: 102.6 // km
  };

  const recentActivity = [
    { date: 'Today', quest: 'Found big tree in Ģintermuiža', points: 15, icon: '🌳' },
    { date: 'Yesterday', quest: 'Manhole cover near Rimi', points: 10, icon: '🔍' },
    { date: '2 days ago', quest: 'History quest completed', points: 20, icon: '🧭' }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <OneUIAppBar title="Profile" />

      <div className="px-4 py-6 space-y-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary to-primary-dark rounded-[20px] p-6 text-white relative overflow-hidden"
          style={{ boxShadow: 'var(--elevation-3)' }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex items-start gap-4">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl border-4 border-white/30">
              👤
            </div>
            <div className="flex-1">
              <h2 className="text-[28px] mb-1">{profile.name}</h2>
              <div className="flex items-center gap-2 text-[14px] opacity-90 mb-3">
                <MapPin className="w-4 h-4" />
                <span>{profile.city}</span>
                <span>·</span>
                <span>{profile.age} years</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[12px]">
                  Level {stats.level}
                </div>
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[12px] capitalize">
                  {profile.activityLevel}
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="bg-surface-1 rounded-[16px] p-4" style={{ boxShadow: 'var(--elevation-1)' }}>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <p className="text-[24px] mb-1">{stats.totalPoints}</p>
            <p className="text-[13px] text-secondary">Total Points</p>
          </div>

          <div className="bg-surface-1 rounded-[16px] p-4" style={{ boxShadow: 'var(--elevation-1)' }}>
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mb-3">
              <Target className="w-5 h-5 text-success" />
            </div>
            <p className="text-[24px] mb-1">{stats.questsCompleted}</p>
            <p className="text-[13px] text-secondary">Quests Done</p>
          </div>

          <div className="bg-surface-1 rounded-[16px] p-4" style={{ boxShadow: 'var(--elevation-1)' }}>
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center mb-3">
              <Flame className="w-5 h-5 text-warning" />
            </div>
            <p className="text-[24px] mb-1">{stats.streak} days</p>
            <p className="text-[13px] text-secondary">Streak</p>
          </div>

          <div className="bg-surface-1 rounded-[16px] p-4" style={{ boxShadow: 'var(--elevation-1)' }}>
            <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-info" />
            </div>
            <p className="text-[24px] mb-1">{stats.distance} km</p>
            <p className="text-[13px] text-secondary">Distance</p>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <button
            onClick={onViewRewards}
            className="w-full bg-surface-1 rounded-[16px] p-4 flex items-center justify-between hover:bg-surface-2 active:scale-98 transition-all"
            style={{ boxShadow: 'var(--elevation-1)' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-warning" />
              </div>
              <div className="text-left">
                <p className="text-[15px]">Rewards & Badges</p>
                <p className="text-[12px] text-secondary">View your achievements</p>
              </div>
            </div>
            <span className="text-2xl">🏆</span>
          </button>

          <button
            onClick={onViewRankings}
            className="w-full bg-surface-1 rounded-[16px] p-4 flex items-center justify-between hover:bg-surface-2 active:scale-98 transition-all"
            style={{ boxShadow: 'var(--elevation-1)' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-[15px]">Rankings</p>
                <p className="text-[12px] text-secondary">See leaderboards</p>
              </div>
            </div>
            <span className="text-2xl">📊</span>
          </button>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-[20px] mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-surface-1 rounded-[16px] p-4"
                style={{ boxShadow: 'var(--elevation-1)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[12px] bg-surface-2 flex items-center justify-center text-2xl">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] mb-1">{activity.quest}</p>
                    <div className="flex items-center gap-2 text-[12px] text-secondary">
                      <Calendar className="w-3 h-3" />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[16px] text-primary">+{activity.points}</p>
                    <p className="text-[11px] text-secondary">points</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Activity Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-surface-1 rounded-[16px] p-5"
          style={{ boxShadow: 'var(--elevation-2)' }}
        >
          <h4 className="text-[18px] mb-4">Activity Summary</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-secondary">Total Steps</span>
              <span className="text-[16px]">{stats.totalSteps.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-secondary">Distance Walked</span>
              <span className="text-[16px]">{stats.distance} km</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-secondary">Quests Completed</span>
              <span className="text-[16px]">{stats.questsCompleted}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-secondary">Current Level</span>
              <span className="text-[16px]">Level {stats.level}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
