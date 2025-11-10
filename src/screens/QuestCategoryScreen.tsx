import { useState } from 'react';
import { motion } from 'motion/react';
import { OneUIAppBar } from '../components/OneUIAppBar';
import { QuestCard } from '../components/QuestCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { allQuests, questCategories, QuestCategory } from '../data/quests';
import { Progress } from '../components/ui/progress';

interface QuestCategoryScreenProps {
  onQuestClick: (questId: string) => void;
  onBack: () => void;
}

export function QuestCategoryScreen({ onQuestClick, onBack }: QuestCategoryScreenProps) {
  const [activeCategory, setActiveCategory] = useState<QuestCategory>('manhole');

  const getCategoryQuests = (category: QuestCategory) => {
    return allQuests.filter(q => q.category === category);
  };

  const getCategoryProgress = (category: QuestCategory) => {
    const quests = getCategoryQuests(category);
    const completed = Math.floor(quests.length * 0.4); // Mock: 40% completed
    return { completed, total: quests.length };
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <OneUIAppBar 
        title="Quest Categories"
        subtitle="Choose your adventure"
        onBack={onBack}
      />

      <Tabs 
        defaultValue="manhole" 
        value={activeCategory}
        onValueChange={(value) => setActiveCategory(value as QuestCategory)}
        className="w-full"
      >
        {/* Custom Tab Pills */}
        <div className="sticky top-14 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 px-4 py-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {Object.values(questCategories).map((category) => {
              const progress = getCategoryProgress(category.id as QuestCategory);
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as QuestCategory)}
                  className="flex-shrink-0 px-4 py-2 rounded-[12px] transition-all"
                  style={{
                    backgroundColor: isActive ? category.color : 'var(--surface-2)',
                    color: isActive ? 'white' : 'var(--text-primary)'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{category.icon}</span>
                    <div className="text-left">
                      <p className="text-[13px] whitespace-nowrap">
                        {category.nameLatvian}
                      </p>
                      <p className="text-[11px] opacity-80">
                        {progress.completed}/{progress.total}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        {Object.values(questCategories).map((category) => {
          const quests = getCategoryQuests(category.id as QuestCategory);
          const progress = getCategoryProgress(category.id as QuestCategory);
          const progressPercent = (progress.completed / progress.total) * 100;

          return (
            <TabsContent 
              key={category.id}
              value={category.id}
              className="mt-0 px-4 py-6 space-y-4"
            >
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface-1 rounded-[16px] p-5"
                style={{ 
                  boxShadow: 'var(--elevation-2)',
                  borderLeft: `4px solid ${category.color}`
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="w-14 h-14 rounded-[14px] flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[20px] mb-1">{category.name}</h3>
                    <p className="text-[14px] text-secondary mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-3 text-[13px] text-secondary">
                      <span>{progress.completed} completed</span>
                      <span>·</span>
                      <span>{progress.total - progress.completed} remaining</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-[12px] text-secondary">
                    <span>Progress</span>
                    <span>{Math.round(progressPercent)}%</span>
                  </div>
                  <Progress 
                    value={progressPercent} 
                    className="h-2"
                    style={{ 
                      backgroundColor: 'var(--surface-3)'
                    }}
                  />
                </div>
              </motion.div>

              {/* Map Preview (placeholder) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-surface-2 rounded-[16px] overflow-hidden"
                style={{ boxShadow: 'var(--elevation-1)' }}
              >
                <div className="aspect-video relative bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[14px] text-secondary mb-2">🗺️</p>
                    <p className="text-[13px] text-secondary">Quest locations in Jelgava</p>
                  </div>
                </div>
              </motion.div>

              {/* Rules & Tips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-surface-1 rounded-[16px] p-4"
                style={{ boxShadow: 'var(--elevation-1)' }}
              >
                <h4 className="text-[16px] mb-3">Rules & Tips</h4>
                <div className="space-y-2 text-[14px] text-secondary">
                  <div className="flex gap-2">
                    <span>✓</span>
                    <span>Take clear photos as evidence</span>
                  </div>
                  <div className="flex gap-2">
                    <span>✓</span>
                    <span>Each quest awards points based on difficulty</span>
                  </div>
                  <div className="flex gap-2">
                    <span>✓</span>
                    <span>Team scoring: best 5 results count</span>
                  </div>
                  <div className="flex gap-2">
                    <span>✓</span>
                    <span>Use GPS coordinates to find locations</span>
                  </div>
                </div>
              </motion.div>

              {/* Quest List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-[18px] mb-3">Available Quests</h4>
                <div className="space-y-3">
                  {quests.map((quest, index) => (
                    <motion.div
                      key={quest.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      <QuestCard 
                        quest={quest}
                        onClick={() => onQuestClick(quest.id)}
                        completed={index < progress.completed}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          );
        })}
      </Tabs>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
