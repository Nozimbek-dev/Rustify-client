import { faCalendarDays, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../redux/store'

export default function Groups() {
  const navigate = useNavigate()
  const { token } = useSelector((state: RootState) => state.config)

  useEffect(() => {
    if (!token) navigate("/raid-lock")
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between mt-8 items-center max-sm:px-2'>
        <h3 className='text-2xl max-sm:text-xl font-semibold tracking-wide'>Groups list</h3>
        <button className='max-sm:text-sm bg-[#16A34A] py-1.5 px-5 rounded'>Create group</button>
      </div>

      <div className='mt-10'>
        <div className='border border-slate-500 flex justify-between bg-slate-900 hover:bg-slate-800 py-5 px-5 font-semibold tracking-wide text-lg max-sm:text-sm items-center cursor-pointer'>
          <div>1-Group</div>
          <div className='flex items-center'>4 <FontAwesomeIcon className='text-sm ml-1 text-slate-200' icon={faUserGroup} /></div>
          <div className='flex items-center'>11.29.1999 <FontAwesomeIcon className='text-sm text-slate-200 ml-1' icon={faCalendarDays} /></div>
          <div>90%</div>
        </div>

        <div className='border border-slate-500 flex justify-between bg-slate-900 hover:bg-slate-800 py-5 px-5 font-semibold tracking-wide text-lg max-sm:text-sm items-center cursor-pointer'>
          <div>1-Group</div>
          <div className='flex items-center'>4 <FontAwesomeIcon className='text-sm ml-1 text-slate-200' icon={faUserGroup} /></div>
          <div className='flex items-center'>11.29.1999 <FontAwesomeIcon className='text-sm text-slate-200 ml-1' icon={faCalendarDays} /></div>
          <div>90%</div>
        </div>

        <div className='border border-slate-500 flex justify-between bg-slate-900 hover:bg-slate-800 py-5 px-5 font-semibold tracking-wide text-lg max-sm:text-sm items-center cursor-pointer'>
          <div>1-Group</div>
          <div className='flex items-center'>4 <FontAwesomeIcon className='text-sm ml-1 text-slate-200' icon={faUserGroup} /></div>
          <div className='flex items-center'>11.29.1999 <FontAwesomeIcon className='text-sm text-slate-200 ml-1' icon={faCalendarDays} /></div>
          <div>90%</div>
        </div>
      </div>
    </div>
  )
}
