import {FC} from 'react';
import s from './MenuContentWichAvatar.module.css'
import defaultAvatar from '../../../img/avatar.png'

type PropsType = {
    avatar?: string,
    name: string,
    url: string
    onClickAvatar?: () => void
    isLine?: boolean
}
export const MenuContentWithAvatar: FC<PropsType> = ({avatar, url, name, onClickAvatar, isLine= true}) => {
    return (
        <div className={`${s.content} ${isLine && s.line}`}>
            <img onClick={onClickAvatar} className={`${s.avatar} ${!!onClickAvatar && s.clickAvatar}`}
                 src={avatar ? avatar : defaultAvatar} alt=""/>
            <div className={s.info}>
                <h4 onClick={onClickAvatar} className={`${s.name} `}>{name}</h4>
                <a className={s.url}>{url}</a>
            </div>
        </div>
    )
}