import { useState } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

interface WelcomeScreenProps {
  onComplete: (profile: UserProfile) => void;
}

export interface UserProfile {
  name: string;
  age: number;
  activityLevel: string;
  city: string;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    age: 15,
    activityLevel: 'moderate',
    city: 'Jelgava'
  });

  const steps = [
    {
      title: 'Welcome to SmartPlay',
      subtitle: 'AI Turns Movement Into a Game',
      component: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <Sparkles className="w-16 h-16 text-white" />
          </div>
          <div>
            <h1 className="text-[32px] mb-2">SmartPlay</h1>
            <p className="text-[16px] text-secondary">
              Motivate yourself to walk, run, and explore Jelgava through AI-powered quests
            </p>
          </div>
        </motion.div>
      )
    },
    {
      title: "What's your name?",
      subtitle: 'Tell us a bit about yourself',
      component: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <Input
            placeholder="Enter your name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="h-14 rounded-[12px] bg-surface-2 border-0 text-[16px]"
            autoFocus
          />
        </motion.div>
      )
    },
    {
      title: 'How old are you?',
      subtitle: 'This helps us personalize your quests',
      component: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <Input
            type="number"
            placeholder="Age"
            value={profile.age}
            onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) || 15 })}
            className="h-14 rounded-[12px] bg-surface-2 border-0 text-[16px]"
            min={10}
            max={100}
          />
        </motion.div>
      )
    },
    {
      title: 'Activity Level',
      subtitle: 'How active are you?',
      component: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-3"
        >
          {['beginner', 'moderate', 'active', 'athlete'].map((level) => (
            <button
              key={level}
              onClick={() => setProfile({ ...profile, activityLevel: level })}
              className={`w-full p-4 rounded-[12px] text-left transition-all ${
                profile.activityLevel === level
                  ? 'bg-primary text-white'
                  : 'bg-surface-2 hover:bg-surface-3'
              }`}
            >
              <p className="capitalize">{level}</p>
              <p className={`text-[13px] ${
                profile.activityLevel === level ? 'text-white/80' : 'text-secondary'
              }`}>
                {level === 'beginner' && 'Just starting out, prefer short walks'}
                {level === 'moderate' && '30-60 minutes of activity daily'}
                {level === 'active' && '1-2 hours of activity daily'}
                {level === 'athlete' && 'High intensity training regularly'}
              </p>
            </button>
          ))}
        </motion.div>
      )
    },
    {
      title: 'Choose Your City',
      subtitle: 'Where will you be exploring?',
      component: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="w-full p-6 rounded-[12px] bg-surface-2 text-center">
            <p className="text-[20px] mb-2">📍 Jelgava</p>
            <p className="text-[14px] text-secondary">
              Explore manhole covers, big trees, and historical landmarks
            </p>
          </div>
        </motion.div>
      )
    }
  ];

  const currentStep = steps[step];
  const canProceed = step === 0 || 
                     (step === 1 && profile.name.trim()) ||
                     (step === 2 && profile.age >= 10) ||
                     step === 3 || step === 4;

  const handleNext = () => {
    if (step === steps.length - 1) {
      onComplete(profile);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress bar */}
      <div className="h-1 bg-surface-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
          className="h-full bg-primary"
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 py-8 max-w-[480px] mx-auto w-full">
        <div className="flex-1">
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <h2 className="text-[28px] mb-2">{currentStep.title}</h2>
            <p className="text-[16px] text-secondary">{currentStep.subtitle}</p>
          </motion.div>

          {currentStep.component}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 pt-6">
          {step > 0 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="px-6 rounded-[12px] h-12"
            >
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="flex-1 rounded-[12px] h-12 bg-primary hover:bg-primary-dark text-white"
          >
            {step === steps.length - 1 ? "Let's Go!" : 'Continue'}
            <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
