import { JobGroup } from "../types/jobs";
import { FrontRecordLog } from "../types/logs";

const request = async (path: string, data?: any) => {
    return new Promise<any>(async (resolve, reject) => {
        try {
            let response = await fetch(`api/${path}?` + new URLSearchParams(data).toString());
            response = await response.json();

            if (response.status >= 300) {
                reject(response);
            }

            resolve(response)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

const ClientService = {
    requests: {
        getJobs: async (search: string): Promise<JobGroup[]> => {
            return request('jobs', { search });
        },
        recordLog: (data: FrontRecordLog) => {
            return request('log', data)
        }
    }
}

export default ClientService;