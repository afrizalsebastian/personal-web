export default function ProfileItem({ children, label }) {
  return (
    <div className='flex gap-2 pb-1 border-b border-dashed items-center md:items-end'>
      {children}
      <div className='text-[10px] min-[425px]:text-[12px]'>{label}</div>
    </div>
  );
}
