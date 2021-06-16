import React from 'react';
import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch } from 'react-redux';
import { setCurrentPageAC } from '../../redux/actions/movies';

function Paginator({totalCount, currentPage, pageSize, portionSize}) {
    const dispatch = useDispatch()

    // Получаем кол-во всех страниц в пагинации
    const pagesCount = Math.ceil(totalCount/pageSize);
    const pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // Получаем кол-во порций страниц 
    const pagesPortion = Math.ceil(pagesCount / portionSize);

    //Получаем номер необходимой порции
    const [portionNumber, setPortionNumber] = useState(1);

    // Получаем левую и правую границы порции страниц
    const leftBorderPortionNum = (portionNumber - 1) * portionSize + 1;
    const rightBorderPortionNum = portionNumber * portionSize

    // Получаем необходимую нам порцию страниц для отображения

    const pagesPortionArr = pages.filter(page => leftBorderPortionNum <= page && page <= rightBorderPortionNum)

    // Получаем элементы пагинации для отображения
    const elemsPagination = pagesPortionArr.map(page => <Pagination.Item 
        key={page} 
        onClick={() => handleCurrentPage(page)} 
        className={page === currentPage && 'active'}>
            {page}</Pagination.Item>);
    

    const handleCurrentPage = (page) => {
        dispatch(setCurrentPageAC(page));
    }

    return (
        <div>
            <Pagination>
                <Pagination.First onClick={() => setPortionNumber(1)} />
                <Pagination.Prev disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)}/>
                    {elemsPagination}
                <Pagination.Next disabled={portionNumber === pagesPortion} onClick={() => setPortionNumber(portionNumber + 1)} />
                <Pagination.Last onClick={() => setPortionNumber(pagesPortion)} />
            </Pagination>
        </div>
    )
}

export default Paginator
