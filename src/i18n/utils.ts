import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

const supportedLangs = Object.keys(ui) as Lang[];

// Base URL from Astro config (e.g. '/luxurylondonweddings' or '')
const rawBase = import.meta.env.BASE_URL;
// Normalize: remove trailing slash, empty string for root
const base = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

export function getLangFromUrl(url: URL): Lang {
  // Strip base prefix before checking for lang segments
  let pathname = url.pathname;
  if (base && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length) || '/';
  }
  const segments = pathname.split('/').filter(Boolean);
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
    if (lang === defaultLang) return `${base}${path}`;
    return `${base}/${lang}${path}`;
  };
}

export function getLocalizedUrl(currentLang: Lang, targetLang: Lang, currentPath: string): string {
  // Strip base prefix first
  let strippedPath = currentPath;
  if (base && strippedPath.startsWith(base)) {
    strippedPath = strippedPath.slice(base.length) || '/';
  }

  // Strip any lang prefix to get the base page path
  let basePath = strippedPath;
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

  if (targetLang === defaultLang) return `${base}${basePath}`;
  return `${base}/${targetLang}${basePath === '/' ? '/' : basePath}`;
}
