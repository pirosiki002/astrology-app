export interface HoroscopeEntry {
  description: string;
  color: string;
  compatibility: string;
  lucky_number: string;
  lucky_time: string;
  mood: string;
}

export interface HoroscopeData {
  [key: string]: {
    [date: string]: HoroscopeEntry;
  };
}
