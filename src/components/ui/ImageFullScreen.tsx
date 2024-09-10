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

    const overlayClass = clsx({ ["fixed inset-0 z-40 bg-black bg-opacity-100"]: isFullsize });

    return (
        <>
            <div onClick={handleImageClick} role="button">
                {children}
            </div>

            {isFullsize && (
                <>
                    <div
                        onClick={handleImageClick}
                        class="fixed top-1/2 left-1/2 w-full h-full z-50 transform translate-x-[-50%] translate-y-[-50%] cursor-zoom-out flex items-center justify-center"
                        role="button">
                        {children}
                    </div>
                    <div class={overlayClass} onClick={handleImageClick} aria-hidden="true"></div>
                </>
            )}
        </>
    );
}
