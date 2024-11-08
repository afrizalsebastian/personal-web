import _ from 'lodash';
import { Children, useMemo, useRef, useState } from 'react';

function useDragToScroll(initialState) {
  const [isDragging, setIsDragging] = useState(initialState.isDragging);
  const [startX, setStartX] = useState(initialState.startX);
  const [scrollLeft, setScrollLeft] = useState(initialState.scrollLeft);

  const handleChange = (value) => {
    if ('isDragging' in value) setIsDragging(value.isDragging);
    if ('startX' in value) setStartX(value.startX);
    if ('scrollLeft' in value) setScrollLeft(value.scrollLeft);
  };

  return [{ isDragging, startX, scrollLeft }, handleChange];
}

export default function CarouselAlternative({ className, children }) {
  /**
   * Scroll State
   */
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const firstVisibleItemRef = useRef(0); // For endscroll

  /**
   * Drag State
   */
  const [dragState, setDragState] = useDragToScroll({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  /**
   * Navigaiton Button
   */
  const scrollToNextElmnt = (index) => {
    if (index < 20) {
      itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      firstVisibleItemRef.current = index;
    }
  };
  const scrollToPrevElmnt = (index) => {
    if (index >= 0) {
      itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      firstVisibleItemRef.current = index;
    }
  };

  /**
   * Handle Scroll
   */
  const isElementInViewport = (elmnt) => {
    const item = elmnt.getBoundingClientRect();
    const containerView = containerRef.current.getBoundingClientRect();
    return item.left >= containerView.left && item.right <= containerView.right;
  };

  const handleEndScroll = useMemo(
    () =>
      _.debounce(
        () => itemRefs.current[firstVisibleItemRef.current]?.scrollIntoView({ behavior: 'smooth', inline: 'start' }),
        500,
      ),
    [],
  );

  const handleScroll = () => {
    const visibleElements = itemRefs.current.filter((it) => isElementInViewport(it));
    firstVisibleItemRef.current = parseInt(visibleElements[0].id);
    handleEndScroll();
  };

  /**
   * Handle Drag
   */
  const onMouseDown = (event) => {
    event.preventDefault();
    setDragState({ isDragging: true });
    setDragState({ startX: event.pageX - containerRef.current.offsetLeft });
    setDragState({ scrollLeft: containerRef.current.scrollLeft });
  };

  const onMouseLeave = () => {
    setDragState({ isDragging: false });
  };

  const onMouseUp = () => {
    setDragState({ isDragging: false });
  };

  const onMouseMove = (e) => {
    if (!dragState.isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - dragState.startX) * 2;
    containerRef.current.scrollLeft = dragState.scrollLeft - walk;
  };

  return (
    <>
      <div className='relative'>
        <button className='absolute -top-10' onClick={() => scrollToPrevElmnt(firstVisibleItemRef.current - 1)}>
          Prev
        </button>
      </div>
      <div
        className={`flex gap-8 overflow-auto hide-scrollbar ${className ?? ''}`}
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onScroll={handleScroll}
      >
        {Children.toArray(children).map((it, idx) => (
          <div ref={(el) => (itemRefs.current[idx] = el)} key={idx} id={idx} className='flex-shrink-0'>
            {it}
          </div>
        ))}
      </div>
      <div className='relative'>
        <button className='absolute' onClick={() => scrollToNextElmnt(firstVisibleItemRef.current + 1)}>
          Next
        </button>
      </div>
    </>
  );
}
