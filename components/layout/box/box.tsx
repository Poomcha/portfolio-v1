import styles from './box.module.css';
import {
  PointerEvent,
  TouchEvent,
  useContext,
  useState,
  WheelEvent,
} from 'react';
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
  const [touchStartPosY, setTouchStartPosY] = useState(0);
  const [touchStartTimeStamp, setTouchStartTimeStamp] = useState(0);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    // Too soon to scroll.
    if (e.timeStamp - lastScrollTimestamp < 500) {
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

  const handleMobileScroll = (e: TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const deltaY =
      Math.abs(e.changedTouches[0].pageY) - Math.abs(touchStartPosY);
    console.log('DeltaY: ', deltaY);
    // Prevent from doing shit on screen.
    if (e.timeStamp - touchStartTimeStamp > 2000) {
      console.log('Stop doing shit!');
      return;
    }
    // Too soon to scroll.
    if (e.timeStamp - lastScrollTimestamp < 500) {
      console.log('Too soon to scroll!');
      return;
    } else {
      console.log('You can scroll now.');
      // Check if user's really sliding.
      if (Math.abs(deltaY) > 10) {
        // Going Down
        if (deltaY < 0) {
          console.log("Okay, let's go down.");
          // Down to the max
          if (pages.current === pages.names.length - 1) {
            console.log('Actually no, you cant go downer.');
            return;
          } else {
            const current = pages.current + 1;
            console.log("I'll meet you to", pages.names[current].trim());
            scroller.scrollTo(`${pages.names[current].trim()}`, {
              // smooth: false,
              // offset: -40,
              // containerId: 'box',
            });
            // Set new state
            setCurrentPage((prevState) => ({
              ...prevState,
              current: prevState.current + 1,
            }));
          }
        }
        // Going Up
        if (deltaY > 0) {
          console.log("Okay, let's go up.");
          // Up to the max.
          if (pages.current === 0) {
            console.log('Actually no, you cant go upper.');
            return;
          } else {
            const current = pages.current - 1;
            console.log("I'll meet you to", pages.names[current].trim());
            scroller.scrollTo(`${pages.names[current].trim()}`, {
              // smooth: false,
              // offset: -40,
              // containerId: 'box',
            });
            // Set new state
            setCurrentPage((prevState) => ({
              ...prevState,
              current: prevState.current - 1,
            }));
          }
        }
      } else {
        console.log('But you have to really want to.');
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
