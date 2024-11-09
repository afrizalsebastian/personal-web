import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CarouselCard({ idx }) {
  const [mouseDownTime, setMouseDownTime] = useState(0);

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

  return (
    <motion.div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      whileTap={{ scale: 0.9 }}
      className='size-[285px] sm:size-[435px] md:size-[315px] lg:size-[270px] bg-black rounded-md border flex items-center justify-center'
    >
      Experience {idx + 1}
    </motion.div>
  );
}
