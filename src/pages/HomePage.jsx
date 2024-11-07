import nodejs from '@assets/nodejs.png';
import python from '@assets/python-language.png';
import PageTitle from '@components/PageTitle/PageTitle';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className='flex flex-col gap-2'
    >
      <PageTitle title='Afrizal Sebastian' />
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
          className='absolute w-[100px] md:w-[125px] lg:w-[150px] -left-4 -top-[100px] md:-top-[125px] lg:-top-[150px]'
        />
      </div>
      <div className='text-center text-[36px] md:text-[72px] lg:text-[84px] 3xl:text-[96px] z-10'>
        Afrizal <span className='text-highlight'>Sebastian</span>
      </div>
      <div className='text-center text-[20px] md:text-[48px] 3xl:text-[72px]'>
        I'm{' '}
        <span className='text-secondary'>
          <TypeAnimation sequence={['Web Developer', 4000, 'Software Engineer', 4000]} repeat={Infinity} />
        </span>
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
          className='absolute w-[100px] md:w-[125px] lg:w-[150px] -right-4'
        />
      </div>
      <div className='text-[18px] md:text-[28px] lg:text-[36px] 3xl:text-[48px] text-center h-fit m-6'>
        <Link className='px-8 py-2 bg-highlight rounded-xl' to='mailto:sebastiangurning@gmail.com'>
          Get in Touch
        </Link>
      </div>
      <div className='h-[50px]' />
    </motion.div>
  );
}
