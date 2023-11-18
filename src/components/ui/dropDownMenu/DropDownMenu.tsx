import s from './DropDownMenu.module.css'
import {FC, ReactNode} from 'react';

type PropsType = {
    width?: string
    children: ReactNode
}
export const DropDownMenu: FC<PropsType> = ({width = '217px', children}) => {
    return (
        <div style={{width: `${width}`}} className={s.container}>
            {children}
        </div>
    )
}