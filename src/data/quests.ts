// Quest data for Jelgava SmartPlay app

export type QuestCategory = 'manhole' | 'trees' | 'history';

export interface Quest {
  id: string;
  category: QuestCategory;
  title: string;
  description: string;
  coordinates?: {
    lat: number;
    lng: number;
    formatted: string;
  };
  difficulty: 1 | 2 | 3 | 4 | 5;
  points: number;
  answerType: 'text' | 'multiple-choice' | 'photo';
  correctAnswer?: string;
  choices?: string[];
  hint?: string;
  imageUrl?: string;
}

export const questCategories = {
  manhole: {
    id: 'manhole',
    name: 'Manhole Cover Hunt',
    nameLatvian: 'Atrodi Jelgavas lūkas vākus',
    color: '#5A6E85',
    icon: '🔍',
    description: 'Find unique manhole covers around Jelgava'
  },
  trees: {
    id: 'trees',
    name: 'Big Tree Locator',
    nameLatvian: 'Dižkoki Jelgavā',
    color: '#4BAF6E',
    icon: '🌳',
    description: 'Discover ancient and remarkable trees'
  },
  history: {
    id: 'history',
    name: 'Orientation + History',
    nameLatvian: 'Brīvību Meklējot',
    color: '#FFA534',
    icon: '🧭',
    description: 'Navigate and learn Jelgava\'s history'
  }
};

// Real Jelgava quest data
export const allQuests: Quest[] = [
  // Manhole Cover Quests
  {
    id: 'manhole-1',
    category: 'manhole',
    title: 'Rimi veikala apkārtne',
    description: 'Atrodiet 5 lūkas vākus Rimi veikala tuvumā un nofotografējiet tos.',
    difficulty: 2,
    points: 15,
    answerType: 'photo',
    hint: 'Skatieties gan uz galvenajām ielām, gan mazākām blakusielām'
  },
  {
    id: 'manhole-2',
    category: 'manhole',
    title: 'Pilsētas centra lūkas',
    description: 'Atrodiet vismaz 3 dažādus lūkas vākus Jelgavas centrā',
    difficulty: 1,
    points: 10,
    answerType: 'photo'
  },
  {
    id: 'manhole-3',
    category: 'manhole',
    title: 'Vecākie lūkas vāki',
    description: 'Meklējiet lūkas vākus ar vecākiem datumiem vai stiliem',
    difficulty: 3,
    points: 20,
    answerType: 'photo',
    hint: 'Vecpilsētā var būt vēsturiski lūkas vāki'
  },

  // Big Trees Quests
  {
    id: 'tree-1',
    category: 'trees',
    title: 'Ģintermuižas parks - ozoli',
    description: 'Atrodiet 3 lielos kokus Ģintermuižas parkā un izmēriet to apkārtmēru',
    difficulty: 2,
    points: 15,
    answerType: 'photo',
    hint: 'Parasti lielākie koki atrodas pie vecajām takām'
  },
  {
    id: 'tree-2',
    category: 'trees',
    title: 'Dižozols pie Sv. Trīsvienības baznīcas',
    description: 'Atrodiet un nofotografējiet iespaidīgo ozolu baznīcas teritorijā',
    coordinates: {
      lat: 56.650278,
      lng: 23.726389,
      formatted: '56°39\'01.0"N 23°43\'35.0"E'
    },
    difficulty: 1,
    points: 10,
    answerType: 'photo'
  },
  {
    id: 'tree-3',
    category: 'trees',
    title: 'Driķu parks - ozolu aleja',
    description: 'Saskaitiet un nofotografējiet vismaz 5 dižkokus Driķu parkā',
    difficulty: 3,
    points: 25,
    answerType: 'photo',
    hint: 'Meklējiet kokus ar plašu vainagu un resnu stumbru'
  },

  // History & Orientation Quests - "Brīvību Meklējot"
  {
    id: 'history-1',
    category: 'history',
    title: 'Smilšakmens plāksne',
    description: 'Atrodiet vietu koordinātēs un atbildiet: Kāda ir smilšakmens plāksnes krāsa?',
    coordinates: {
      lat: 56.894639,
      lng: 23.535250,
      formatted: '56°53\'40.7"N 23°32\'05.9"E'
    },
    difficulty: 2,
    points: 5,
    answerType: 'multiple-choice',
    choices: ['Pelēka', 'Brūna', 'Sarkana', 'Dzeltena'],
    correctAnswer: 'Sarkana'
  },
  {
    id: 'history-2',
    category: 'history',
    title: 'Piemiņas plāksne',
    description: 'Dodieties uz 56°38\'51.9"N 23°43\'27.8"E. Kam ir veltīta piemiņas plāksne?',
    coordinates: {
      lat: 56.647750,
      lng: 23.724389,
      formatted: '56°38\'51.9"N 23°43\'27.8"E'
    },
    difficulty: 3,
    points: 5,
    answerType: 'text',
    hint: 'Izlasiet tekstu uz plāksnes uzmanīgi'
  },
  {
    id: 'history-3',
    category: 'history',
    title: 'Katedrāles tornītis',
    description: 'Koordinātēs 56°38\'56.8"N 23°43\'26.0"E - Cik tornīšu ir uz jumta?',
    coordinates: {
      lat: 56.649111,
      lng: 23.723889,
      formatted: '56°38\'56.8"N 23°43\'26.0"E'
    },
    difficulty: 2,
    points: 5,
    answerType: 'multiple-choice',
    choices: ['1', '2', '3', '4'],
    correctAnswer: '2'
  },
  {
    id: 'history-4',
    category: 'history',
    title: 'Slavenības dzimtā vieta',
    description: 'Dodieties uz 56°38\'45.3"N 23°43\'15.0"E. Kuras slavenības dzimtā māja šeit atradusies?',
    coordinates: {
      lat: 56.645917,
      lng: 23.720833,
      formatted: '56°38\'45.3"N 23°43\'15.0"E'
    },
    difficulty: 4,
    points: 5,
    answerType: 'text',
    correctAnswer: 'Rainis',
    hint: 'Viens no latviešu izcilākajiem dzejniekiem'
  },
  {
    id: 'history-5',
    category: 'history',
    title: 'Vecākā celtne',
    description: 'Koordinātēs 56°38\'51.4"N 23°43\'10.0"E - Kura ir vecākā celtne?',
    coordinates: {
      lat: 56.647611,
      lng: 23.719444,
      formatted: '56°38\'51.4"N 23°43\'10.0"E'
    },
    difficulty: 3,
    points: 5,
    answerType: 'multiple-choice',
    choices: ['Baznīca', 'Pils', 'Rātsnams', 'Skola'],
    correctAnswer: 'Baznīca'
  },
  {
    id: 'history-6',
    category: 'history',
    title: 'Pils fasāde',
    description: 'Dodieties uz 56°39\'01.7"N 23°43\'27.2"E. Cik logu ir uz pils fasādes?',
    coordinates: {
      lat: 56.650472,
      lng: 23.724222,
      formatted: '56°39\'01.7"N 23°43\'27.2"E'
    },
    difficulty: 2,
    points: 5,
    answerType: 'text',
    hint: 'Skaitiet tikai galveno fasādi'
  },
  {
    id: 'history-7',
    category: 'history',
    title: 'Parks ar ezeriņu',
    description: 'Koordinātēs 56°38\'18.2"N 23°42\'44.6"E - Kā sauc šo parku?',
    coordinates: {
      lat: 56.638389,
      lng: 23.712389,
      formatted: '56°38\'18.2"N 23°42\'44.6"E'
    },
    difficulty: 2,
    points: 5,
    answerType: 'text',
    correctAnswer: 'Pasta sala'
  },
  {
    id: 'history-8',
    category: 'history',
    title: 'Tilta nosaukums',
    description: 'Dodieties uz 56°38\'44.0"N 23°44\'18.9"E. Kā sauc šo tiltu?',
    coordinates: {
      lat: 56.645556,
      lng: 23.738583,
      formatted: '56°38\'44.0"N 23°44\'18.9"E'
    },
    difficulty: 3,
    points: 5,
    answerType: 'text',
    hint: 'Meklējiet norādes zīmes vai informācijas stendus'
  }
];

// AI-generated daily missions based on weather and user profile
export const generateDailyMission = (weather: string, activityLevel: string) => {
  const missions = {
    sunny: [
      'Find 5 manhole covers around Rimi store',
      'Discover 3 big trees in Ģintermuiža park',
      'Complete the orientation game - navigate to coordinate 56°38\'51.9"N'
    ],
    rainy: [
      'Indoor quest: Learn about Jelgava Palace history',
      'Find covered manhole covers near shopping centers',
      'Virtual tour: Identify 5 historical buildings from photos'
    ],
    cloudy: [
      'Explore Pasta sala park and find the big oak',
      'Hunt for unique manhole covers in old town',
      'Navigate to 3 historical landmarks'
    ]
  };

  const weatherKey = weather.toLowerCase().includes('rain') ? 'rainy' : 
                     weather.toLowerCase().includes('sun') ? 'sunny' : 'cloudy';
  
  const available = missions[weatherKey];
  return available[Math.floor(Math.random() * available.length)];
};
