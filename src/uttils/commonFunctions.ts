import { toast } from 'react-toastify'

import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const showResultToast = <T>(
  result: { data: T } | { error: FetchBaseQueryError | SerializedError }
) => {
  if (result.error) {
    toast.error(result.error?.data.errorMessages[0])
  } else {
    toast.success('Registration completed successfully')
  }
}
