import { motion } from 'framer-motion';
import { FaCalendar, FaLocationCrosshairs, FaPhone } from 'react-icons/fa6';
import { MdClose, MdMail } from 'react-icons/md';
import docs from '../../assets/docs/docs.pdf';
import pas from '../../assets/pas.jpg';

const dialogVariants = {
  open: { display: 'flex', opacity: 1 },
  closed: { display: 'none', opacity: 0 },
};

function ProfileItem({ children, label }) {
  return (
    <div className='flex gap-2 pb-1 border-b border-dashed items-end'>
      {children}
      <div className='text-[12px]'>{label}</div>
    </div>
  );
}

export default function DetailAboutDialog({ opened, onCloseDialog }) {
  return (
    <motion.div
      variants={dialogVariants}
      animate={opened ? 'open' : 'closed'}
      className='fixed top-0 left-0 dialog__container bg-dialog-transparent items-center justify-center'
    >
      <div className='w-full'>
        <div className='flex max-w-3xl bg-black border m-auto py-8 rounded-md'>
          <div className='w-[35%] px-6 border-r border-dashed'>
            <img src={pas} alt='Pas Foto' className='rounded-full w-[70%] m-auto' />
            <div className='text-center mt-3 font-bold text-[20px]'>
              Afrizal <span className='text-highlight'>Sebastian</span>
            </div>
            <div className='mt-4 flex flex-col gap-3'>
              <ProfileItem label='16 April 2002'>
                <FaCalendar size={18} className='text-highlight' />
              </ProfileItem>
              <ProfileItem label='Bandung, Indonesia'>
                <FaLocationCrosshairs size={18} className='text-highlight' />
              </ProfileItem>
              <ProfileItem label='+62 852-62623-2703'>
                <FaPhone size={18} className='text-highlight' />
              </ProfileItem>
              <ProfileItem label='sebastiangurning@gmail.com'>
                <MdMail size={18} className='text-highlight' />
              </ProfileItem>
              <a href={docs} download className='px-8 py-2 bg-secondary rounded-xl mt-2 text-center'>
                Download CV
              </a>
            </div>
          </div>

          <div className='flex-1 px-6'>
            <div className='relative'>
              <button className='border rounded-lg bg-black absolute -right-11 -top-14' onClick={() => onCloseDialog()}>
                <MdClose size={40} />
              </button>
            </div>

            <div>
              <div className='font-bold text-[18px] pb-4 border-b border-dashed'>
                About <span className='text-highlight'>Me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
