import { MapPin, Trophy, ChevronRight } from 'lucide-react';
import { Quest, questCategories } from '../data/quests';
import { motion } from 'motion/react';

interface QuestCardProps {
  quest: Quest;
  onClick?: () => void;
  completed?: boolean;
}

export function QuestCard({ quest, onClick, completed = false }: QuestCardProps) {
  const category = questCategories[quest.category];
  
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="rounded-[18px] p-5 cursor-pointer transition-all bg-surface-1 hover:bg-surface-2"
      style={{
        boxShadow: 'var(--elevation-3)',
        border: `1px solid var(--border)`,
        borderLeft: `5px solid ${category.color}`,
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-10 h-10 rounded-[12px] flex items-center justify-center text-xl"
              style={{ backgroundColor: `${category.color}15` }}
            >
              {category.icon}
            </div>
    
            <span
              className="text-[12px] px-2 py-0.5 rounded-full font-medium"
              style={{
                backgroundColor: `${category.color}20`,
                color: category.color,
              }}
            >
              {category.nameLatvian}
            </span>
          </div>
          <h4 className="text-[17px] font-medium mb-1">
            {quest.title}
          </h4>
          <p className="text-[14px] text-secondary line-clamp-2 mb-3 leading-snug">
            {quest.description}
          </p>
          <div className="flex items-center gap-4 text-[13px] text-tertiary">
            {quest.coordinates && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span className="truncate max-w-[120px]">
                  {quest.coordinates.formatted}
                </span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>{quest.points} pts</span>
            </div>
    
            <div className="flex gap-0.5 items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i < quest.difficulty ? 'bg-primary' : 'bg-surface-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          {completed ? (
            <div className="w-8 h-8 rounded-full bg-success/15 flex items-center justify-center">
              <span className="text-success text-lg">✓</span>
            </div>
          ) : (
            <ChevronRight className="w-5 h-5 text-tertiary" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
