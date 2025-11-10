import { motion } from 'motion/react';

export type BadgeType = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

interface BadgeIconProps {
  type: BadgeType;
  size?: 'sm' | 'md' | 'lg';
  unlocked?: boolean;
  label?: string;
}

const badgeColors = {
  bronze: { primary: '#CD7F32', secondary: '#A86324', glow: 'rgba(205, 127, 50, 0.3)' },
  silver: { primary: '#C0C0C0', secondary: '#A8A8A8', glow: 'rgba(192, 192, 192, 0.3)' },
  gold: { primary: '#FFD700', secondary: '#DAA520', glow: 'rgba(255, 215, 0, 0.3)' },
  platinum: { primary: '#E5E4E2', secondary: '#B9B8B5', glow: 'rgba(229, 228, 226, 0.3)' },
  diamond: { primary: '#B9F2FF', secondary: '#4FC3F7', glow: 'rgba(185, 242, 255, 0.4)' }
};

const sizes = {
  sm: 48,
  md: 64,
  lg: 96
};

export function BadgeIcon({ type, size = 'md', unlocked = true, label }: BadgeIconProps) {
  const colors = badgeColors[type];
  const dimension = sizes[size];
  
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        whileHover={unlocked ? { scale: 1.1, rotate: 5 } : {}}
        className="relative"
        style={{ width: dimension, height: dimension }}
      >
        {unlocked && (
          <div 
            className="absolute inset-0 rounded-full blur-xl"
            style={{ backgroundColor: colors.glow }}
          />
        )}
        
        <svg
          viewBox="0 0 100 100"
          className="relative"
          style={{ 
            filter: unlocked ? 'none' : 'grayscale(100%) opacity(40%)'
          }}
        >
          {/* Badge background */}
          <defs>
            <radialGradient id={`badge-${type}`}>
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </radialGradient>
          </defs>
          
          {/* Star shape badge */}
          <path
            d="M50 5 L60 35 L92 35 L67 55 L77 85 L50 65 L23 85 L33 55 L8 35 L40 35 Z"
            fill={`url(#badge-${type})`}
            stroke={unlocked ? colors.secondary : '#ccc'}
            strokeWidth="2"
          />
          
          {/* Center circle */}
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="white"
            opacity="0.9"
          />
          
          {/* Type icon */}
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fontSize="20"
          >
            {type === 'diamond' ? '💎' : 
             type === 'platinum' ? '⭐' :
             type === 'gold' ? '🏆' :
             type === 'silver' ? '🥈' : '🥉'}
          </text>
        </svg>
      </motion.div>
      
      {label && (
        <p className="text-[12px] text-center" style={{ 
          color: unlocked ? 'var(--text-primary)' : 'var(--text-tertiary)' 
        }}>
          {label}
        </p>
      )}
    </div>
  );
}
