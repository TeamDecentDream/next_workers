import React, { Dispatch, FC, SetStateAction } from 'react'

interface SignificantListProps {
    list:Array<any>;
    setDetail:Dispatch<SetStateAction<{}>>;
}

const SignificantList:FC<SignificantListProps> = ({list,setDetail}) => {
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
            {list && list.map((significant, index) => (
                <div key={significant.id} className='flex justify-between cursor-pointer hover:text-cyan-500' onClick={()=>{setDetail(significant)}}>
            
                        <p>작성자 : {significant.author_id}</p>
                        <p>{formatDate(significant.update_date)}</p>
                    
                </div>
            ))}
        </div>
  )
}

export default SignificantList