import ServerService from '@/app/services/ServerService'
import { JobGroup, JobsApiResponse } from '@/app/types/jobs';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<JobGroup[]>
) {
    try {
        const resp = await ServerService.requests.getJobs();
        const responseData: JobsApiResponse = resp.data;

        const formattedResopnse: JobGroup[] = [];
        const searchText = req.query.search as string;

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
        res.status(500).json(error)
    }
}