import { Map, Compass, User } from 'lucide-react';
import { motion } from 'motion/react';

type NavItem = 'quests' | 'map' | 'profile';

interface BottomNavigationProps {
  activeTab: NavItem;
  onTabChange: (tab: NavItem) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const items = [
    { id: 'quests' as NavItem, label: 'Quests', icon: Compass },
    { id: 'map' as NavItem, label: 'Map', icon: Map },
    { id: 'profile' as NavItem, label: 'Profile', icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-md safe-area-bottom"
         style={{
           backgroundColor: 'var(--surface-1)',
           borderTop: '1px solid var(--border-opaque)'
         }}>
      <div className="flex items-center justify-around h-16 max-w-[480px] mx-auto px-4">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full relative active:scale-95 transition-transform"
            >
              <div className="relative">
                <Icon 
                  className={`w-6 h-6 transition-colors ${
                    isActive ? 'text-primary' : 'text-text-tertiary'
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: 'var(--primary)' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
              <span 
                className={`text-[11px] transition-colors ${
                  isActive ? 'text-primary font-medium' : 'text-text-tertiary'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
