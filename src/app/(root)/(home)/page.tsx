import MeetingTypeList from '@/components/MeetingTypeList'

const Home = () => {
  const now = new Date();

  // Manually adjust for GMT+6 by adding 6 hours
  const offset = 6 * 60; // Offset in minutes
  const adjustedTime = new Date(now.getTime() + offset * 60 * 1000);
  
  // Get the time in the desired format
  const time = adjustedTime.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit', hour12: true });
  
  // Get the date in the desired format
  const date = (new Intl.DateTimeFormat('en-us', { dateStyle: 'full' })).format(adjustedTime);
  

  return (
<section className='flex size-full flex-col gap-10 text-white'>
<div className='h-[300px] w-full rounded-[20px]  bg-cover bg-hero'>

  <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
   
<div className='flex flex-col gap-2'>
  <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
<p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
</div>
  </div>

</div>

<MeetingTypeList/>

</section> 
 )
}

export default Home