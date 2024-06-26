import { Job } from '@/app/types/jobs';
import * as React from 'react';

interface JobCardProps {
    job: Job
}

const JobCard: React.FunctionComponent<JobCardProps> = ({ job }) => {
    return (
        <div className='lg:flex justify-between border-b-2 p-4 cursor-pointer hover:bg-slate-200 transition-all duration-500'>
            <div className='text-elo7-green font-bold capitalize'>
                {job.title}
            </div>
            <div className='capitalize font-bold mt-4 lg:mt-5'>
                {job.location || 'Remoto'}
            </div>
        </div>
    );
}

export default JobCard;