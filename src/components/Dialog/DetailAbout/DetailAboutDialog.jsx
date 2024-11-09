import docs from '@assets/docs/docs.pdf';
import pas from '@assets/pas.jpg';
import TimelineItem from '@components/TimelineItem/TimelineItem';
import { educationItemTimeline, experienceItemTimeline } from '@data';
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
import Dialog from '../Dialog';
import ProfileItem from './ProfileItem/ProfileItem';

export default function DetailAboutDialog({ opened, onCloseDialog }) {
  return (
    <Dialog opened={opened}>
      <div className='w-full'>
        <div className='relative'>
          <button
            className='md:hidden border rounded-lg bg-black absolute right-1 min-[425px]:right-4 -top-4 z-30'
            onClick={() => onCloseDialog()}
          >
            <MdClose size={32} />
          </button>
        </div>
        <div className='flex flex-col gap-4 md:gap-0 md:flex-row max-w-[90%] md:max-w-3xl h-[600px] bg-black border m-auto py-4 md:py-8 rounded-md'>
          <div className='w-full md:w-[35%] px-6 md:border-r border-dashed flex gap-2 sm:gap-5 items-center md:block'>
            <div className='w-[35%] md:w-full'>
              <img src={pas} alt='Pas Foto' className='rounded-full w-full md:w-[70%] m-auto' />
              <div className='text-center mt-3 font-bold text-[16px] min-[425px]:text-[20px]'>
                Afrizal <span className='text-secondary'>Sebastian</span>
              </div>
            </div>
            <div className='mt-4 flex flex-1 flex-col gap-3'>
              <ProfileItem label='16 April 2002'>
                <FaCalendar className='text-secondary size-3 min-[425px]:size-5' />
              </ProfileItem>
              <ProfileItem label='Bandung, Indonesia'>
                <FaLocationCrosshairs className='text-secondary size-3 min-[425px]:size-5' />
              </ProfileItem>
              <ProfileItem label='+62 852-62623-2703'>
                <FaPhone className='text-secondary size-3 min-[425px]:size-5' />
              </ProfileItem>
              <ProfileItem label='sebastiangurning@gmail.com'>
                <MdMail className='text-secondary size-3 min-[425px]:size-5' />
              </ProfileItem>
              <a
                href={docs}
                download
                className='py-2 bg-highlight rounded-xl mt-1 md:mt-2 text-center text-[12px] min-[425px]:text-[16px]'
              >
                Download CV
              </a>
            </div>
          </div>

          <div className='flex-1 px-6 overflow-auto hide-scrollbar'>
            <div className='flex flex-col gap-8'>
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

          <div className='relative'>
            <button
              className='hidden md:block border rounded-lg bg-black absolute -right-6 -top-14 z-30'
              onClick={() => onCloseDialog()}
            >
              <MdClose size={40} />
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
