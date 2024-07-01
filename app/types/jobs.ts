export type JobLevel = 'especialista' | 'estágio' | 'pleno' | 'senior' | 'junior';

export interface Job {
    "title": string,
    "type": string,
    "level": JobLevel,
    "location"?: string,
    "is_active": boolean,
}

export interface JobsApiResponse {
    jobs: Job[];
}

export interface JobGroup {
    name: string,
    jobs: Job[];
}