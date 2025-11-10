import { ArrowLeft, MoreVertical } from 'lucide-react';

interface OneUIAppBarProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  actions?: React.ReactNode;
  transparent?: boolean;
}

export function OneUIAppBar({ 
  title, 
  subtitle, 
  onBack, 
  actions,
  transparent = false 
}: OneUIAppBarProps) {
  return (
    <div 
      className={`sticky top-0 z-50 ${transparent ? 'bg-transparent' : 'bg-background'} border-b border-border/50`}
      style={{ backdropFilter: transparent ? 'blur(12px)' : 'none' }}
    >
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-3 flex-1">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 -ml-2 rounded-full hover:bg-secondary active:scale-95 transition-all"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <div className="flex-1">
            {title && (
              <h3 className="text-[17px] font-semibold leading-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-[13px] text-secondary leading-tight">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        
        {actions || (
          <button className="p-2 -mr-2 rounded-full hover:bg-secondary active:scale-95 transition-all">
            <MoreVertical className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
