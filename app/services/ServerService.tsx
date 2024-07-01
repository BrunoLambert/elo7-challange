import axios from "axios";
import { NextApiRequest } from "next";
import { RecordLog } from "../types/logs";

const MockApi = axios.create({
    baseURL: 'https://run.mocky.io/v3/8fc51aca-478a-4802-945b-688855d78e36'
})

const ServerService = {
    requests: {
        getJobs: async () => {
            return MockApi.get('');
        },
    },
    registerLog: {
        error: async (req: NextApiRequest, data: any) => {
            // API or Manager Call
            console.error(req, data)
        },
        record: (req: NextApiRequest, data: RecordLog) => {
            // API or Manager Call
            console.log(req, data)
        }
    }
}

export default ServerService;