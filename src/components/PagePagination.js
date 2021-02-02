import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Link, useParams } from 'react-router-dom';
import { useGetParams } from "../hooks/useGetParams";
import PaginationItem from './PaginationItem';

const PagePagination = ({ count }) => {
    const { page } = useGetParams();

    let pageNumbers = Math.ceil(count / 10); 
    let { entity } = useParams();

    return (
    <Pagination>
        <PaginationItem to={`/${entity}?page=1`}>{"«"}</PaginationItem>
        <PaginationItem to={`/${entity}?page=${page - 1}`}>{"<"}</PaginationItem>
        {count && [...Array(pageNumbers).keys()].map((index) => (
            <PaginationItem 
                isActive={index + 1 === +page} 
                to={`/${entity}?page=${index + 1}`} 
                key={index}
            >
                {index + 1}
            </PaginationItem>
        ))}

        {/* <Pagination.Ellipsis /> */}
        <PaginationItem to={`/${entity}?page=${+page + 1}`}>{">"}</PaginationItem>
        <PaginationItem to={`/${entity}?page=${pageNumbers}`}>{"»"}</PaginationItem>
    </Pagination>
    )
}

export default PagePagination;