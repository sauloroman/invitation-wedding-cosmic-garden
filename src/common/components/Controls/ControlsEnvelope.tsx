import React from 'react'
import { Button } from '@/common/components/Button/Button'
import { useNavigation } from '@/common/hooks/useNavigate'

import './_controls.scss'

export const ControlsEnvelope: React.FC = () => {
    const { navigateTo } = useNavigation()

    return (
        <section>
            <Button action={() => navigateTo('envelope')} variant="primary" className="controls controls--envelope">
                <i className='bx bx-envelope controls__icon' />
            </Button>
        </section>
    )
}
