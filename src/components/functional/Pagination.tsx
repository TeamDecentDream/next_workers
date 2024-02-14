import React, { Dispatch, FC, SetStateAction } from 'react';

interface PaginationProps {
    page:number;
    setPage:Dispatch<SetStateAction<number>>
    maxPage:number;
}

export const Pagination: FC<PaginationProps> = ({ page, setPage, maxPage }) => {
    if (maxPage <= 0) {
        return null; // 유효하지 않은 maxPage일 경우 아무것도 렌더링하지 않음
      }


  return (
    <div className="absolute bottom-4 right-4 flex gap-4">
      <button onClick={() => { if (page > 1) { setPage(prev => prev - 1) } }}>이전</button>
      {[...Array(maxPage)].map((_, index) => (
        <button key={index} onClick={() => setPage(index + 1)}>{index + 1}</button>
      ))}
      <button onClick={() => { if (page < maxPage) { setPage(prev => prev + 1) } }}>다음</button>
    </div>
  );
}

export default Pagination;
