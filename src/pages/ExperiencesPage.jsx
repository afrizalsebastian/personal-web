import CarouselCard from '@components/Card/CarouselCard';
import CarouselAlternative from '@components/Carousel/CarouselAlt';
import PageTitle from '@components/PageTitle/PageTitle';

export default function ExperiencesPage() {
  return (
    <div>
      <PageTitle title='Experiences | Afrizal Sebastian' />
      <CarouselAlternative className='w-full'>
        {[...Array(20)].map((it, idx) => (
          <CarouselCard key={idx} idx={idx} />
        ))}
      </CarouselAlternative>

      <div className='h-[50px]'></div>
    </div>
  );
}
