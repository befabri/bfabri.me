import { getLangFromUrl, useTranslations } from "@i18n/utils";
import { useEffect, useState } from "preact/hooks";

const Theme = {
    LIGHT: "light",
    DARK: "dark",
    UNSET: "",
};

export default function ToggleTheme({}) {
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
                {(theme === Theme.LIGHT || theme === Theme.UNSET) && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                        <g fill="none">
                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                            <path
                                fill="currentColor"
                                d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094l-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-8 3a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083l.707.707a1 1 0 0 1-1.32 1.497l-.094-.083l-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
                            />
                        </g>
                    </svg>
                )}

                {theme === Theme.DARK && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9"
                        />
                    </svg>
                )}
            </button>
        </>
    );
}
