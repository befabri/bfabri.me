import { frLocales } from "./locales/fr";
import { enLocales } from "./locales/en";

export const languages = {
    fr: "Français",
    en: "English",
};

export const defaultLang = "fr";

export const showDefaultLang = false;

export const ui = {
    fr: frLocales,
    en: enLocales,
} as const;
