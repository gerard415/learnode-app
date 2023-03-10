import React from 'react'
import { BsDot } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function View(props) {
  return (
    <div className='fixed grid grid-cols-1 justify-start items-start gap-8 pt-10 w-[230px] h-full pb-32 hide-scroll pr-[8px] hover:pr-[0px] bg-theme-light overflow-y-scroll' >

      <div className='px-3 border-opacity-20 h-max overflow-hidden flex flex-col gap-3'>
        <NavLink to='/' className="grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 col-span-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Home</p>
          </div>
        </NavLink>


        <NavLink to='/subscriptions' className="grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-6 col-span-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Subscriptions</p>
          </div>
        </NavLink>


        <NavLink to='/Categories' className="grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-6 col-span-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>

          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Categories</p>
          </div>
        </NavLink>


        <NavLink to='/livestream' className="grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 col-span-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Livestreams</p>
          </div>
        </NavLink>
      </div>

      <hr />


      <div className='border-opacity-20 h-max overflow-hidden px-3 flex flex-col gap-3'>
        <div className='grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 col-span-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Library</p>
          </div>
        </div>

        <div className='grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 col-span-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
            </svg>
          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Watched</p>
          </div>
        </div>

        <div className='grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 col-span-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
            </svg>

          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Yet to watch</p>
          </div>
        </div>


        <div className='grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 col-span-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Liked</p>
          </div>
        </div>
      </div>

      <hr />


      <div className='px-3 border-opacity-20 h-max overflow-hidden flex flex-col gap-3'>
        <div className='px-3'>
          <p className='flex popular-subscribed-creators uppercase font-extrabold text-[13px] '>
            Popular creators
          </p>
        </div>
        <div className=' h-max overflow-hidden flex flex-col gap-3'>
          {props.rec_channels.map((item, index) => (
            <div key={index} className='grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer '>
              <img src={item.avatar} alt=''  className=' w-6 h-6 object-cover col-span-2' />
              <div className='h-full flex items-center justify-between col-span-10'>
                <p className='font-semibold text-sm' >{item.username}</p>
              </div>
            </div>
          ))}

            <div  className='grid rounded-lg gap-x-5 border-green-400 border bg-green-400 bg-opacity-10 text-green-400 hover:bg-transparent grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-green-500 col-span-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
              </svg>

              <div className='h-full flex items-center justify-between col-span-10'>
                <p className='font-semibold text-sm text-green-500' >See more</p>
              </div>
            </div>
        </div>
      </div>

      <hr />


      <div className='border-opacity-20 h-max overflow-hidden px-3 flex flex-col gap-3'>
        <div className='grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 col-span-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Settings</p>
          </div>
        </div>

        <div className='grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 col-span-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
          </svg>

          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Creator desk</p>
          </div>
        </div>

        <div className='grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 col-span-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>

          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Help</p>
          </div>
        </div>

        <div className='grid rounded-lg gap-x-5 items-center menu-item grid-cols-12 py-2 w-full px-3 transition-all duration-300 hover:cursor-pointer '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 col-span-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
          </svg>

          <div className='h-full flex items-center justify-between col-span-10'>
            <p className='font-semibold text-sm' >Request Features</p>
          </div>
        </div>
      </div>
    </div>
  )
}
