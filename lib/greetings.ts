export type GreetingPeriod = 'morning' | 'afternoon' | 'evening' | 'night';

const phrases: Record<GreetingPeriod, readonly string[]> = {
  morning: [
    "Good Morning",
    "Namaste",
    "Bonjour",
    "Konnichiwa",
    "Nǐ hǎo",
    "Hola",
    "Buongiorno",
  ],

  afternoon: [
    "Good Afternoon",
    "Namaste",
    "Bonjour",
    "Konnichiwa",
    "Nǐ hǎo",
    "Hola",
    "Buon pomeriggio",
  ],

  evening: [
    "Good Evening",
    "Namaste",
    "Bonsoir",
    "Konnichiwa",
    "Nǐ hǎo",
    "Buenas tardes",
    "Buona sera",
  ],

  night: [
    "Good Night",
    "Namaste",
    "Bonne nuit",
    "Buenas noches",
    "Buona notte",
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
