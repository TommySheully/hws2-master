import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'

/*
* 1 - описать тип MessageType !
* 2 - описать тип MessagePropsType в файле Message.tsx !
* 3 - в файле Message.tsx отобразить приходящие данные !
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx !
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number,
    user: userType,
    message: messageType,
}

export type userType = {
    avatar: string,
    name: string,
}

export type messageType = {
    time: string,
    text: string,
}


// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg', // можно менять
        name: 'Димыч',  // можно менять
    },
    message: {
        text: 'Привет! Привет! Привет! Привет!', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg', // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'зеркальное сообщение', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
