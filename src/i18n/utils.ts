import { defaultLang, showDefaultLang, ui } from "./ui";

export function getLangFromSlug(slug: string) {
    const [lang, _] = slug.split("/");
    if (!lang) return defaultLang;
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
        return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
    };
}
