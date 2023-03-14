import React from 'react'
import { Link } from 'react-router-dom'

export default function View(props) {
  return (
    <div className='w-full video-card h-[220px]'>
      {props.image ?
          <Link to='/watch'><div  className='h-[150px] col-span-2 overflow-hidden bg-gray-100 rounded-lg'>
            <img src={props.image} alt='' className='w-full h-full cursor-pointer' style={{height:'150px'}} />
          </div> 
          </Link>
          :
          ""
      }
      <div className='grid pt-3 grid-cols-12 col-span-2 items-start h-[70px] w-full gap-x-2'>
        {props.avatar ?
            <div className='col-span-2'>
              <img src={props.avatar} alt='' style={{width:'37px', height:'37px'}}  className='rounded-full' />
            </div>
            :
            ""
          }
        <div className='col-span-10 flex flex-col gap-2'>
          <div>
            {props.title ?
             <Link to={'/watch?v=' + props.title}> <p className='text-md font-bold text-ellipsis w-full card-title'>{props.title}</p>
             </Link>
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
