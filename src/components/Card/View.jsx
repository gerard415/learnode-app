import React from 'react'

export default function View(props) {
  return (
    <div className='w-full grid grid-row-2 h-60'>
      {props.image ?
          <div className='h-max col-span-2'>
            <img src={props.image} alt='' className='w-full cursor-pointer shadow-pop-bl' style={{height:'150px'}} />
          </div>
          :
          ""
      }
      <div className='grid grid-cols-12 col-span-2 h-full w-full gap-x-4'>
        {props.avatar ?
            <div className='col-span-3'>
              <img src={props.avatar} alt='' style={{width:'37px', height:'37px'}}  className='rounded-full' />
            </div>
            :
            ""
          }
        <div className='col-span-9 flex flex-col gap-2'>
          <div>
            {props.title ?
              <p className='text-sm font-bold text-ellipsis w-full text-white'>{props.title}</p>
              :
              ""
            }

            {props.subtitle ?
              <p className='text-xs font-bold text-gray-400'>{props.subtitle}</p>
              :
              ""
            }
          </div>
        </div>
      </div>
    </div>
  )
}
