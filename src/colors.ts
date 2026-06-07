// Light Beige Theme Color Palette
export const COLORS = {
  // Backgrounds
  bg: {
    light: '#F5EDE4',
    cream: '#F9F4EF', 
    white: '#FFFFFF',
    card: '#FFF8F3',
  },
  
  // Text
  text: {
    dark: '#1A1A1A',
    medium: '#3D3D3D',
    light: '#6B6B6B',
  },
  
  // Accents - Mauve/Rose
  accent: {
    mauve: '#B47B84',
    rose: '#C98B95',
    coral: '#E89F9C',
    peach: '#F4B5A8',
  },
  
  // Border
  border: {
    light: 'rgba(180, 123, 132, 0.15)',
    medium: 'rgba(180, 123, 132, 0.25)',
    dark: 'rgba(180, 123, 132, 0.4)',
  }
};

// Tailwind class helpers
export const BG_CLASSES = {
  main: 'bg-[#F5EDE4]',
  cream: 'bg-[#F9F4EF]',
  white: 'bg-white',
  card: 'bg-[#FFF8F3]',
};

export const TEXT_CLASSES = {
  dark: 'text-[#1A1A1A]',
  medium: 'text-[#3D3D3D]',
  light: 'text-[#6B6B6B]',
};

export const ACCENT_CLASSES = {
  mauve: 'text-[#B47B84]',
  rose: 'text-[#C98B95]',
  coral: 'text-[#E89F9C]',
  peach: 'text-[#F4B5A8]',
  
  bgMauve: 'bg-[#B47B84]',
  bgRose: 'bg-[#C98B95]',
  bgCoral: 'bg-[#E89F9C]',
  bgPeach: 'bg-[#F4B5A8]',
};

export const BORDER_CLASSES = {
  light: 'border-[#B47B84]/15',
  medium: 'border-[#B47B84]/25',
  dark: 'border-[#B47B84]/40',
};
