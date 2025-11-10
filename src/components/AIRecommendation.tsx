import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface AIRecommendationProps {
  mission: string;
  userName?: string;
}

export function AIRecommendation({ mission, userName = 'Explorer' }: AIRecommendationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-primary to-primary-dark rounded-[20px] p-5 text-white relative overflow-hidden"
      style={{ boxShadow: 'var(--elevation-3)' }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <div>
            <p className="text-[12px] opacity-90">AI Quest of the Day</p>
            <p className="text-[14px] font-medium">Hello, {userName}!</p>
          </div>
        </div>
        
        <p className="text-[16px] leading-relaxed mb-4">
          {mission}
        </p>
        
        <button className="bg-white text-primary px-6 py-2.5 rounded-full hover:bg-white/90 active:scale-95 transition-all">
          Start Quest
        </button>
      </div>
    </motion.div>
  );
}
