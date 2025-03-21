import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div className='text-center'>
            <img src='https://i.ibb.co.com/3xBMb3P/car.jpg' alt='' className='mx-auto' width={400} height={400}/>
            <h1>Nextjs Image Tag</h1>
            <Image src="https://i.ibb.co.com/3xBMb3P/car.jpg" width={400} height={400} alt='image' className='mx-auto'/>
        </div>
    );
};

export default GalleryPage;