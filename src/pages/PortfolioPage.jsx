import CarouselCard from '@components/Card/CarouselCard';
import CarouselAlternative from '@components/Carousel/CarouselAlt';
import PageTitle from '@components/PageTitle/PageTitle';
import { portoflio } from '@data/portfolio';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className='flex flex-col gap-8 sm:gap-10 md:gap-16'
    >
      <PageTitle title='Portfolio | Afrizal Sebastian' />
      <div className='font-bold text-[28px] sm:text-[32px] md:text-[40px] pb-2 border-b border-dashed'>
        My <span className='text-secondary'>Portfolio</span>
      </div>
      <div className='w-[300px] sm:w-[450px] md:w-[650px] lg:w-[850px] mx-auto'>
        <CarouselAlternative>
          {portoflio.map((item, idx) => (
            <CarouselCard key={idx} idx={idx} {...item} />
          ))}
        </CarouselAlternative>
      </div>

      <div className='h-[25px] sm:h-[35px] md:h-[50px]' />
    </motion.div>
  );
}
