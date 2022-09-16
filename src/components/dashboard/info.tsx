import React from 'react'

const Info = () => {
  return (
    <div className="flex justify-between bg-white rounded-xl mt-16">
      <div className="pl-10 pt-8 pb-6 w-[500px]">
        <h4 className="text-xl tracking-[0.6px] font-semibold text-dark mb-4">
          Sosyal hesaplar sizlerle!
        </h4>
        <p className="text-accent mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing eliti, donec
          rhoncus velit enim, ut malesuada erat dignissim sed.
        </p>
        <a className="text-soft-blue tracking-[0.2px] font-semibold text-sm cursor-pointer">
          Hemen Satın Al
        </a>
      </div>
      <img src="/image-custom-social-account@3x.webp" alt="" className="h-52" />
    </div>
  )
}

export default Info
