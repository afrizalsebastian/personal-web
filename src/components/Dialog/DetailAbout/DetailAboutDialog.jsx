import docs from '@assets/docs/docs.pdf';
import pas from '@assets/pas.jpg';
import TimelineItem from '@components/TimelineItem/TimelineItem';
import { motion } from 'framer-motion';
import { FaCalendar, FaLocationCrosshairs, FaPhone } from 'react-icons/fa6';
import { IoMdArrowDropright } from 'react-icons/io';
import { MdClose, MdMail } from 'react-icons/md';
import {
  SiExpress,
  SiJavascript,
  SiKotlin,
  SiMariadb,
  SiMysql,
  SiNestjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import ProfileItem from './ProfileItem/ProfileItem';

const dialogVariants = {
  open: { display: 'flex', opacity: 1 },
  closed: { display: 'none', opacity: 0 },
};

export default function DetailAboutDialog({ opened, onCloseDialog }) {
  const educationItemTimeline = [
    {
      date: 'Aug 2020 - Oct 2024',
      company: 'Institut Teknologi Bandung',
      title: 'Informatics / Computer Science',
    },
    {
      date: 'June 2017 - Apr 2020',
      company: 'SMAN 2 Balige',
      title: 'Science',
    },
  ];

  const experienceItemTimeline = [
    {
      date: 'May 2023 - Sept 2024',
      company: 'eHealth.co.id',
      title: 'Junior Software Engineer · Intern',
    },
    {
      date: 'Dec 2022 - Dec 2023',
      company: 'Finplan.id',
      title: 'Frontend Developer · Intern',
    },
    {
      date: 'Aug 2023 - Sept 2023',
      company: 'Jagotes ID',
      title: 'Frontend Developer · Intern',
    },
  ];

  return (
    <motion.div
      variants={dialogVariants}
      animate={opened ? 'open' : 'closed'}
      className='fixed top-0 left-0 dialog__container bg-dialog-transparent items-center justify-center'
    >
      <div className='w-full'>
        <div className='flex max-w-3xl h-[600px] bg-black border m-auto py-8 rounded-md'>
          <div className='w-[35%] px-6 border-r border-dashed'>
            <img src={pas} alt='Pas Foto' className='rounded-full w-[70%] m-auto' />
            <div className='text-center mt-3 font-bold text-[20px]'>
              Afrizal <span className='text-secondary'>Sebastian</span>
            </div>
            <div className='mt-4 flex flex-col gap-3'>
              <ProfileItem label='16 April 2002'>
                <FaCalendar size={18} className='text-secondary' />
              </ProfileItem>
              <ProfileItem label='Bandung, Indonesia'>
                <FaLocationCrosshairs size={18} className='text-secondary' />
              </ProfileItem>
              <ProfileItem label='+62 852-62623-2703'>
                <FaPhone size={18} className='text-secondary' />
              </ProfileItem>
              <ProfileItem label='sebastiangurning@gmail.com'>
                <MdMail size={18} className='text-secondary' />
              </ProfileItem>
              <a href={docs} download className='px-8 py-2 bg-highlight rounded-xl mt-2 text-center'>
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

            <div className='h-full overflow-auto hide-scrollbar flex flex-col gap-8'>
              <div className='flex flex-col gap-4'>
                <div className='font-bold text-[18px] pb-4 border-b border-dashed'>
                  About <span className='text-secondary'>Me</span>
                </div>
                <div className='text-[12px] text-justify'>
                  My name is Afrizal Sebastian, and I am a fresh graduate majoring Informatics / Computer Science at
                  Bandung Institute of Technology. Currently, I am actively learning many things such as web
                  development, backend services, and mobile development. My main interests lie in the field of Web
                  Development and Software Engineering.
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                <div className='font-bold text-[18px] pb-4 border-b border-dashed'>
                  Programming <span className='text-secondary'>Skills</span>
                </div>
                <div>
                  <div className='flex items-center'>
                    <IoMdArrowDropright size={20} className='text-highlight' /> Programming Languages
                  </div>
                  <div className='flex flex-wrap gap-2 ml-5 items-center'>
                    <SiJavascript size={20} />
                    <SiTypescript size={20} />
                    <SiPython size={20} />
                    <SiKotlin size={20} />
                  </div>
                </div>
                <div>
                  <div className='flex items-center'>
                    <IoMdArrowDropright size={20} className='text-highlight' /> Databases
                  </div>
                  <div className='flex flex-wrap gap-2 ml-5 items-center'>
                    <SiMariadb size={20} />
                    <SiMysql size={20} />
                  </div>
                </div>
                <div>
                  <div className='flex items-center'>
                    <IoMdArrowDropright size={20} className='text-highlight' /> Frameworks
                  </div>
                  <div className='flex flex-wrap gap-2 ml-5 items-center'>
                    <SiReact size={20} />
                    <SiVuedotjs size={20} />
                    <SiExpress size={20} />
                    <SiNestjs size={20} />
                  </div>
                </div>
                <div>
                  <div className='flex items-center'>
                    <IoMdArrowDropright size={20} className='text-highlight' /> Interest
                  </div>
                  <div className='ml-5 text-[12px]'>Software Engineer, Frontend Web Developer, Backend Services</div>
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                <div className='font-bold text-[18px] pb-4 border-b border-dashed'>
                  Experiences <span className='text-secondary'>Timeline</span>
                </div>
                <div>
                  {experienceItemTimeline.map((it) => (
                    <TimelineItem key={`${it.title} - ${it.company}`} {...it} />
                  ))}
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                <div className='font-bold text-[18px] pb-4 border-b border-dashed'>
                  Educations <span className='text-secondary'>Timeline</span>
                </div>
                <div>
                  {educationItemTimeline.map((it) => (
                    <TimelineItem key={`${it.title} - ${it.company}`} {...it} />
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='font-bold text-[18px] pb-4 border-b border-dashed'>Certifications</div>
                <div>
                  <div className='flex items-center'>
                    <IoMdArrowDropright size={20} className='text-highlight' /> Google Cloud
                  </div>
                  <div className='ml-5 text-[12px]'>
                    <Link
                      to='https://google.accredible.com/76696373-7b06-451b-9f63-9e8c6f346f5c'
                      target='_blank'
                      className='underline'
                    >
                      Associate Cloud Engineer
                    </Link>{' '}
                    · Mar 2024 - Mar 2027
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
