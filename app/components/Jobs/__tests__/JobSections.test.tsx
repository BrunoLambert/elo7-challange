import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import JobSection from '../Section'
import ClientService from '@/app/services/ClientService'
import { generateJobGroups } from '@/app/tests/mocks'

describe('JobSection', () => {
    const groups = generateJobGroups();

    beforeAll(() => {
        ClientService.requests.getJobs = jest.fn(async () => {
            return groups;
        })
    });

    it('Rendering', async () => {
        render(<JobSection />);

        const sectionTitle = screen.getByText('Vagas em aberto');
        const sectionSearch = screen.getAllByTestId('jobsearch');

        expect(sectionTitle).toBeTruthy();
        expect(sectionSearch).toBeTruthy();

        await waitFor(() => {
            groups.forEach(group => {
                const groupName = screen.getByText(group.name);

                expect(groupName).toHaveTextContent(group.name);

                group.jobs.forEach(job => {
                    const jobTitle = screen.getByText(job.title);
                    const joblocation = screen.getByText(job.location || '');

                    expect(jobTitle).toHaveTextContent(job.title);
                    expect(joblocation).toHaveTextContent(job.location || '');
                })
            })
        })
    })
})