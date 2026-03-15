import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

const supportedLangs = Object.keys(ui) as Lang[];

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  for (const segment of segments) {
    if (supportedLangs.includes(segment as Lang)) {
      return segment as Lang;
    }
  }
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
  // Strip any lang prefix to get the base page path
  let basePath = currentPath;
  for (const lang of supportedLangs) {
    if (lang === defaultLang) continue;
    const prefix = `/${lang}/`;
    const prefixBare = `/${lang}`;
    if (basePath.startsWith(prefix)) {
      basePath = basePath.slice(prefixBare.length) || '/';
      break;
    } else if (basePath === prefixBare) {
      basePath = '/';
      break;
    }
  }

  if (targetLang === defaultLang) return basePath;
  return `/${targetLang}${basePath === '/' ? '/' : basePath}`;
}
