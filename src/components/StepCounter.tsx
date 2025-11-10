import { Footprints } from 'lucide-react';
import { motion } from 'motion/react';

interface StepCounterProps {
  steps: number;
  goal?: number;
}

export function StepCounter({ steps, goal = 10000 }: StepCounterProps) {
  const progress = Math.min((steps / goal) * 100, 100);

  return (
    <div className="bg-surface-1 rounded-[16px] p-4" style={{ boxShadow: 'var(--elevation-1)' }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Footprints className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-[14px] text-secondary">Steps Today</p>
            <p className="text-[20px]">{steps.toLocaleString()}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[14px] text-secondary">Goal</p>
          <p className="text-[16px]">{goal.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="relative h-2 bg-surface-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-y-0 left-0 bg-primary rounded-full"
        />
      </div>
      
      <p className="text-[12px] text-tertiary mt-2 text-center">
        {goal - steps > 0 
          ? `${(goal - steps).toLocaleString()} steps to goal`
          : 'Goal achieved! 🎉'
        }
      </p>
    </div>
  );
}
