import PageTitle from '@components/PageTitle/PageTitle';
import { TypeAnimation } from 'react-type-animation';

export default function ExperiencesPage() {
  return (
    <div>
      <PageTitle title='Experiences | Afrizal Sebastian' />
      <div className='text-3xl'>
        <TypeAnimation sequence={['Experiences Page Under Development', 5000, 'Thank You!', 2000]} repeat={Infinity} />{' '}
      </div>
      <div className='h-[50px]'></div>
    </div>
  );
}
