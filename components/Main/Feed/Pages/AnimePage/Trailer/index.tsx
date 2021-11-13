import React from 'react'

interface IProps {
  trailerUrl: string
}

export const Trailer: React.FC<IProps> = ({ trailerUrl }) => {

  const hasTrailer = () => {
    return trailerUrl != null
  }

  if (hasTrailer()) {
    return (
      <>
        <p className='text-center'>TRAILER</p>
        <iframe
          src={trailerUrl}
          frameBorder="0"
          allowFullScreen={true}
          width='100%'
          height={500}
        />
      </>
    )
  } else {
    return (
      <div className='w-100 d-flex align-items-center' style={{ height: 150 }}>
        <p className='text-center w-100'>Não encontramos o trailer para esse anime.</p>
      </div>
    )
  }

}
