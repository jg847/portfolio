export function isPlaceholderValue(value: string) {
  return /^\[[A-Z0-9_ ]+\]$/.test(value.trim());
}

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}