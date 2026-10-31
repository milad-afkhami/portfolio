"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

type ImageGalleryProps = { images: Array<string>; title: string };

export default function ImageGallery({ images, title }: ImageGalleryProps): JSX.Element {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (selected !== null && !dialog.current?.open) dialog.current?.showModal();
    if (selected === null && dialog.current?.open) dialog.current.close();
  }, [selected]);
  useEffect(() => {
    const modal = dialog.current;
    const outside = (event: MouseEvent) => {
      if (!modal?.open || event.target !== modal) return;
      const r = modal.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)
        modal.close();
    };
    const keys = (event: KeyboardEvent) => {
      if (!modal?.open) return;
      if (event.key === "ArrowLeft") setSelected((value) => Math.max(0, (value ?? 0) - 1));
      if (event.key === "ArrowRight") setSelected((value) => Math.min(images.length - 1, (value ?? 0) + 1));
    };
    modal?.addEventListener("click", outside);
    window.addEventListener("keydown", keys);
    return () => {
      modal?.removeEventListener("click", outside);
      window.removeEventListener("keydown", keys);
    };
  }, [images.length]);
  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);
  const close = () => {
    dialog.current?.close();
    setSelected(null);
    opener.current?.focus();
  };
  return (
    <div>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className="gallery-thumb"
            onClick={(event) => {
              opener.current = event.currentTarget;
              setSelected(index);
            }}
            aria-label={`View ${title} screenshot ${index + 1}`}
          >
            <Image src={src} alt={`${title} screenshot ${index + 1}`} fill sizes="(max-width:640px) 90vw,45vw" />
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label={`${title} image gallery`}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => {
          if (!dialog.current?.open) {
            setSelected(null);
            opener.current?.focus();
          }
        }}
      >
        {selected !== null && (
          <Image
            src={images[selected] ?? ""}
            alt={`${title} screenshot ${selected + 1}`}
            fill
            sizes="94vw"
            loading="eager"
          />
        )}
        <div className="gallery-controls">
          <p className="gallery-count" aria-live="polite">
            {selected === null ? 0 : selected + 1} / {images.length}
          </p>
          <button type="button" className="gallery-close" onClick={close} aria-label="Close gallery">
            <FaTimes aria-hidden="true" />
          </button>
          <button
            type="button"
            className="gallery-prev"
            disabled={selected === 0}
            onClick={() => {
              setSelected((value) => Math.max(0, (value ?? 0) - 1));
            }}
            aria-label="Previous image"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="gallery-next"
            disabled={selected === images.length - 1}
            onClick={() => {
              setSelected((value) => Math.min(images.length - 1, (value ?? 0) + 1));
            }}
            aria-label="Next image"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </dialog>
    </div>
  );
}
