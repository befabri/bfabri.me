import { useState } from "preact/hooks";

interface Props {
    text: string;
}

export default function CopyClipboard({ text }: Props) {
    const [isCopied, setIsCopied] = useState(false);

    const copyText = () => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 1250);
            })
            .catch((error) => {
                console.error("Could not copy text: ", error);
            });
    };

    return (
        <>
            <button onClick={copyText} aria-label="Copy to clipboard">
                <div class="flex hover:text-sky-700 dark:hover:text-sky-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M5 22q-.825 0-1.413-.588T3 20V6h2v14h11v2H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"
                        />
                    </svg>
                    {isCopied && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 32 32"
                            class="checkmark animate-appear">
                            <path
                                fill="currentColor"
                                d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"
                            />
                        </svg>
                    )}
                </div>
            </button>
        </>
    );
}
