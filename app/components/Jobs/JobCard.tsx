import ClientService from '@/app/services/ClientService';
import { Job } from '@/app/types/jobs';
import * as React from 'react';
import EloDialog from '../common/EloDialog';

interface JobCardProps {
    job: Job
}

const JobCard: React.FunctionComponent<JobCardProps> = ({ job }) => {
    const [dialogOpened, setDialogOpened] = React.useState(false);

    const handleJobClick = React.useCallback(() => {
        ClientService.requests.recordLog({ type: 'Click', name: 'JobClick', value: job })
        setDialogOpened(true)
    }, [job])

    return (
        <div>
            <div className='lg:flex justify-between border-b-2 p-4 cursor-pointer hover:bg-slate-200 transition-all duration-500' onClick={handleJobClick}>
                <div className='jobtitle text-elo7-green font-bold capitalize'>
                    {job.title}
                </div>
                <div className='joblocation capitalize font-bold mt-4 lg:mt-0'>
                    {job.location || 'Remoto'}
                </div>
            </div>
            {dialogOpened && (
                <EloDialog onClose={() => setDialogOpened(false)}>
                    <div className='bg-elo7-green max-w-[95vw] max-h-[90vh] w-[500px] rounded-lg p-10 text-white capitalize'>
                        <h3 data-testid="dialog-job-title" className='font-black text-xl'>{job.title}</h3>
                        <h4 className='italic'>{job.level}</h4>
                        <p className='mt-4'>Localização: {job.location}</p>
                        <p>Área: {job.type}</p>
                        <div className='mt-5'>
                            <button className='bg-elo7-light-yellow text-black p-2 rounded-lg w-full text-lg' onClick={() => setDialogOpened(false)}>Fechar</button>
                        </div>
                    </div>
                </EloDialog>
            )}
        </div>
    );
}

export default JobCard;