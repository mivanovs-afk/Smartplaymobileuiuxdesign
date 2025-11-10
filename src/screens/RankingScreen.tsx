import { useState } from 'react';
import { motion } from 'motion/react';
import { OneUIAppBar } from '../components/OneUIAppBar';
import { Trophy, Users, School, Medal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface RankingScreenProps {
  onBack: () => void;
}

export function RankingScreen({ onBack }: RankingScreenProps) {
  const [activeTab, setActiveTab] = useState('students');

  // Mock data
  const students = [
    { rank: 1, name: 'Anna Bērziņa', points: 487, avatar: '👩', school: 'Jelgavas 1. ģimnāzija', badge: '🏆' },
    { rank: 2, name: 'Jānis Kalniņš', points: 456, avatar: '👨', school: 'Jelgavas 2. vidusskola', badge: '🥈' },
    { rank: 3, name: 'Laura Liepiņa', points: 423, avatar: '👧', school: 'Jelgavas 1. ģimnāzija', badge: '🥉' },
    { rank: 4, name: 'Mārtiņš Ozols', points: 398, avatar: '👦', school: 'Jelgavas 3. vidusskola' },
    { rank: 5, name: 'Elīna Krūmiņa', points: 375, avatar: '👩', school: 'Jelgavas 1. ģimnāzija' },
    { rank: 6, name: 'Roberts Zīle', points: 352, avatar: '👨', school: 'Jelgavas 2. vidusskola' },
    { rank: 7, name: 'Kristīne Vītola', points: 334, avatar: '👧', school: 'Jelgavas 1. ģimnāzija' },
    { rank: 8, name: 'You', points: 327, avatar: '⭐', school: 'Jelgavas 2. vidusskola', isCurrentUser: true }
  ];

  const teams = [
    { rank: 1, name: 'Explorers Squad', members: 5, points: 2145, color: '#1C74E9', badge: '🏆' },
    { rank: 2, name: 'Quest Masters', members: 5, points: 1987, color: '#4BAF6E', badge: '🥈' },
    { rank: 3, name: 'City Hunters', members: 5, points: 1856, color: '#FFA534', badge: '🥉' },
    { rank: 4, name: 'Adventure Crew', members: 5, points: 1723, color: '#5A6E85' },
    { rank: 5, name: 'Jelgava Heroes', members: 5, points: 1654, color: '#E53935' }
  ];

  const classes = [
    { rank: 1, name: '10.A klase', school: 'Jelgavas 1. ģimnāzija', students: 24, points: 5234, badge: '🏆' },
    { rank: 2, name: '9.B klase', school: 'Jelgavas 2. vidusskola', students: 22, points: 4987, badge: '🥈' },
    { rank: 3, name: '11.A klase', school: 'Jelgavas 1. ģimnāzija', students: 26, points: 4756, badge: '🥉' },
    { rank: 4, name: '10.B klase', school: 'Jelgavas 3. vidusskola', students: 23, points: 4523 }
  ];

  const schools = [
    { rank: 1, name: 'Jelgavas 1. ģimnāzija', students: 456, points: 45678, badge: '🏆' },
    { rank: 2, name: 'Jelgavas 2. vidusskola', students: 389, points: 38945, badge: '🥈' },
    { rank: 3, name: 'Jelgavas 3. vidusskola', students: 342, points: 32156, badge: '🥉' }
  ];

  const tabs = [
    { id: 'students', label: 'Students', icon: Users, data: students },
    { id: 'teams', label: 'Teams', icon: Trophy, data: teams },
    { id: 'classes', label: 'Classes', icon: Medal, data: classes },
    { id: 'schools', label: 'Schools', icon: School, data: schools }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <OneUIAppBar 
        title="Rankings"
        subtitle="Leaderboards"
        onBack={onBack}
      />

      {/* Top 3 Podium */}
      <div className="px-4 py-8 bg-gradient-to-b from-surface-2 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-end justify-center gap-4 mb-6"
        >
          {/* 2nd Place */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-2xl mb-2 border-4 border-white shadow-lg">
              {students[1]?.avatar}
            </div>
            <div className="w-full bg-surface-1 rounded-t-[16px] pt-4 pb-3 px-2 text-center" style={{ boxShadow: 'var(--elevation-2)' }}>
              <p className="text-3xl mb-1">🥈</p>
              <p className="text-[14px] truncate">{students[1]?.name}</p>
              <p className="text-[18px] text-primary">{students[1]?.points}</p>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center flex-1">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-3xl mb-2 border-4 border-white shadow-xl"
            >
              {students[0]?.avatar}
            </motion.div>
            <div className="w-full bg-surface-1 rounded-t-[16px] pt-6 pb-4 px-2 text-center" style={{ boxShadow: 'var(--elevation-3)' }}>
              <p className="text-4xl mb-1">🏆</p>
              <p className="text-[15px] truncate">{students[0]?.name}</p>
              <p className="text-[20px] text-warning">{students[0]?.points}</p>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-2xl mb-2 border-4 border-white shadow-lg">
              {students[2]?.avatar}
            </div>
            <div className="w-full bg-surface-1 rounded-t-[16px] pt-3 pb-2 px-2 text-center" style={{ boxShadow: 'var(--elevation-2)' }}>
              <p className="text-3xl mb-1">🥉</p>
              <p className="text-[14px] truncate">{students[2]?.name}</p>
              <p className="text-[18px] text-primary">{students[2]?.points}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="px-4">
        <TabsList className="w-full grid grid-cols-4 bg-surface-2 rounded-[12px] p-1 mb-4">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <TabsTrigger 
                key={tab.id}
                value={tab.id}
                className="rounded-[10px] data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Icon className="w-4 h-4 mr-1" />
                <span className="text-[13px]">{tab.label}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* Students Tab */}
        <TabsContent value="students" className="space-y-2 mt-0">
          {students.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-surface-1 rounded-[12px] p-4 ${
                student.isCurrentUser ? 'ring-2 ring-primary' : ''
              }`}
              style={{ boxShadow: 'var(--elevation-1)' }}
            >
              <div className="flex items-center gap-3">
                <div className="text-[16px] w-8 text-secondary text-center">
                  {student.badge || `#${student.rank}`}
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-xl">
                  {student.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-[15px]">{student.name}</p>
                  <p className="text-[12px] text-secondary">{student.school}</p>
                </div>
                <div className="text-right">
                  <p className="text-[18px] text-primary">{student.points}</p>
                  <p className="text-[11px] text-secondary">points</p>
                </div>
              </div>
            </motion.div>
          ))}
        </TabsContent>

        {/* Teams Tab */}
        <TabsContent value="teams" className="space-y-2 mt-0">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface-1 rounded-[12px] p-4"
              style={{ 
                boxShadow: 'var(--elevation-1)',
                borderLeft: `4px solid ${team.color}`
              }}
            >
              <div className="flex items-center gap-3">
                <div className="text-[16px] w-8 text-secondary text-center">
                  {team.badge || `#${team.rank}`}
                </div>
                <div className="flex-1">
                  <p className="text-[15px]">{team.name}</p>
                  <p className="text-[12px] text-secondary">{team.members} members</p>
                </div>
                <div className="text-right">
                  <p className="text-[18px] text-primary">{team.points}</p>
                  <p className="text-[11px] text-secondary">points</p>
                </div>
              </div>
            </motion.div>
          ))}
        </TabsContent>

        {/* Classes Tab */}
        <TabsContent value="classes" className="space-y-2 mt-0">
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface-1 rounded-[12px] p-4"
              style={{ boxShadow: 'var(--elevation-1)' }}
            >
              <div className="flex items-center gap-3">
                <div className="text-[16px] w-8 text-secondary text-center">
                  {classItem.badge || `#${classItem.rank}`}
                </div>
                <div className="flex-1">
                  <p className="text-[15px]">{classItem.name}</p>
                  <p className="text-[12px] text-secondary">
                    {classItem.school} · {classItem.students} students
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[18px] text-primary">{classItem.points}</p>
                  <p className="text-[11px] text-secondary">points</p>
                </div>
              </div>
            </motion.div>
          ))}
        </TabsContent>

        {/* Schools Tab */}
        <TabsContent value="schools" className="space-y-2 mt-0">
          {schools.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface-1 rounded-[12px] p-4"
              style={{ boxShadow: 'var(--elevation-1)' }}
            >
              <div className="flex items-center gap-3">
                <div className="text-[16px] w-8 text-secondary text-center">
                  {school.badge || `#${school.rank}`}
                </div>
                <div className="flex-1">
                  <p className="text-[15px]">{school.name}</p>
                  <p className="text-[12px] text-secondary">{school.students} students participating</p>
                </div>
                <div className="text-right">
                  <p className="text-[18px] text-primary">{school.points.toLocaleString()}</p>
                  <p className="text-[11px] text-secondary">points</p>
                </div>
              </div>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
