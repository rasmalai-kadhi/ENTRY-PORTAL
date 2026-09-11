export function formatDob(value: string | null | undefined) {
  if (!value) return '';
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (isoMatch) return `${isoMatch[3]}-${isoMatch[2]}-${isoMatch[1]}`;
  return value;
}

export function normalizeDob(value: string) {
  const displayMatch = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value);
  return displayMatch ? `${displayMatch[3]}-${displayMatch[2]}-${displayMatch[1]}` : value;
}