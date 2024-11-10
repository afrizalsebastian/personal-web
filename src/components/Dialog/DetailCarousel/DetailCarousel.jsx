import { MdClose } from 'react-icons/md';
import {
  SiFlutter,
  SiGooglecloud,
  SiJavascript,
  SiKotlin,
  SiOdoo,
  SiPolymerproject,
  SiPython,
  SiQuasar,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import Dialog from '../Dialog';

const iconMap = {
  SiFlutter,
  SiGooglecloud,
  SiJavascript,
  SiKotlin,
  SiOdoo,
  SiPolymerproject,
  SiQuasar,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiPython,
};

export default function DetailCarousel({
  opened,
  date,
  company,
  title,
  logo,
  about,
  position,
  location,
  description,
  onCloseDialog,
  tech,
  name,
  documentation,
}) {
  return (
    <Dialog opened={opened}>
      <div className='w-full'>
        <div className='border h-[600px] max-w-[90%] md:max-w-3xl m-auto bg-black p-8 rounded-md'>
          <div className='relative'>
            <button
              className='border rounded-lg bg-black absolute z-30 -right-12 -top-12'
              onClick={() => onCloseDialog()}
            >
              <MdClose size={32} />
            </button>
          </div>
          <div className='flex flex-col gap-6 h-full overflow-auto hide-scrollbar'>
            <div className='flex items-center gap-4 border-b border-dashed pb-2'>
              <h2 className='text-[20px] sm:text-[24px]'>{name ? name : company}</h2>
              <p className='text-secondary text-[12px] sm:text-[16px]'>{date}</p>
            </div>
            <div className='flex-col sm:flex-row items-center sm:items-start flex gap-6'>
              <img src={logo} alt='logo' className='size-[200px] rounded-lg' />
              <div className='text-[12px] sm:text-[14px] text-justify sm:text-left'>{about}</div>
            </div>
            <div className='text-[12px] sm:text-[14px]'>
              <p className='text-[20px] sm:text-[24px] font-bold'>{name ? company : ''}</p>
              <p className='text-[20px] sm:text-[24px] font-bold'>{title}</p>
              <p className='text-highlight'>{position}</p>
              <p className='text-highlight'>{location}</p>
              <p className='text-highlight'>{date}</p>
              {description && (
                <div className='mt-2'>
                  <p>Description: </p>
                  <ul className='list-disc ml-4'>
                    {description.map((it, index) => (
                      <li key={index}>{it}</li>
                    ))}
                  </ul>
                </div>
              )}
              {tech && (
                <div className='mt-2'>
                  <p>Tech Stack: </p>
                  <div className='flex gap-2 mt-1'>
                    {tech.map((techName, techIndex) => {
                      const IconComponent = iconMap[techName];
                      return IconComponent ? (
                        <IconComponent key={techIndex} className='size-[20px] sm:size-[30px]' />
                      ) : null;
                    })}
                  </div>
                </div>
              )}
              {documentation && (
                <div className='mt-4'>
                  <p className='text-[20px] sm:text-[24px] font-bold'>Documentation</p>
                  <div className={title === 'Hobbies' ? 'flex flex-wrap gap-4 justify-evenly' : 'flex flex-col gap-4'}>
                    {documentation.map((it, idx) => (
                      <img
                        key={idx}
                        src={it}
                        alt='documentations'
                        className={`rounded-lg ${title === 'Hobbies' ? 'sm:w-[45%]' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
