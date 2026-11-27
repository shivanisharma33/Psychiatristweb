import { useEffect, useRef } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import lottie, { type AnimationItem } from 'lottie-web';
import arrowAnimation from '@/assets/arrow-lottie.json';
import { cn } from '@/utils/cn';

interface ScrollArrowProps {
  className?: string;
  flipX?: boolean;
  style?: React.CSSProperties;
}

export function ScrollArrow({ className, flipX = false, style }: ScrollArrowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animContainerRef = useRef<HTMLDivElement>(null);
  const animItemRef = useRef<AnimationItem | null>(null);

  // Load lottie animation item once into the container
  useEffect(() => {
    if (!animContainerRef.current) return;

    const anim = lottie.loadAnimation({
      container: animContainerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: arrowAnimation,
    });

    animItemRef.current = anim;

    return () => {
      anim.destroy();
      animItemRef.current = null;
    };
  }, []);

  // Sync animation frames to scroll into view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'center 50%'],
  });

  const totalFrames = (arrowAnimation as { op?: number }).op ?? 35;
  const frameProgress = useTransform(scrollYProgress, [0, 1], [0, totalFrames]);

  useMotionValueEvent(frameProgress, 'change', (latest) => {
    if (animItemRef.current) {
      animItemRef.current.goToAndStop(latest, true);
    }
  });

  return (
    <div
      ref={containerRef}
      style={style}
      className={cn(
        'relative pointer-events-none select-none w-[160px] md:w-[200px] h-[166px] md:h-[200px]',
        className
      )}
      aria-hidden="true"
    >
      <div
        ref={animContainerRef}
        className="w-full h-full"
        style={{
          transform: flipX ? 'rotate(63deg) scaleX(-1)' : 'rotate(63deg)',
          transformOrigin: 'center center',
        }}
      />
    </div>
  );
}
