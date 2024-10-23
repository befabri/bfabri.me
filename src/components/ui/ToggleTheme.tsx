import { getLangFromUrl, useTranslations } from "@i18n/utils";
import { useEffect, useState } from "preact/hooks";

const Theme = {
    LIGHT: "light",
    DARK: "dark",
    UNSET: "",
};

export default function ToggleTheme(props: any) {
    const [theme, setTheme] = useState(Theme.UNSET);
    const currentUrl = new URL(window.location.href);
    const lang = getLangFromUrl(currentUrl);
    const t = useTranslations(lang);

    const getThemeTitle = () => {
        return theme === Theme.DARK ? t("Passer en mode clair") : t("Passer en mode sombre");
    };

    useEffect(() => {
        const htmlElement = document.querySelector("html");
        const storedTheme = htmlElement?.dataset.theme || Theme.LIGHT;
        setTheme(storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("color-scheme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <>
            <button
                onClick={toggleTheme}
                type="button"
                class="text-muted inline-flex size-10 items-center justify-center rounded-lg text-sm hover:bg-gray-200 hover:text-blue_dark dark:hover:text-blue_light focus:outline-none focus:ring-4 focus:ring-white dark:text-zinc-400 dark:hover:bg-gray-700 dark:focus:ring-neutral-900"
                aria-label="Switch between light and dark mode"
                title={getThemeTitle()}>
                {(theme === Theme.LIGHT || theme === Theme.UNSET) && props.sun}
                {theme === Theme.DARK && props.moon}
            </button>
        </>
    );
}
