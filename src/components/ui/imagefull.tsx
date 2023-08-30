import { h, Component } from "preact";

type ImageProps = {
    src: string;
    alt: string;
    class: string;
};

type ImageState = {
    isFullsize: boolean;
};

let scrollPosition = 0;

const lockBodyScroll = () => {
    scrollPosition = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
};

const unlockBodyScroll = () => {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
};

export default class Imagefull extends Component<ImageProps, ImageState> {
    state: ImageState = { isFullsize: false };

    handleImageClick = () => {
        this.setState((prevState) => {
            if (prevState.isFullsize) {
                unlockBodyScroll();
            } else {
                lockBodyScroll();
            }
            return { isFullsize: !prevState.isFullsize };
        });
    };

    render({ src, alt, class: className }: ImageProps, { isFullsize }: ImageState) {
        const fullsizeImageClasses = [
            "fixed",
            "top-1/2",
            "left-1/2",
            "w-4/5",
            "h-4/5",
            "z-50",
            "object-contain",
            "transform",
            "translate-x-[-50%]",
            "translate-y-[-50%]",
            " cursor-zoom-out",
        ].join(" ");

        const overlayClasses = ["fixed", "inset-0", "z-40", "bg-black", "bg-opacity-80"].join(" ");

        const baseClasses = `${className} m-0  fullsize-image ${isFullsize ? "" : "object-cover object-left-top"}`;
        const fullsizeImgClasses = `${baseClasses} ${fullsizeImageClasses}`;
        const overlayClass = `overlay ${isFullsize ? overlayClasses : ""}`;

        return (
            <>
                <img src={src} alt={alt} class={baseClasses} onClick={this.handleImageClick} role="button" />
                {isFullsize && (
                    <>
                        <img
                            src={src}
                            alt={alt}
                            class={fullsizeImgClasses}
                            onClick={this.handleImageClick}
                            role="button"
                        />
                        <div class={overlayClass} onClick={this.handleImageClick} aria-hidden="true"></div>
                    </>
                )}
            </>
        );
    }
}
