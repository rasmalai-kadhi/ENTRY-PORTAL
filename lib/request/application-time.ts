const timezone = process.env.APP_TIMEZONE || 'Asia/Kolkata';

function dateParts(value: Date) {
  return Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(value).map(part => [part.type, part.value]));
}

export function applicationDate(value = new Date()) {
  const parts = dateParts(value);
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function shiftDate(date: string, days: number) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}

function offsetAt(value: Date) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' }).formatToParts(value).map(part => [part.type, part.value]));
  return Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), Number(parts.hour), Number(parts.minute), Number(parts.second)) - value.getTime();
}

export function applicationMidnight(date: string) {
  const guess = new Date(`${date}T00:00:00Z`);
  return new Date(guess.getTime() - offsetAt(guess)).toISOString();
}

export function enquiryDateRange(preset: string, fromDate: string, toDate: string) {
  const today = applicationDate();
  if (preset === 'today') return { from: today, to: today };
  if (preset === 'yesterday') return { from: shiftDate(today, -1), to: shiftDate(today, -1) };
  if (preset === 'last7') return { from: shiftDate(today, -6), to: today };
  if (preset === 'last30') return { from: shiftDate(today, -29), to: today };
  if (preset === 'last12months') return { from: shiftDate(today, -365), to: today };
  if (preset === 'custom' && /^\d{4}-\d{2}-\d{2}$/.test(fromDate) && /^\d{4}-\d{2}-\d{2}$/.test(toDate) && fromDate <= toDate) return { from: fromDate, to: toDate };
  return null;
}