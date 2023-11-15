import {FC} from 'react';
import s from './MenuContent.module.css'

type PropsType = {
    svgIcon: any,
    title: string,
    onClick: () => void
    isLine?: boolean
}
export const MenuContent: FC<PropsType> = ({isLine = true, svgIcon, title, onClick}) => {
    return (
        <div className={`${s.content} ${isLine && s.line}`} onClick={onClick}>
            {svgIcon}
            <div className={s.title}>{title}</div>
        </div>
    )
}