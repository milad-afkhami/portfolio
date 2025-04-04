"use client";

import Image from "next/image";
import type { RefObject } from "react";
import type { Nullable } from "ts-wiz";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

type ImageGalleryProps = {
  images: Array<string>;
  title: string;
};

type ImageGalleryItem = Nullable<number>;

function useImageGallery(
  images: Array<string>,
): [ImageGalleryItem, (image: ImageGalleryItem) => void, RefObject<HTMLDialogElement>] {
  const [selectedImage, setSelectedImage] = useState<ImageGalleryItem>(null);

  const imageGalleryRef = useRef<HTMLDialogElement>(null);

  useOnClickOutside(imageGalleryRef, () => {
    setSelectedImage(null);
  });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft" && selectedImage !== 0) {
        setSelectedImage((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1));
      } else if (e.key === "ArrowRight" && selectedImage !== images.length - 1) {
        setSelectedImage((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1));
      }
    },
    [selectedImage, images.length],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return [selectedImage, setSelectedImage, imageGalleryRef];
}

function ActionButton({
  children,
  onClick,
  label,
  className,
}: {
  children: React.ReactNode;
  onClick: VoidFunction;
  label: string;
  className?: string;
}): JSX.Element {
  return (
    <button
      className={`absolute rounded-full bg-base-content/60 p-2 text-white transition-all hover:scale-110 hover:bg-base-content/80 ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default function ImageGallery({ images, title }: ImageGalleryProps): JSX.Element {
  const [selectedImage, setSelectedImage, imageGalleryRef] = useImageGallery(images);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
            onClick={() => {
              setSelectedImage(index);
            }}
            aria-label={`View ${title} screenshot ${index + 1}`}
          >
            <Image src={image} alt={`${title} screenshot ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex size-full items-center justify-center bg-black/80 backdrop-blur-sm">
          <dialog
            open
            className="relative h-[90vh] w-[90vw] rounded-lg bg-transparent"
            aria-label="Image gallery"
            ref={imageGalleryRef}
          >
            <Image
              src={images[selectedImage]}
              alt={`${title} screenshot ${selectedImage + 1}`}
              fill
              objectFit="contain"
              className="size-full rounded-lg"
            />

            <ActionButton
              onClick={() => {
                setSelectedImage(null);
              }}
              label="Close gallery"
              className="right-4 top-4"
            >
              <FaTimes className="size-5" />
            </ActionButton>

            {selectedImage !== 0 && (
              <ActionButton
                onClick={() => {
                  setSelectedImage(selectedImage - 1);
                }}
                label="Previous image"
                className="left-4 top-1/2 -translate-y-1/2"
              >
                <FaChevronLeft className="size-5" />
              </ActionButton>
            )}

            {selectedImage !== images.length - 1 && (
              <ActionButton
                onClick={() => {
                  setSelectedImage(selectedImage + 1);
                }}
                label="Next image"
                className="right-4 top-1/2 -translate-y-1/2"
              >
                <FaChevronRight className="size-5" />
              </ActionButton>
            )}

            <div className="absolute bottom-4 left-4 rounded-full bg-base-content/60 px-3 py-1 text-sm text-white">
              {selectedImage + 1} / {images.length}
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}
