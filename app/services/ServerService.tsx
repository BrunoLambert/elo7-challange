import axios from "axios";

const MockApi = axios.create({
    baseURL: 'https://run.mocky.io/v3/9b149b20-a57c-4d03-a49b-3e67dc1fc715'
})

const ServerService = {
    requests: {
        getJobs: async () => {
            return MockApi.get('');
        }
    }
}

export default ServerService;