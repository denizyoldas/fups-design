import React from 'react'
import CampaignItem from './campaign-item'
import { nanoid } from 'nanoid'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Title from '../UI/title'

const CAMPS = [
  {
    id: nanoid(),
    title: 'TURKCELL KAMPANYASI',
    description: 'Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.',
    image: '/campaign/image-banner-showcase-01@3x.webp',
    link: 'https://www.google.com'
  },
  {
    id: nanoid(),
    title: 'OYUN & E-PIN FIRSATI',
    description: 'Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.',
    image: '/campaign/image-banner-showcase-02@3x.webp',
    link: 'https://www.google.com'
  },
  {
    id: nanoid(),
    title: 'ÜCRETSİZ İŞLEM',
    description: `Fups App'i hemen indir! Ücretsiz işlem fırsatından sende yararlan.`,
    image: '/campaign/image-banner-showcase-03@3x.webp',
    link: 'https://www.google.com'
  },
  {
    id: nanoid(),
    title: 'TURKCELL KAMPANYASI',
    description: 'Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.',
    image: '/campaign/image-banner-showcase-01@3x.webp',
    link: 'https://www.google.com'
  },
  {
    id: nanoid(),
    title: 'OYUN & E-PIN FIRSATI',
    description: 'Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.',
    image: '/campaign/image-banner-showcase-02@3x.webp',
    link: 'https://www.google.com'
  },
  {
    id: nanoid(),
    title: 'ÜCRETSİZ İŞLEM',
    description: `Fups App'i hemen indir! Ücretsiz işlem fırsatından sende yararlan.`,
    image: '/campaign/image-banner-showcase-03@3x.webp',
    link: 'https://www.google.com'
  }
]

const Campaign = () => {
  const swiper = useSwiper()

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <Title>SİZE ÖZEL KAMPANYALAR</Title>
        <div>
          <button className="text-gray-500 mr-2 cursor-pointer" id="prev-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="text-gray-500 cursor-pointer" id="next-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true
        }}
        navigation={
          {
            nextEl: '#next-btn',
            prevEl: '#prev-btn'
          } as any
        }
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 18
          }
        }}
        className="mr-0 sm:-mr-10"
      >
        {CAMPS.map(c => (
          <SwiperSlide key={c.id} className="mb-12 !w-auto">
            <CampaignItem {...c} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Campaign
