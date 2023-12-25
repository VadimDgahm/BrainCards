import { toast } from 'react-toastify'

import { Profile, UpdateDataProfileType } from '@/components/ui/profile'
import {
  useEditProfileMutation,
  useGetMeQuery,
  useLogOutMutation,
} from '@/services/auth/authService'

export const PageProfile = () => {
  const [setEditProfile] = useEditProfileMutation()
  const { data } = useGetMeQuery()
  const [logOut] = useLogOutMutation()

  const onSubmitHandler = async (data: UpdateDataProfileType) => {
    toast.promise(setEditProfile(data), { error: 'error', pending: 'loading', success: 'success' })
  }

  return (
    <Profile
      avatar={data?.avatar}
      email={data?.email}
      logout={logOut}
      name={data?.name}
      onSubmit={onSubmitHandler}
    />
  )
}
