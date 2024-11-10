import notfound from '@assets/404.png';
import PageTitle from '@components/PageTitle/PageTitle';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <div>
      <PageTitle title='Not Found | Afrizal Sebastian' />
      <motion.img
        animate={{ rotate: [2, -2], y: [10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        src={notfound}
        alt='404 Not Found'
      />
      <div className='h-[25px] sm:h-[35px] md:h-[50px]' />
    </div>
  );
}
