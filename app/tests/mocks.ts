import { Job, JobGroup, JobLevel } from "../types/jobs";
import { faker } from '@faker-js/faker'

const jobLevelsList: JobLevel[] = ['especialista', 'estágio', 'pleno', 'senior', 'junior'];

export const generateJob = (isActive?: boolean): Job => ({
    title: faker.commerce.productName(),
    type: faker.commerce.department(),
    level: faker.helpers.arrayElement(jobLevelsList),
    location: faker.location.city(),
    is_active: isActive !== undefined ? isActive : faker.datatype.boolean(0.7)
})

export const generateJobGroup = (): JobGroup => ({
    name: faker.commerce.department(),
    jobs: [...new Array(faker.helpers.rangeToNumber({ min: 1, max: 5 }))].map(i => generateJob(true))
})

export const generateJobGroups = (): JobGroup[] => (
    [...new Array(faker.helpers.rangeToNumber({ min: 1, max: 5 }))].map(i => generateJobGroup())
)