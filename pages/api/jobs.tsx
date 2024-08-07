import ServerService from '@/app/services/ServerService'
import { JobGroup, JobsApiResponse } from '@/app/types/jobs';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<JobGroup[]>
) {
    try {
        const resp = await ServerService.requests.getJobs();
        const responseData: JobsApiResponse = resp.data;

        const formattedResopnse: JobGroup[] = [];
        const searchText = req.query.search as string;
        ServerService.registerLog.record(req, { name: 'Job Search Query', value: searchText })

        responseData.jobs.forEach(job => {
            if (searchText && !job.title.includes(searchText.toLowerCase())) return;

            const groupIndex = formattedResopnse.findIndex(fr => fr.name === job.type)

            if (groupIndex >= 0) {
                formattedResopnse[groupIndex].jobs.push(job);
            } else {
                formattedResopnse.push({
                    name: job.type,
                    jobs: [job]
                })
            }
        })

        res.status(200).json(formattedResopnse);
    } catch (error: any) {
        ServerService.registerLog.error(req, error);
        res.status(500).json(error)
    }
}