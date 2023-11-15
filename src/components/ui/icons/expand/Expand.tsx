import { FC } from 'react'

import { determineVersion } from '@/components/ui/icons/settingsIcons'
import { IconProps } from '@/components/ui/icons/typeIcons'

import s from '../Icons.module.scss'

export const Expand: FC<IconProps> = ({ color = '', version = 'dark', ...rest }) => {
  return (
    <svg
      {...rest}
      className={`${s.svg} ${rest.className} `}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H14C13.7348 4 13.4804 4.10536 13.2929 4.29289C13.1054 4.48043 13 4.73478 13 5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6H16.57L13.29 9.29C13.1963 9.38296 13.1219 9.49356 13.0711 9.61542C13.0203 9.73728 12.9942 9.86799 12.9942 10C12.9942 10.132 13.0203 10.2627 13.0711 10.3846C13.1219 10.5064 13.1963 10.617 13.29 10.71C13.383 10.8037 13.4936 10.8781 13.6154 10.9289C13.7373 10.9797 13.868 11.0058 14 11.0058C14.132 11.0058 14.2627 10.9797 14.3846 10.9289C14.5064 10.8781 14.617 10.8037 14.71 10.71L18 7.42V10C18 10.2652 18.1054 10.5196 18.2929 10.7071C18.4804 10.8946 18.7348 11 19 11C19.2652 11 19.5196 10.8946 19.7071 10.7071C19.8946 10.5196 20 10.2652 20 10V5Z"
        fill={color ? color : determineVersion(version)}
      />
      <path
        d="M10.71 13.29C10.617 13.1963 10.5064 13.1219 10.3846 13.0711C10.2627 13.0203 10.132 12.9942 10 12.9942C9.86799 12.9942 9.73728 13.0203 9.61542 13.0711C9.49356 13.1219 9.38296 13.1963 9.29 13.29L6 16.57V14C6 13.7348 5.89464 13.4804 5.70711 13.2929C5.51957 13.1054 5.26522 13 5 13C4.73478 13 4.48043 13.1054 4.29289 13.2929C4.10536 13.4804 4 13.7348 4 14V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H10C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19C11 18.7348 10.8946 18.4804 10.7071 18.2929C10.5196 18.1054 10.2652 18 10 18H7.42L10.71 14.71C10.8037 14.617 10.8781 14.5064 10.9289 14.3846C10.9797 14.2627 11.0058 14.132 11.0058 14C11.0058 13.868 10.9797 13.7373 10.9289 13.6154C10.8781 13.4936 10.8037 13.383 10.71 13.29Z"
        fill={color ? color : determineVersion(version)}
      />
    </svg>
  )
}
