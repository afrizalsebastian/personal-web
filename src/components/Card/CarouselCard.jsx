import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CarouselCard({ idx, date, company, title, logo }) {
  const [mouseDownTime, setMouseDownTime] = useState(0);
  const [cardHover, setCardHover] = useState(false);

  const onMouseDown = () => {
    setMouseDownTime(Date.now());
  };

  const onMouseUp = () => {
    const duration = Date.now() - mouseDownTime;
    if (duration < 100) {
      console.log(`Card ${idx + 1} clicked`);
      //Open Dialog
    }
  };

  const onStartHover = () => {
    setCardHover(true);
  };

  const onEndHover = () => {
    setCardHover(false);
  };

  return (
    <motion.div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      whileTap={{ scale: 0.9 }}
      onHoverStart={onStartHover}
      onHoverEnd={onEndHover}
      className='size-[285px] sm:size-[435px] md:size-[315px] lg:size-[270px] bg-black flex items-center justify-center'
    >
      <div className='p-2 relative'>
        <img src={logo} alt={`logo-${company}`} className='rounded-lg' />
        <div className='absolute left-0 bottom-6 w-full'>
          {cardHover && (
            <div className='bg-secondary p-2 w-4/5 m-auto rounded-md'>
              <p className='text-[16px] font-bold'>{company}</p>
              <p className='text-[12px]'>{title}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
