import * as React from 'react';
import SearchIcon from '../common/SearchIcon';
import ClientService from '../../services/ClientService';
import { JobGroup as JobGroupType } from '../../types/jobs';
import JobGroup from './JobGroup';

interface JobSectionProps { }

const JobSection: React.FunctionComponent<JobSectionProps> = () => {
    const [searchText, setSearchText] = React.useState<string>('');
    const [loading, setLoading] = React.useState(false);
    const [jobGroups, setJobGroups] = React.useState<JobGroupType[]>([])

    const handleSearchTextChange = React.useCallback((event: any) => {
        setSearchText(event.target.value)
    }, [])

    const getJobs = React.useCallback(async (search: string) => {
        setLoading(true)
        try {
            const responseGroups = await ClientService.requests.getJobs(search);
            setJobGroups(responseGroups)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }, [])

    React.useEffect(() => {
        if (searchText && searchText.length < 3) return;
        getJobs(searchText);
    }, [searchText])

    return (
        <div className='mb-14' id="vagas">
            <div className='jobs-header' />
            <div className='px-10 py-14 flex justify-between align-center'>
                <div className='font-bold text-[30px]'>Vagas em aberto</div>
                <div className='flex relative'>
                    <input
                        className='border-2 border-slate-200 p-2 pr-10 w-[20vw]'
                        placeholder='Nome da vaga'
                        value={searchText}
                        onChange={handleSearchTextChange}
                    />
                    <div className="absolute right-0 m-[10px]">
                        <SearchIcon />
                    </div>
                </div>
            </div>
            {jobGroups.map((jobGroup) => (
                <div key={jobGroup.name}>
                    <JobGroup group={jobGroup} />
                </div>
            ))}
        </div>
    );
}

export default JobSection;