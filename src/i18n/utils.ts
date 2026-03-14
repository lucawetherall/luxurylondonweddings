import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui.en): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key] ?? key;
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string): string {
    if (lang === defaultLang) return path;
    return `/${lang}${path}`;
  };
}

export function getLocalizedUrl(currentLang: Lang, targetLang: Lang, currentPath: string): string {
  // Remove current lang prefix if present
  let basePath = currentPath;
  if (currentLang !== defaultLang) {
    basePath = currentPath.replace(`/${currentLang}`, '') || '/';
  }
  // Add target lang prefix
  if (targetLang === defaultLang) return basePath;
  return `/${targetLang}${basePath === '/' ? '' : basePath}`;
}
