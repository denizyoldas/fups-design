import React from 'react'
import RightArrowIcon from '@assets/icons/right-arrow-icon.svg'

interface Props {
  id: string
  title: string
  description: string
  image: string
  link: string
}

const CampaignItem = ({ id, title, description, image, link }: Props) => {
  return (
    <div className="bg-white w-[310px] md:w-96 h-40 rounded-xl flex relative">
      <img src={image} alt={title} className="w-24 h-[170px] -mt-[10px]" />
      <div className="my-10 ml-2 mr-6">
        <h2 className="font-semibold text-sm tracking-[0.2px] mb-3">{title}</h2>
        <p className="text-accent">{description}</p>
      </div>
      <a
        className="absolute bottom-3 right-3 hover:scale-150 transition-all delay-100 ease-in-out"
        href={link}
      >
        <img src={RightArrowIcon} alt="right-arrow" />
      </a>
    </div>
  )
}

export default CampaignItem
