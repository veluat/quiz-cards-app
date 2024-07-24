import { Page } from '@/components/ui/page'
import { PersonalInformation } from '@/features'

export const ProfilePage = () => {
  /* const [profileData, setProfileData] = useState<ProfileDataType>({
    avatar: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/1a31ec80fdd1668f41682c4617620d3d',
    email: 'j&johnson@gmail.com',
    name: 'Jon Krieger',
  })*/

  return (
    <Page>
      <PersonalInformation />
    </Page>
  )
}
