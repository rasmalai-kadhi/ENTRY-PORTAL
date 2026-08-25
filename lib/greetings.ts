export type GreetingPeriod = 'morning' | 'afternoon' | 'evening' | 'night';

const phrases: Record<GreetingPeriod, readonly string[]> = {
  morning: ['Good Morning', 'Namaste', 'Bonjour', 'Konnichiwa', 'Nǐ hǎo', 'Hola', 'Ciao'],
  afternoon: ['Good Afternoon', 'Namaste', 'Bonjour', 'Konnichiwa', 'Nǐ hǎo', 'Hola', 'Ciao'],
  evening: ['Good Evening', 'Namaste', 'Bonjour', 'Nǐ hǎo', 'Hola', 'Ciao'],
  night: ['Good Night', 'Namaste', 'Bonjour', 'Nǐ hǎo', 'Hola', 'Ciao'],
};

export function greetingPeriodForHour(hour: number): GreetingPeriod {
  if (hour < 5 || hour >= 19) return 'night';
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  return 'evening';
}

export function greetingForLocalHour(hour: number, random = Math.random()): string {
  const options = phrases[greetingPeriodForHour(hour)];
  return options[Math.min(options.length - 1, Math.floor(random * options.length))];
}
