import ServerService from '@/app/services/ServerService'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        ServerService.registerLog.record(req, { name: 'Front Log Route', value: req.query });
        res.status(200).json({});
    } catch (error: any) {
        ServerService.registerLog.error(req, error);
        res.status(500).json(error)
    }
}