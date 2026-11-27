import type { CSSProperties } from 'react';
import { ImageIcon } from 'lucide-react';
import type { ImageSlot } from '@/types';
import { photoManifest } from '@/content/image-manifest';
import { cn } from '@/utils/cn';

interface Props {
  slot: ImageSlot;
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
  /** eager + high fetch priority for above-the-fold images */
  priority?: boolean;
  /** Placeholder tone */
  tone?: 'warm' | 'grey' | 'dark';
  /** `sizes` attribute for responsive photos — describe the rendered width of the frame. */
  sizes?: string;
}

const tones = {
  warm: 'bg-[linear-gradient(160deg,#f3dccf_0%,#e7c3b1_100%)] text-[#8a5a46]',
  grey: 'bg-[linear-gradient(160deg,#e9e9e9_0%,#cfcfcf_100%)] text-[#6b6b6b]',
  dark: 'bg-[linear-gradient(160deg,#4a3b36_0%,#2a211e_100%)] text-[#d8c7bf]',
};

const srcset = (name: string, widths: number[], ext: string) =>
  widths.map((w) => `/images/photos/${name}-${w}.${ext} ${w}w`).join(', ');

/**
 * Renders, in order of preference:
 *  1. a responsive <picture> (AVIF/WebP/JPEG) when `slot.src` names a photo in the
 *     generated manifest (see scripts/optimize-images.mjs),
 *  2. a plain <img> for any other path (e.g. SVG illustrations),
 *  3. a labelled placeholder of the same box size when `slot.src` is empty.
 * The frame is always sized by the parent, so swapping assets never shifts layout.
 */
export function SmartImage({ slot, className, imgClassName, style, priority, tone = 'warm', sizes = '100vw' }: Props) {
  const imgStyle: CSSProperties = { objectPosition: slot.position ?? 'center', ...style };
  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : undefined;
  const photo = slot.src ? photoManifest[slot.src] : undefined;

  if (photo) {
    const largest = photo.widths[photo.widths.length - 1];
    const fallbackW = photo.widths.find((w) => w >= 800) ?? largest;
    return (
      <picture className={cn('block h-full w-full', className)}>
        <source type="image/avif" srcSet={srcset(slot.src, photo.widths, 'avif')} sizes={sizes} />
        <source type="image/webp" srcSet={srcset(slot.src, photo.widths, 'webp')} sizes={sizes} />
        <img
          src={`/images/photos/${slot.src}-${fallbackW}.jpg`}
          srcSet={srcset(slot.src, photo.widths, 'jpg')}
          sizes={sizes}
          alt={slot.alt}
          width={photo.width}
          height={photo.height}
          loading={loading}
          decoding="async"
          fetchPriority={fetchPriority}
          className={cn('block h-full w-full object-cover', imgClassName)}
          style={imgStyle}
        />
      </picture>
    );
  }

  // Paths (contain "/") render directly; bare photo names not yet processed fall through to the placeholder.
  if (slot.src && slot.src.includes('/')) {
    return (
      <img
        src={slot.src}
        alt={slot.alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={cn('block h-full w-full object-cover', className, imgClassName)}
        style={imgStyle}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={slot.alt || 'Image placeholder'}
      title={`Placeholder: ${slot.hint}`}
      className={cn('flex h-full w-full flex-col items-center justify-center gap-1 overflow-hidden p-2 text-center', tones[tone], className)}
      style={style}
    >
      <ImageIcon aria-hidden className="size-6 opacity-60" strokeWidth={1.5} />
      <span className="max-w-[90%] text-[11px] leading-tight opacity-80">{slot.hint}</span>
    </div>
  );
}
