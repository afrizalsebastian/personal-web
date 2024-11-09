import _ from 'lodash';
import { Children, useEffect, useMemo, useRef, useState } from 'react';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

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
   * Paging
   */
  const pages = children.length - (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3) + 1;
  const cardToDisplay = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const [numberOfCard, setNumberOfCard] = useState(pages >= 2 ? pages : 1);
  const [pageNumber, setNumberPage] = useState(1);

  /**
   * Navigaiton Button
   */
  const scrollToNextElmnt = (current) => {
    const index = current + 1;
    if (index <= children.length - cardToDisplay) {
      setNumberPage((prev) => prev + 1);
      itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      firstVisibleItemRef.current = index;
    }
  };
  const scrollToPrevElmnt = (current) => {
    const index = current - 1;
    if (index >= 0) {
      setNumberPage((prev) => prev - 1);
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
    firstVisibleItemRef.current = visibleElements[0]?.id
      ? parseInt(visibleElements[0]?.id)
      : firstVisibleItemRef.current;
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

  const onArrowKeyPress = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A')
      scrollToPrevElmnt(firstVisibleItemRef.current);

    if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D')
      scrollToNextElmnt(firstVisibleItemRef.current);
  };

  const resizeWindow = () => {
    setNumberOfCard(children.length - (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3) + 1);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    document.addEventListener('keydown', onArrowKeyPress);

    return () => {
      window.removeEventListener('resize', resizeWindow);
      document.removeEventListener('keydown', onArrowKeyPress);
    };
  }, []);

  return (
    <>
      <div
        className={`flex gap-4 overflow-auto hide-scrollbar ${children.length <= cardToDisplay ? 'justify-center' : ''} ${className ?? ''}`}
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
      <div className='flex justify-center gap-6 items-center mt-10 -ml-4 sm:-ml-6 md:-ml-1 lg:-ml-3'>
        <button className='hover:text-highlight' onClick={() => scrollToPrevElmnt(firstVisibleItemRef.current)}>
          <FaCircleChevronLeft className='size-[30px] sm:size-[32px] md:size-[36px] lg:size-[40px]' />
        </button>
        {/* <div>
          {pageNumber} / {numberOfCard}
        </div> */}
        <button className='hover:text-highlight' onClick={() => scrollToNextElmnt(firstVisibleItemRef.current)}>
          <FaCircleChevronRight className='size-[30px] sm:size-[32px] md:size-[36px] lg:size-[40px]' />
        </button>
      </div>
    </>
  );
}
