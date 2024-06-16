import { useState } from 'react'

import { Page } from '@/components/ui/page'
import { EditProfileValues, PersonalInformation, ProfileDataType } from '@/features'

export const ProfilePage = () => {
  const [profileData, setProfileData] = useState<ProfileDataType>({
    avatar: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/1a31ec80fdd1668f41682c4617620d3d',
    email: 'j&johnson@gmail.com',
    name: 'Jon Krieger',
  })

  const updateProfileData = (data: EditProfileValues) => {
    // запрос будет
    setProfileData(prevData => ({
      ...prevData,
      name: data.name,
    }))
  }

  return (
    <Page>
      <PersonalInformation data={profileData} update={updateProfileData} />
    </Page>
  )
}
