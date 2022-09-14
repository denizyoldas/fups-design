import React from 'react'
import Lottie from 'lottie-react'
import LoadingAnimation from '@assets/loading.json'

interface Props {
  isLoading: boolean
}

const LoadingOverlay = ({ isLoading }: Props) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: isLoading ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: 300,
          height: 250,
          backgroundColor: 'white',
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* <ClipLoader color="#36d7b7" loading size={50} speedMultiplier={1} /> */}
        <Lottie animationData={LoadingAnimation} loop={true} />
        GİRİŞ YAPILIYOR…
      </div>
    </div>
  )
}

export default LoadingOverlay
