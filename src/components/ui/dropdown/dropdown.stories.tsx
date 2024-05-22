import { Avatar } from '@/components/ui/avatar'
import { DropDown, DropDownItem, DropDownItemWithIcon } from '@/components/ui/dropdown'
import { ProfileInfo } from '@/components/ui/header/profile-info'
import { Icon } from '@/components/ui/icon/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDown>

export default meta

type Story = StoryObj<typeof meta>

// @ts-ignore
export const Default: Story = {
  render: () => {
    return (
      <div style={{ marginLeft: 200 }}>
        <DropDown>
          <DropDownItemWithIcon
            icon={<Icon height={16} name={'play'} width={16} />}
            text={'Learn'}
          />
          <DropDownItemWithIcon
            icon={<Icon height={16} name={'edit'} width={16} />}
            text={'Edit'}
          />
          <DropDownItemWithIcon
            icon={<Icon height={16} name={'delete'} width={16} />}
            text={'Delete'}
          />
        </DropDown>
      </div>
    )
  },
}

// @ts-ignore
export const WithProfile: Story = {
  render: () => {
    const userData = {
      avatar: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/1a31ec80fdd1668f41682c4617620d3d',
      email: 'blackbraid.gmail.com',
      name: 'Jon',
    }

    return (
      <div style={{ marginLeft: 200 }}>
        <DropDown
          trigger={
            <button style={{ all: 'unset', cursor: 'pointer' }}>
              <Avatar
                image={
                  'https://lastfm.freetls.fastly.net/i/u/avatar170s/1a31ec80fdd1668f41682c4617620d3d'
                }
                userName={'Jon'}
              />
            </button>
          }
        >
          <DropDownItem>
            <ProfileInfo {...userData} />
          </DropDownItem>
          <DropDownItemWithIcon
            icon={<Icon height={16} name={'user'} width={16} />}
            text={'My profile'}
          />
          <DropDownItemWithIcon
            icon={<Icon height={16} name={'logout'} width={16} />}
            text={'Sign out'}
          />
        </DropDown>
      </div>
    )
  },
}
