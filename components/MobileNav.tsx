/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { Button } from 'antd';

export const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [productShow, setProductShow] = useState(false);
  const toogleNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className='flex md:hidden border-b px-5 py-3 items-center justify-between'>
        <img src='/logo-dark.svg' alt='logo' width={60} />

        <div className=''>
          {navOpen ? (
            <i
              className='fa fa-times'
              onClick={toogleNavbar}
              style={{ fontSize: '26px', cursor: 'pointer' }}
              aria-hidden='true'
            ></i>
          ) : (
            <i
              className='fa fa-bars'
              onClick={toogleNavbar}
              style={{ fontSize: '26px', cursor: 'pointer' }}
              aria-hidden='true'
            ></i>
          )}
        </div>
      </div>

      {navOpen && (
        <div className='flex md:hidden px-10 gap-4 mb-10 mt-5 flex-col'>
          <span className=' text-[16px] text-black cursor-pointer'>
            Explore
          </span>
          <span className=' text-[16px] text-blue-600 underline font-semibold cursor-pointer'>
            Problems
          </span>
          <span className=' text-[16px] text-black cursor-pointer'>
            Contest
          </span>

          <span className=' text-[16px] text-black cursor-pointer'>
            Discuss
          </span>
          <span className=' text-[16px] text-black cursor-pointer'>
            Interview
          </span>
          <div className='flex gap-4'>
            <Button type='primary'>Sign In</Button>
            <Button type='default'>Sign Up</Button>
          </div>
        </div>
      )}
    </>
  );
};
