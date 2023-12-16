import { toast } from 'react-toastify'

import { Profile, UpdateDataProfileType } from '@/components/ui/profile'
import { useEditProfileMutation } from '@/src/services/auth/authService'

export const PageProfile = () => {
  const [setEditProfile] = useEditProfileMutation()
  const onSubmitHandler = async (data: UpdateDataProfileType) => {
    toast.promise(setEditProfile(data), { error: 'error', pending: 'loading', success: 'success' })
  }

  return <Profile onSubmit={onSubmitHandler} />
}
