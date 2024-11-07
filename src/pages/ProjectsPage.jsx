import PageTitle from '@components/PageTitle/PageTitle';
import { TypeAnimation } from 'react-type-animation';

export default function ProjectsPage() {
  return (
    <div>
      <PageTitle title='Projects | Afrizal Sebastian' />
      <div className='text-3xl'>
        <TypeAnimation sequence={['Projects Page Under Development', 5000, 'Thank You!', 2000]} repeat={Infinity} />{' '}
      </div>
      <div className='h-[50px]'></div>
    </div>
  );
}
