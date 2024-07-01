import '@testing-library/jest-dom'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import JobCard from '../JobCard'
import { generateJob } from '@/app/tests/mocks'
import ClientService from '@/app/services/ClientService'

describe('JobCard', () => {
  beforeEach(() => {
    ClientService.requests.recordLog = jest.fn(async () => { })
  })

  it('Rendering', () => {
    const job = generateJob();

    render(<JobCard job={job} />)

    const jobTitle = screen.getByText(job.title);
    const joblocation = screen.getByText(job.location || '');

    expect(jobTitle).toHaveTextContent(job.title);
    expect(joblocation).toHaveTextContent(job.location || '');
  })

  it('Loging Click Event', async () => {
    const job = generateJob();

    render(<JobCard job={job} />)

    act(() => {
      fireEvent.click(screen.getByText(job.title));
    })

    await waitFor(() => {
      expect(ClientService.requests.recordLog).toHaveBeenCalledWith({ type: 'Click', name: 'JobClick', value: job });
    })
  })

  it('Open Dialog', async () => {
    const job = generateJob();

    render(<JobCard job={job} />)

    act(() => {
      fireEvent.click(screen.getByText(job.title));
    })

    await waitFor(() => {
      expect(screen.getByTestId("elo-dialog")).toBeTruthy();
    })

    expect(screen.getByTestId('dialog-job-title')).toHaveTextContent(job.title);
  })
})