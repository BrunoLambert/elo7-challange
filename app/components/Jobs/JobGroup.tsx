import { JobGroup as JobGroupType } from '@/app/types/jobs';
import * as React from 'react';
import JobCard from './JobCard';

interface JobGroupProps {
    group: JobGroupType;
}

const JobGroup: React.FunctionComponent<JobGroupProps> = ({ group }) => {
    return (
        <div className='px-4 lg:px-10 py-5'>
            <div className='text-[26px] font-bold capitalize'>
                {group.name}
            </div>
            {group.jobs.map(job => (
                <JobCard key={job.title + job.type + job.level} job={job} />
            ))}
        </div>
    );
}

export default JobGroup;