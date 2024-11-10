import CarouselCard from '@components/Card/CarouselCard';
import CarouselAlternative from '@components/Carousel/CarouselAlt';
import PageTitle from '@components/PageTitle/PageTitle';
import { projects } from '@data/projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className='flex flex-col gap-8 sm:gap-10 md:gap-16'
    >
      <PageTitle title='Projects | Afrizal Sebastian' />
      <div className='font-bold text-[28px] sm:text-[32px] md:text-[40px] pb-2 border-b border-dashed'>
        Some <span className='text-secondary'>Projects</span>
      </div>
      <div className='w-[300px] sm:w-[450px] md:w-[650px] lg:w-[850px] mx-auto'>
        <CarouselAlternative>
          {projects.map((proj, idx) => (
            <CarouselCard key={idx} idx={idx} {...proj} />
          ))}
        </CarouselAlternative>
      </div>

      <div className='h-[50px]'></div>
    </motion.div>
  );
}
