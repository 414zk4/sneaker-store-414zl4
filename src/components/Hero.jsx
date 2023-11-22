import React from 'react'
import Clips from './utils/Clips'
import SocialLinks from './utils/SocialLinks'


const Hero = ({heroapi: {title, subtitle, btntext, img, sociallinks, videos}}) => {
  //console.log(heroapi)
  return (
    <>
      <div className='relative h-auto w-auto flex flex-col'>
        <div className='bg-theme clip-path h-[65vh] lg:h-[55vh] md:h-[45vh] sm:h-[35vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
            <div className='grid items-center justify-items-center mt-28 md:mt-24'>
                <h1 className='text-6x1 lg:text-5x1 md:text-4x1 sm:text-3x1 xsm:text-2x1 font-extrabold filter drop-shadow-sm text-slate-200'>{title}</h1>
                <h1 className='text-6x1 lg:text-5x1 md:text-4x1 sm:text-3x1 xsm:text-2x1 font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
                <button className='button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'>{btntext}</button>
                <div className='grid items-center gap-5 md:gap-3 absolute top-[25vh] lg:top-[19vh] left-[9%] xl:left-0 w-auto h-auto'>
                    {videos?.map((val, i) => (
                        <Clips
                            key={i}
                            imgsrc={val.imgsrc}
                            clip={val.clip}
                        />
                    ))}
                </div>
                <div className='grid item-center absolute top-[33vh] lg:top-[19vh] right-0 gap-3'>
                    {sociallinks?.map((val, i)=>(
                        <SocialLinks 
                            key={i}
                            icon={val.icon}
                        />
                    ))}
                </div>
            </div>
            <div className='flex items-center'>
                <img 
                    src={img}
                    alt="hero-img/img" 
                    className='w-auto h-[37vh] lg:h-[27vh] md:h-[23vh] sm:h-[13vh] xsm:h-[11vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'
                /> 
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
