import React from 'react'
import { ClipLoader } from 'react-spinners'

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
          width: 100,
          height: 100,
          backgroundColor: 'white',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ClipLoader color="#36d7b7" loading size={50} speedMultiplier={1} />
      </div>
    </div>
  )
}

export default LoadingOverlay
