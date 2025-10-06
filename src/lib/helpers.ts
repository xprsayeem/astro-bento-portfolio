export function trimText(input: string, maxLength = 100): string {
  const chars = Array.from(input); // avoids splitting surrogate pairs
  if (chars.length <= maxLength) return input;
  return chars.slice(0, Math.max(0, maxLength - 1)).join("") + "…";
}
export function getCurrentTimeInItaly(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Toronto's time
  const offsetItaly = -4; // Toronto is UTC -4
  now.setHours(now.getUTCHours() + offsetItaly);

  return now;
}

// Returns a formatted time string in the given Canadian timezone (default Toronto).
export function formatTimeForCanada(
  date: Date = new Date(),
  timeZone: "America/Toronto" | "America/Vancouver" | "America/Edmonton" | "America/Winnipeg" | "America/Halifax" | "America/St_Johns" = "America/Toronto",
  hour12 = true
): string {
  return new Intl.DateTimeFormat("en-CA", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12,
    timeZone,
    timeZoneName: "short", // gives EST/EDT automatically
  }).format(date);
}

// src/lib/helpers.ts
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
