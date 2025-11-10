import { Cloud, CloudRain, Sun, Wind } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WeatherWidget() {
  const [weather, setWeather] = useState({
    condition: 'Partly Cloudy',
    temp: 18,
    icon: 'cloud'
  });

  useEffect(() => {
    // Simulate weather data (in real app, would fetch from API)
    const conditions = [
      { condition: 'Sunny', temp: 22, icon: 'sun' },
      { condition: 'Partly Cloudy', temp: 18, icon: 'cloud' },
      { condition: 'Rainy', temp: 15, icon: 'rain' },
      { condition: 'Windy', temp: 16, icon: 'wind' }
    ];
    const random = conditions[Math.floor(Math.random() * conditions.length)];
    setWeather(random);
  }, []);

  const getIcon = () => {
    switch (weather.icon) {
      case 'sun': return <Sun className="w-6 h-6 text-warning" />;
      case 'rain': return <CloudRain className="w-6 h-6 text-primary" />;
      case 'wind': return <Wind className="w-6 h-6 text-text-secondary" />;
      default: return <Cloud className="w-6 h-6 text-text-secondary" />;
    }
  };

  return (
    <div className="bg-surface-1 rounded-[16px] p-4 flex items-center gap-4" style={{ boxShadow: 'var(--elevation-1)' }}>
      <div className="w-12 h-12 rounded-full bg-surface-2 flex items-center justify-center">
        {getIcon()}
      </div>
      <div>
        <p className="text-[14px] text-secondary">Jelgava Weather</p>
        <p className="text-[18px]">{weather.temp}°C · {weather.condition}</p>
      </div>
    </div>
  );
}
