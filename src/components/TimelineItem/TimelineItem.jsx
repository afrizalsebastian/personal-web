export default function TimelineItem({ date, company, title }) {
  return (
    <div className='flex justify-between items-stretch'>
      <div className='flex-1 px-4 border-r flex items-center'>
        <div className='bg-gray-900 py-2 px-4 rounded-2xl text-[10px] flex-1'>{date}</div>
        <div className='relative'>
          <div className='absolute bg-primary size-[15px] rounded-full -right-6 -top-2'></div>
        </div>
      </div>
      <div className='flex-1 px-4'>
        <div className='py-2'>
          <p className='text-[12px]'>{company}</p>
          <p className='text-[10px] text-highlight'>{title}</p>
        </div>
      </div>
    </div>
  );
}
