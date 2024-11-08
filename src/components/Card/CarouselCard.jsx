export default function CarouselCard({ idx }) {
  return (
    <div className='size-[285px] sm:size-[435px] md:size-[315px] lg:size-[270px] bg-black rounded-md border flex items-center justify-center'>
      Experience {idx + 1}
    </div>
  );
}
