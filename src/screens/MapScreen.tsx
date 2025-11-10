import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { OneUIAppBar } from '../components/OneUIAppBar';
import { MapPin, Navigation, Crosshair, Camera } from 'lucide-react';
import { allQuests, questCategories } from '../data/quests';
import { Button } from '../components/ui/button';

interface MapScreenProps {
  onQuestClick: (questId: string) => void;
}

export function MapScreen({ onQuestClick }: MapScreenProps) {
  const [userLocation, setUserLocation] = useState({ lat: 56.6509, lng: 23.7242 }); // Jelgava center
  const [steps, setSteps] = useState(4523);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    // Simulate step counting
    const interval = setInterval(() => {
      setSteps(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const questsWithCoordinates = allQuests.filter(q => q.coordinates);
  const filteredQuests = selectedCategory 
    ? questsWithCoordinates.filter(q => q.category === selectedCategory)
    : questsWithCoordinates;

  return (
    <div className="min-h-screen bg-background pb-20">
      <OneUIAppBar 
        title="Quest Map"
        subtitle="Jelgava"
      />

      {/* Map Container */}
      <div className="relative h-[calc(100vh-200px)]">
        {/* Simulated Map Background */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=23.686%2C56.622%2C23.76%2C56.666&layer=mapnik&marker=56.65%2C23.72"
            className="w-full h-full"
            style={{ border: 0, pointerEvents: 'none' }} 
          />
          {/* Grid pattern to simulate map */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
          
          {/* Quest Markers */}
          {filteredQuests.map((quest, index) => {
            const category = questCategories[quest.category];
            // Simulate marker positions
            const top = 20 + (index * 15) % 60;
            const left = 15 + (index * 25) % 70;
            
            return (
              <motion.button
                key={quest.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onQuestClick(quest.id)}
                className="absolute group"
                style={{ 
                  top: `${top}%`, 
                  left: `${left}%`,
                  transform: 'translate(-50%, -100%)'
                }}
              >
                {/* Marker Pin */}
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center border-3 border-white shadow-lg"
                    style={{ backgroundColor: category.color }}
                  >
                    <span className="text-lg">{category.icon}</span>
                  </motion.div>
                  
                  {/* Pin tail */}
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: `8px solid ${category.color}`
                    }}
                  />

                  {/* Quest Info Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white rounded-[12px] p-3 shadow-xl whitespace-nowrap" style={{ boxShadow: 'var(--elevation-4)' }}>
                      <p className="text-[13px] mb-1">{quest.title}</p>
                      <p className="text-[11px] text-secondary">{quest.points} points</p>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}

          {/* User Location Marker */}
          <div 
            className="absolute"
            style={{ 
              top: '50%', 
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-4 h-4 rounded-full bg-primary border-3 border-white shadow-lg"
            />
            <motion.div
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-primary"
            />
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 space-y-3">
          <Button
            size="icon"
            className="w-12 h-12 rounded-full bg-surface-1 hover:bg-surface-2 text-primary shadow-lg"
          >
            <Crosshair className="w-5 h-5" />
          </Button>
        </div>

        {/* Category Filter Pills */}
        <div className="absolute top-4 left-4 flex gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full shadow-lg transition-all ${
              !selectedCategory 
                ? 'bg-primary text-white' 
                : 'bg-surface-1 text-primary'
            }`}
          >
            All
          </button>
          {Object.values(questCategories).map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="px-4 py-2 rounded-full shadow-lg transition-all"
              style={{
                backgroundColor: selectedCategory === category.id ? category.color : 'var(--surface-1)',
                color: selectedCategory === category.id ? 'white' : 'var(--text-primary)'
              }}
            >
              <span className="mr-1">{category.icon}</span>
              <span className="text-[13px]">{questCategories[category.id].nameLatvian.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Bottom Stats Card */}
        <div className="absolute bottom-4 left-4 right-4">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="bg-surface-1 rounded-[20px] p-4 shadow-xl backdrop-blur-sm"
            style={{ boxShadow: 'var(--elevation-4)' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[12px] text-secondary">Steps Today</p>
                  <p className="text-[18px]">{steps.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-[12px] text-secondary">Nearby Quests</p>
                <p className="text-[18px]">{filteredQuests.length}</p>
              </div>

              <Button
                size="icon"
                className="w-12 h-12 rounded-full bg-primary hover:bg-primary-dark text-white"
              >
                <Camera className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Legend */}
      <div className="px-4 py-4 bg-surface-2">
        <p className="text-[13px] text-secondary mb-3">Quest Categories</p>
        <div className="flex flex-wrap gap-3">
          {Object.values(questCategories).map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <span className="text-[12px]">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
