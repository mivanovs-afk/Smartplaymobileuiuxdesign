import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OneUIAppBar } from '../components/OneUIAppBar';
import { PhotoUpload } from '../components/PhotoUpload';
import { MapPin, Lightbulb, CheckCircle2, Navigation } from 'lucide-react';
import { allQuests, questCategories } from '../data/quests';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';

interface QuestDetailScreenProps {
  questId: string;
  onBack: () => void;
  onComplete: () => void;
}

export function QuestDetailScreen({ questId, onBack, onComplete }: QuestDetailScreenProps) {
  const quest = allQuests.find(q => q.id === questId);
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  if (!quest) return null;

  const category = questCategories[quest.category];

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  const openInMaps = () => {
    if (quest.coordinates) {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${quest.coordinates.lat},${quest.coordinates.lng}`,
        '_blank'
      );
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <OneUIAppBar 
        title={quest.title}
        subtitle={category.nameLatvian}
        onBack={onBack}
      />

      <div className="px-4 py-6 space-y-6">
        {/* Quest Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-surface-1 to-surface-2 rounded-[20px] p-6 relative overflow-hidden"
          style={{ boxShadow: 'var(--elevation-3)' }}
        >
          <div 
            className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
            style={{ backgroundColor: category.color, transform: 'translate(40%, -40%)' }}
          />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-[12px] flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${category.color}20` }}
              >
                {category.icon}
              </div>
              <div>
                <div 
                  className="text-[12px] px-2 py-0.5 rounded-full inline-block mb-1"
                  style={{ 
                    backgroundColor: `${category.color}15`,
                    color: category.color
                  }}
                >
                  {category.name}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px] text-secondary">
                    Difficulty: {quest.difficulty}/5
                  </span>
                  <span className="text-[14px] text-secondary">·</span>
                  <span className="text-[14px]" style={{ color: category.color }}>
                    {quest.points} points
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-[22px] mb-3">{quest.title}</h3>
            <p className="text-[15px] text-secondary leading-relaxed">
              {quest.description}
            </p>
          </div>
        </motion.div>

        {/* Coordinates Card */}
        {quest.coordinates && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface-1 rounded-[16px] p-4"
            style={{ boxShadow: 'var(--elevation-2)' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[12px] text-secondary">Location</p>
                  <p className="text-[14px] font-mono">{quest.coordinates.formatted}</p>
                </div>
              </div>
              <Button
                onClick={openInMaps}
                size="sm"
                className="rounded-[10px] bg-primary hover:bg-primary-dark text-white"
              >
                <Navigation className="w-4 h-4 mr-1" />
                Navigate
              </Button>
            </div>
          </motion.div>
        )}

        {/* Map Preview */}
        {quest.coordinates && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-2 rounded-[16px] overflow-hidden"
            style={{ boxShadow: 'var(--elevation-1)' }}
          >
            <div 
              className="aspect-video relative bg-gradient-to-br from-blue-50 to-green-50 cursor-pointer"
              onClick={openInMaps}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-primary" />
                  <p className="text-[13px] text-secondary">Tap to open in Maps</p>
                </div>
              </div>
              {/* Simulated map marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Hint Section */}
        {quest.hint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Sheet>
              <SheetTrigger asChild>
                <button className="w-full bg-warning/10 border-2 border-warning/30 rounded-[16px] p-4 flex items-center justify-between hover:bg-warning/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-warning" />
                    <span className="text-[15px]">Need a hint?</span>
                  </div>
                  <span className="text-[12px] text-secondary">Tap to reveal</span>
                </button>
              </SheetTrigger>
              <SheetContent 
                side="bottom" 
                className="rounded-t-[24px] p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-[18px] font-semibold">
                    <Lightbulb className="w-5 h-5 text-warning" />
                    Hint
                  </SheetTitle>
                </SheetHeader>
              
                <div className="mt-4">
                  <p className="text-[15px] text-secondary leading-relaxed">
                    {quest.hint}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        )}

        {/* Answer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-surface-1 rounded-[16px] p-5 space-y-4"
          style={{ boxShadow: 'var(--elevation-2)' }}
        >
          <h4 className="text-[18px]">Submit Your Answer</h4>

          {quest.answerType === 'photo' && (
            <PhotoUpload onPhotoSelect={(file) => console.log('Photo selected:', file)} />
          )}

          {quest.answerType === 'text' && (
            <div className="space-y-3">
              <Input
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="h-12 rounded-[12px] bg-surface-2 border-0"
              />
            </div>
          )}

          {quest.answerType === 'multiple-choice' && quest.choices && (
            <RadioGroup value={answer} onValueChange={setAnswer}>
              <div className="space-y-2">
                {quest.choices.map((choice, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-[12px] border-2 transition-all ${
                      answer === choice
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-surface-2'
                    }`}
                  >
                    <RadioGroupItem value={choice} id={`choice-${index}`} />
                    <Label 
                      htmlFor={`choice-${index}`}
                      className="flex-1 cursor-pointer text-[15px]"
                    >
                      {choice}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          )}

          <Button
            onClick={handleSubmit}
            disabled={submitted || !answer}
            className="w-full h-12 rounded-[12px] bg-primary hover:bg-primary-dark text-white"
          >
            {submitted ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Quest Completed!
              </span>
            ) : (
              'Submit Answer'
            )}
          </Button>
        </motion.div>

        {/* Success Animation */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ duration: 0.6 }}
                className="text-6xl"
              >
                🎉
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
