import DetailCarousel from '@components/Dialog/DetailCarousel/DetailCarousel';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CarouselCard({ date, company, title, logo, about, position, location, description, tech }) {
  const [mouseDownTime, setMouseDownTime] = useState(0);
  const [cardHover, setCardHover] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const onMouseDown = () => {
    setMouseDownTime(Date.now());
  };

  const onMouseUp = () => {
    const duration = Date.now() - mouseDownTime;
    if (duration < 125) {
      //Open Dialog
      setOpenDetail(true);
    }
  };

  const onClickCloseDialog = () => {
    setOpenDetail(false);
  };

  const onStartHover = () => {
    setCardHover(true);
  };

  const onEndHover = () => {
    setCardHover(false);
  };

  return (
    <>
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
              <div className='bg-highlight p-2 w-4/5 m-auto rounded-md'>
                <p className='text-[16px] font-bold'>{company}</p>
                <p className='text-[12px]'>{title}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      <DetailCarousel
        opened={openDetail}
        {...{ date, company, title, logo, about, position, location, description, tech }}
        onCloseDialog={onClickCloseDialog}
      />
    </>
  );
}
