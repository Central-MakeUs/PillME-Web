import { ComponentProps, ElementType, useCallback } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { cx } from '@/ui/util';
import graphic from '../assets/graphic.png';
import { DotButton, useDotButton } from './carousel-dot-button';
import * as styles from './embla.css';

export type CarouselProps<T extends ElementType = ElementType> = {
  slides: Array<{
    Component: T;
    props: ComponentProps<T>;
  }>;
  options?: EmblaOptionsType;
};

export const Carousel = (props: CarouselProps) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 2000 }),
  ]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) {
      return;
    }
    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );

  return (
    <section className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map(({ Component, props }, index) => (
            <div className={styles.emblaSlide} key={index}>
              {index === 0 && (
                <img
                  className={styles.backgroundImage}
                  src={graphic}
                  alt="배경"
                />
              )}
              <Component {...props} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.emblaDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cx(
              styles.emblaDot,
              index === selectedIndex && styles.emblaDotSelected,
            )}
          />
        ))}
      </div>
    </section>
  );
};
