export default function ProfileItem({ children, label }) {
  return (
    <div className='flex gap-2 pb-1 border-b border-dashed items-end'>
      {children}
      <div className='text-[12px]'>{label}</div>
    </div>
  );
}
