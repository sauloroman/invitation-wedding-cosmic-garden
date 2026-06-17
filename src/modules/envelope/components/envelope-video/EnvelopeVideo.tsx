import React from 'react'

import envelopeVideo from '@/assets/videos/pareja-bailando.mp4'
import './_envelope-video.scss'

export const EnvelopeVideo: React.FC = () => {
  return (
    <div className='envelope-video'>
      <div className="envelope-video__overlay"></div>
      <video className='envelope-video__video' src={envelopeVideo} autoPlay muted loop playsInline></video>
      <h1 className='envelope-video__title'>Próximamente</h1>
    </div>
  )
}
