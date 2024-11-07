import DetailAboutDialog from '@components/Dialog/DetailAboutDialog';
import PageTitle from '@components/PageTitle/PageTitle';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import aeroplane from '../assets/aeroplane.png';
import sebastian from '../assets/sebastian.jpg';

export default function AboutPage() {
  const [openedDialog, setOpenedDialog] = useState(false);

  const onClickOpenDialog = () => {
    setOpenedDialog(true);
  };

  const onClickCloseDialog = () => {
    setOpenedDialog(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <PageTitle title='About | Afrizal Sebastian' />
      <div className='m-auto w-[85%] md:m-0 md:w-full md:flex justify-evenly items-center'>
        <div className='size-[240px] md:size-[400px] m-auto'>
          <img src={sebastian} alt='profile' className='rounded-xl z-10' />
        </div>

        <div className='mt-4 md:m-0 md:w-[50%] flex flex-col gap-6'>
          <div className='flex flex-col gap-1'>
            <div className='text-[20px] md:text-[30px] text-center md:text-left'>Hi!</div>
            <div className='text-[20px] md:text-[40px] text-center md:text-left'>
              I'm Afrizal <span className='text-highlight'>Sebastian</span>
            </div>
            <div className='text-[16px] md:text-[28px] text-center md:text-left'>
              Innovative{' '}
              <span className='text-secondary font-bold'>
                <TypeAnimation sequence={['Web Developer', 4000, 'Software Engineer', 4000]} repeat={Infinity} />
              </span>
            </div>
            <div className='text-[12px] md:text-[16px] mt-2 text-justify md:text-left'>
              My name is <span className='text-secondary font-bold'>Afrizal Sebastian</span>, and I am a fresh graduate
              majoring Informatics / Computer Science at Bandung Institute of Technology. Currently, I am actively
              learning many things such as web development, backend services, and mobile development. My main interests
              lie in the field of Web Development and Software Engineering.
            </div>
          </div>

          <div className='text-center md:text-left z-10'>
            <button
              className='bg-highlight px-[20px] py-[8px] md:px-[28px] md:py-[10px] w-fit rounded-3xl text-[12px] md:text-[16px]'
              onClick={onClickOpenDialog}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className='relative hidden md:block'>
        <motion.img
          src={aeroplane}
          alt='aeroplane'
          className='absolute -top-[35px] left-0 w-[200px]'
          animate={{ rotate: [10, -5], y: [10, -10] }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 1.5,
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </div>
      <div className='md:h-[75px]' />
      <DetailAboutDialog opened={openedDialog} onCloseDialog={onClickCloseDialog} />
    </motion.div>
  );
}
