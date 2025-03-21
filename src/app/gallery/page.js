import Image from 'next/image';
import nextImg from "../../assets/car.jpg"

const GalleryPage = () => {
    return (
        <div className='text-center'>
            <h1>Regular Image</h1>
            <img src='https://i.ibb.co.com/3xBMb3P/car.jpg' alt='' className='mx-auto' width={400} height={400}/>
            <h1>Nextjs Image</h1>
            <Image src="https://i.ibb.co.com/3xBMb3P/car.jpg" width={400} height={400} alt='image' className='mx-auto'/>
            <h1>Local Image</h1>
            <Image src={nextImg} width={400} height={400} alt='image' className='mx-auto'/>
        </div>
    );
};

export default GalleryPage;