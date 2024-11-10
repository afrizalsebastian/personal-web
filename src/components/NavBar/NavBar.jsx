import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

const dialogVariants = {
  open: { display: 'flex', opacity: 1, top: 0 },
  closed: { display: 'none', opacity: 0, top: -200 },
};

export default function NavBar({ activeLocation }) {
  const [openDialog, setOpenDialog] = useState(false);

  const items = [
    {
      to: '/',
      label: 'Home',
    },
    {
      to: '/about',
      label: 'About',
    },
    {
      to: '/experiences',
      label: 'Experiences',
    },
    {
      to: '/portfolio',
      label: 'Portfolio',
    },
  ];

  const menuClick = () => {
    setOpenDialog((prev) => !prev);
  };

  const menuItemClicked = () => {
    setOpenDialog(false);
  };

  return (
    <nav className='flex justify-between px-4 py-4 items-center max-w-5xl xl:px-0 mx-auto'>
      <Link to='/'>
        <div className='w-[60px] h-[60px]'>
          <img src='./img/bg-black.png' alt='Logo' />
        </div>
      </Link>
      <div className='hidden md:flex gap-2 font-bold text-lg'>
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className={
              it.to == activeLocation
                ? 'bg-highlight text-primary px-6 py-2 rounded-full'
                : 'text-primary px-6 py-2 hover:text-secondary'
            }
          >
            {it.label}
          </Link>
        ))}
      </div>
      <div className='md:hidden'>
        {openDialog ? (
          <MdOutlineClose size={35} onClick={menuClick} />
        ) : (
          <MdOutlineMenu size={35} onClick={menuClick} />
        )}

        <div className='relative'>
          <motion.div
            className='absolute bg-black flex flex-col right-0 gap-6 items-center w-[250px] py-4 border rounded-xl text-xl z-50'
            variants={dialogVariants}
            animate={openDialog ? 'open' : 'closed'}
          >
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                className={
                  it.to == activeLocation
                    ? 'bg-highlight text-primart px-6 py-2 rounded-full'
                    : 'text-primary px-6 py-2 hover:text-secondary'
                }
                onClick={menuItemClicked}
              >
                {it.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
