import { MemoryRouter } from 'react-router-dom'

import { PersonalInformation } from '@/features/profile/ui/personal-information/personal-information'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PersonalInformation> = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Profile/Personal Information',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: {
      avatar: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/1a31ec80fdd1668f41682c4617620d3d',
      email: 'j&johnson@gmail.com',
      name: 'Jon Krieger',
    },
    update: data => {
      console.log('Updating profile:', data)
    },
  },
  decorators: [story => <MemoryRouter>{story()}</MemoryRouter>],
}
