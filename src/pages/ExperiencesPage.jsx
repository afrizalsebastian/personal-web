import CarouselCard from '@components/Card/CarouselCard';
import CarouselAlternative from '@components/Carousel/CarouselAlt';
import PageTitle from '@components/PageTitle/PageTitle';

export default function ExperiencesPage() {
  return (
    <div className='flex flex-col gap-8 sm:gap-10 md:gap-16'>
      <PageTitle title='Experiences | Afrizal Sebastian' />
      <div className='font-bold text-[28px] sm:text-[32px] md:text-[40px] pb-2 border-b border-dashed'>
        Work <span className='text-secondary'>Experiences</span>
      </div>
      <div className='w-[300px] sm:w-[450px] md:w-[650px] lg:w-[850px] mx-auto'>
        <CarouselAlternative>
          {[...Array(4)].map((it, idx) => (
            <CarouselCard key={idx} idx={idx} />
          ))}
        </CarouselAlternative>
      </div>

      <div className='h-[50px]'></div>
    </div>
  );
}
