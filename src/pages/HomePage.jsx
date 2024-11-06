import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import nodejs from '../assets/nodejs.png';
import python from '../assets/python-language.png';

export default function HomePage() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='relative'>
        <motion.img
          src={nodejs}
          animate={{ rotate: [5, -5], y: [10, -0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          alt='nodejs'
          className='absolute w-[150px] -left-4 -top-[150px]'
        />
      </div>
      <div className='text-center text-[48px] md:text-[84px] 3xl:text-[96px] z-10'>
        Afrizal <span className='text-highlight'>Sebastian</span>
      </div>
      <div className='text-center text-[28px] md:text-[48px] 3xl:text-[72px]'>
        I'm <span className='text-secondary'>Software Engineer</span>
      </div>
      <div className='relative'>
        <motion.img
          src={python}
          animate={{ rotate: [10, -10], y: [10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          alt='python'
          className='absolute w-[150px] -right-4'
        />
      </div>
      <div className='text-[18px] md:text-[32px] 3xl:text-[48px] text-center h-fit m-6'>
        <Link className='px-8 py-2 bg-highlight rounded-xl' to='mailto:sebastiangurning@gmail.com'>
          Get in Touch
        </Link>
      </div>

      <div className='h-[100px]' />
    </div>
  );
}
