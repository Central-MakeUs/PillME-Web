import { ComponentProps, ElementType } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { cx } from '@/ui/util';
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
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map(({ Component, props }, index) => (
            <div className={styles.emblaSlide} key={index}>
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
