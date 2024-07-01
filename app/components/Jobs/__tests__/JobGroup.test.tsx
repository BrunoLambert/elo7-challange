import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import JobGroup from '../JobGroup'
import { generateJobGroup } from '@/app/tests/mocks'

describe('JobGroup', () => {
  it('Rendering', () => {
    const group = generateJobGroup();

    render(<JobGroup group={group} />)

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