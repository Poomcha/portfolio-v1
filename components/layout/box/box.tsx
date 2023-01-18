import styles from './box.module.css';
import { TouchEvent, useContext, useState, WheelEvent } from 'react';
import { PageContext, PageContextI, PagesI } from '../../context/page';
import { scroller } from 'react-scroll';
import { MailModalContext, MailModalContextI } from '../../context/mailmodal';

interface BoxI {
  children: React.ReactNode;
}

export default function Box({ children }: BoxI) {
  const { pages } = useContext(PageContext) as PageContextI<PagesI>;
  const { isOpen } = useContext(MailModalContext) as MailModalContextI;

  // Possibly enable page per page scroll.
  const [lastScrollTimestamp, setLastScrollTimeStamp] = useState<number>(0);
  const [touchStartPosY, setTouchStartPosY] = useState(0);
  const [touchStartTimeStamp, setTouchStartTimeStamp] = useState(0);

  const scroll = (to: string) => {
    scroller.scrollTo(to, {
      smooth: true,
      container: 'box',
      offset: -40,
      ignoreCancelEvents: true,
    });
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    // Modal is open.
    if (isOpen) {
      return;
    }
    // Too soon to scroll.
    if (e.timeStamp - lastScrollTimestamp < 700) {
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
          scroll(pages.names[current]);
        }
      }
      // Going Up
      if (direction < 0) {
        // Up to the max.
        if (pages.current === 0) {
          return;
        } else {
          const current = pages.current - 1;
          scroll(pages.names[current]);
        }
      }
      setLastScrollTimeStamp(e.timeStamp);
    }
  };

  const handleMobileScroll = (e: TouchEvent<HTMLDivElement>) => {
    // Modal is open.
    if (isOpen) {
      return;
    }
    const deltaY =
      Math.abs(e.changedTouches[0].pageY) - Math.abs(touchStartPosY);
    // Prevent from doing shit on screen.
    if (e.timeStamp - touchStartTimeStamp > 2000) {
      return;
    }
    // Too soon to scroll.
    if (e.timeStamp - lastScrollTimestamp < 700) {
      return;
    } else {
      // Check if user's really sliding.
      if (Math.abs(deltaY) > 10) {
        // Going Down
        if (deltaY < 0) {
          // Down to the max
          if (pages.current === pages.names.length - 1) {
            return;
          } else {
            const current = pages.current + 1;
            scroll(pages.names[current]);
          }
        }
        // Going Up
        if (deltaY > 0) {
          // Up to the max.
          if (pages.current === 0) {
            return;
          } else {
            const current = pages.current - 1;
            scroll(pages.names[current]);
          }
        }
      } else {
        return;
      }
      setLastScrollTimeStamp(e.timeStamp);
    }
  };

  const getTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartPosY(e.touches[0].pageY);
    setTouchStartTimeStamp(e.timeStamp);
  };

  return (
    <div
      className={styles.box}
      onWheel={handleWheel}
      onTouchStart={getTouchStart}
      onTouchEnd={handleMobileScroll}
      id="box"
    >
      {children}
    </div>
  );
}
