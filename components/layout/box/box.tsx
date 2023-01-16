import styles from './box.module.css';
import { useContext, useState, WheelEvent } from 'react';
import { PageContext, PageContextI, PagesI } from '../../context/page';
import { scroller, animateScroll } from 'react-scroll';

interface BoxI {
  children: React.ReactNode;
}

export default function Box({ children }: BoxI) {
  const { pages, setCurrentPage } = useContext(
    PageContext
  ) as PageContextI<PagesI>;

  const [lastScrollTimestamp, setLastScrollTimeStamp] = useState<number>(0);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    // Too soon to scroll.
    if (e.timeStamp - lastScrollTimestamp < 1000) {
      return;
    } else {
      const direction = e.deltaY / Math.abs(e.deltaY);
      // Going Down
      if (direction > 0) {
        // Down to the max
        if (pages.current === pages.names.length - 1) {
          return;
        } else {
          const current = pages.current + 1;
          scroller.scrollTo(pages.names[current], {
            smooth: false,
            offset: -40,
          });
          // Set new state
          setCurrentPage((prevState) => ({
            ...prevState,
            current: prevState.current + 1,
          }));
        }
      }
      // Going Up
      if (direction < 0) {
        // Up to the max.
        if (pages.current === 0) {
          return;
        } else {
          const current = pages.current - 1;
          scroller.scrollTo(pages.names[current], {
            smooth: false,
            offset: -40,
          });
          // Set new state
          setCurrentPage((prevState) => ({
            ...prevState,
            current: prevState.current - 1,
          }));
        }
      }
      setLastScrollTimeStamp(e.timeStamp);
    }
  };

  return (
    <div className={styles.box} onWheel={handleWheel} id="box">
      {children}
    </div>
  );
}
