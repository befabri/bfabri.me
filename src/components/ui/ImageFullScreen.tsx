import { useState } from "preact/hooks";
import clsx from "clsx";
import { cloneElement, isValidElement } from "preact";

type ImageProps = {
    children: any;
};

export default function ImageFullScreen({ children }: ImageProps) {
    const [isFullSize, setIsFullSize] = useState(false);

    const handleImageClick = () => {
        setIsFullSize((prevIsFullSize) => {
            if (!prevIsFullSize) {
                document.body.style.overflow = "hidden";
                document.documentElement.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
                document.documentElement.style.overflow = "";
            }
            return !prevIsFullSize;
        });
    };

    const handleCloseButtonClick = (event: MouseEvent) => {
        event.stopPropagation();
        setIsFullSize(false);
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    };

    const modifyChildClasses = (child: any) => {
        if (isValidElement(child)) {
            const { props } = child as { props: { value?: string } };
            if (props.value && typeof props.value === "string") {
                const newValue = props.value.replace(/\bborder-2\b/, "");
                return cloneElement(child, { value: newValue });
            }
        }
        return child;
    };

    const childrenWithModifiedClasses = Array.isArray(children)
        ? children.map(modifyChildClasses)
        : modifyChildClasses(children);

    return (
        <>
            <div onClick={handleImageClick} class="cursor-pointer" role="button">
                {children}
            </div>

            {isFullSize && (
                <>
                    <div
                        onClick={handleImageClick}
                        class={clsx(
                            "fixed top-1/2 left-1/2 w-full h-full z-50 transform transition-all duration-300 cursor-default ease-in-out",
                            "translate-x-[-50%] translate-y-[-50%]",
                            isFullSize ? "scale-100 opacity-100 md:py-8 lg:px-8" : "scale-90 opacity-0"
                        )}
                        role="button">
                        {childrenWithModifiedClasses}
                        <button
                            onClick={handleCloseButtonClick}
                            class="absolute top-3 right-3.5 z-50 p-1.5 bg-black text-zinc-100 hover:bg-neutral-800 dark:hover:bg-neutral-900 rounded-full bg-opacity-70 border-none cursor-pointer"
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
                            isFullSize ? "bg-opacity-100 sm:bg-opacity-90 dark:sm:bg-opacity-70" : "bg-opacity-0"
                        )}
                        onClick={handleImageClick}
                        aria-hidden="true"></div>
                </>
            )}
        </>
    );
}
