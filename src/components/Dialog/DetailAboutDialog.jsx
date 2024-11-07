import { motion } from 'framer-motion';

const dialogVariants = {
  open: { display: 'flex', opacity: 1 },
  closed: { display: 'none', opacity: 0 },
};

export default function DetailAboutDialog({ opened }) {
  return (
    <motion.div
      variants={dialogVariants}
      animate={opened ? 'open' : 'closed'}
      className='fixed top-0 left-0 dialog__container bg-dialog-transparent items-center justify-center'
    >
      Detail About Dialog
    </motion.div>
  );
}
