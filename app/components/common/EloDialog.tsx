import { Job } from '@/app/types/jobs';
import * as React from 'react';

interface EloDialogProps {
    children: React.ReactNode,
    onClose: () => void
}

const EloDialog: React.FunctionComponent<EloDialogProps> = ({ children, onClose }) => {
    return (
        <div data-testid="elo-dialog" className='fixed top-0 bottom-0 left-0 h-[100vh] w-[100vw] items-center justify-center z-10'>
            <div className='fixed z-10 bg-gray-500 opacity-50 z-10 w-full h-full' onClick={onClose} />
            <div className='fixed z-20 w-full h-full'>
                <div data-testid="elo-dialog-content" className='flex items-center justify-center h-full z-30'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default EloDialog;