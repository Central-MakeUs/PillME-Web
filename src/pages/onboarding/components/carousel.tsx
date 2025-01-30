import { useCallback } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { Spacer } from '@/ui/spacer/spacer';
import { cx } from '@/ui/util';
import graphic from '../assets/graphic.png';
import { DotButton, useDotButton } from './carousel-dot-button';
import * as styles from './embla.css';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const Carousel = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

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
          {slides.map((index) => (
            <div className={styles.emblaSlide} key={index}>
              <img
                className={styles.backgroundImage}
                src={graphic}
                alt="배경"
              />
              <div className={styles.emblaSlideNumber}>{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <Spacer size={32} />

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
