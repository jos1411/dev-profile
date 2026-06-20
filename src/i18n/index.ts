import es from './es.json';
import en from './en.json';

const dictionaries = { es, en } as const;

export type Dictionary = typeof es;
export type Locale = keyof typeof dictionaries;

/**
 * Returns the translation dictionary for the given locale.
 * Falls back to Spanish if the locale is not found.
 */
export function getTranslations(locale: string): Dictionary {
  if (locale in dictionaries) {
    return dictionaries[locale as Locale];
  }
  return dictionaries.es;
}
