'use client';
import Link from 'next/link'
import React from 'react'

import Button from '@/components/Button';

const NotFound = () => {
    return (
        <div className='absolute left-0 top-0 z-50 min-h-[930px] w-full bg-404 bg-cover'>
            <Button size={'sm'} variant={'image'} className='absolute bottom-[150px] right-[300px] h-11 w-[165px] items-center justify-center gap-2.5 rounded-[10px] bg-lime-600 px-[15px] py-2.5 shadow'>
                <Link href='/' className="text-base font-bold leading-normal text-white">Quay trở lại trang</Link>
            </Button>
        </div>
    )
}

export default NotFound