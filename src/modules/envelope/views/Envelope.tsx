import React from 'react'

import { EnvelopeBase } from '..'

import sealImage from '@/assets/images/iniciales.jpeg'
import { useNavigation } from '@/common/hooks/useNavigate'
import { useEnvelope } from '@/modules/envelope/hooks/useEnvelope'
import { EnvelopeMedia } from '../components/envelope-media/EnvelopeMedia'

export const Envelope: React.FC = () => {
    const { navigateTo } = useNavigation();
    const { isOpening, handleOpen, handleSkip } = useEnvelope({ navigateTo })

    return (
        <EnvelopeBase
            isOpening={isOpening}
            onOpen={handleOpen}
            sealImage={sealImage}
            onSkip={handleSkip}
            showSkip={false}
        >
            <EnvelopeMedia />
        </EnvelopeBase>
    )
}
