import React, { Dispatch, FC, SetStateAction } from 'react'

interface NotificationListProps {
    list:Array<any>;
    setDetail:Dispatch<SetStateAction<{}>>;
}

const NotificationList:FC<NotificationListProps> = ({list,setDetail}) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear().toString().slice(2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        return `${year}/${month}/${day} ${hours}:${minutes}`;
    };

    
  return (
    <div>
            {list && list.map((notification, index) => (
                <div key={notification.id} className='flex justify-between'>
                    <h3 className='hover:text-cyan-500 hover:cursor-pointer' onClick={()=>{setDetail(notification)}}>{notification.title}</h3>
                    <div className='flex gap-4'>
                        <p>작성자 : {notification.author_id}</p>
                        <p>{formatDate(notification.update_date)}</p>
                        </div>
                </div>
            ))}
        </div>
  )
}

export default NotificationList