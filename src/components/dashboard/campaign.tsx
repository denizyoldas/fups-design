import React from 'react'
import CampaignItem from './campaign-item'
import { nanoid } from 'nanoid'

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
  }
]

const Campaign = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {CAMPS.map(c => (
        <CampaignItem {...c} key={c.id} />
      ))}
    </div>
  )
}

export default Campaign
