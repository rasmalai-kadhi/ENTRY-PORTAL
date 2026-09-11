export type GreetingPeriod = 'morning' | 'afternoon' | 'evening' | 'night';

const phrases: Record<GreetingPeriod, readonly string[]> = {
  morning: [
    "Good Morning",
    "Namaste",
    "Bonjour",
    "Konnichiwa",
    "Nǐ hǎo",
    "Hola",
  ],

  afternoon: [
    "Good Afternoon",
    "Namaste",
    "Bonjour",
    "Konnichiwa",
    "Nǐ hǎo",
    "Hola",
  ],

  evening: [
    "Good Evening",
    "Namaste",
    "Bonjour",
    "Konnichiwa",
    "Nǐ hǎo",
    "Hola",
  ],

  night: [
    "Good Night",
    "Namaste",
    "Bonne nuit",
  ],
};

export function greetingPeriodForHour(hour: number): GreetingPeriod {
  if (hour < 5 || hour >= 19) return 'night';
  if (hour < 12) return 'morning';
  if (hour < 16) return 'afternoon';
  return 'evening';
}

export function greetingForLocalHour(hour: number, random = Math.random()): string {
  const options = phrases[greetingPeriodForHour(hour)];
  return options[Math.min(options.length - 1, Math.floor(random * options.length))];
}
