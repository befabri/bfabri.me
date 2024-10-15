import { useState } from "preact/hooks";
import clsx from "clsx";

type ImageProps = {
    children: any;
};

export default function ImageFullScreen({ children }: ImageProps) {
    const [isFullsize, setIsFullsize] = useState(false);

    const handleImageClick = () => {
        setIsFullsize((prevIsFullsize) => {
            document.body.style.overflow = prevIsFullsize ? "" : "hidden";
            return !prevIsFullsize;
        });
    };

    const handleCloseButtonClick = (event: MouseEvent) => {
        event.stopPropagation(); // Prevent click from bubbling up
        setIsFullsize(false);
        document.body.style.overflow = ""; // Reset the overflow
    };

    return (
        <>
            <div onClick={handleImageClick} class="cursor-pointer" role="button">
                {children}
            </div>

            {isFullsize && (
                <>
                    <div
                        onClick={handleImageClick}
                        class={clsx(
                            "fixed top-1/2 left-1/2 w-full h-full z-50 transform transition-all duration-300 cursor-default ease-in-out",
                            "translate-x-[-50%] translate-y-[-50%]",
                            isFullsize ? "scale-100 opacity-100 md:py-8 lg:px-8" : "scale-90 opacity-0"
                        )}
                        role="button">
                        {children}
                        <button
                            onClick={handleCloseButtonClick}
                            class="absolute top-3 left-3.5 z-50 p-1.5 bg-black text-zinc-100 hover:bg-neutral-800 dark:hover:bg-neutral-900 rounded-full bg-opacity-70 border-none cursor-pointer"
                            aria-label="Close full screen">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.2em"
                                height="1.2em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M18 6L6 18M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        class={clsx(
                            "fixed inset-0 z-40 bg-black dark:bg-black transition-opacity duration-300 cursor-default ease-in-out",
                            isFullsize ? "bg-opacity-100 sm:bg-opacity-90 dark:sm:bg-opacity-70" : "bg-opacity-0"
                        )}
                        onClick={handleImageClick}
                        aria-hidden="true"></div>
                </>
            )}
        </>
    );
}
