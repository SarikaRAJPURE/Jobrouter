import React from 'react'
import {
    HiChevronDoubleLeft,
    HiChevronDoubleRight,
} from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import {
    useLocation,
    Link,
    useNavigate,
} from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJobs";

const PageBtnContainer = () => {
    const { data: { numOfPages, currentPage } } = useAllJobsContext();
    //console.log(numOfPages, currentPage);
    const pages = Array.from({ length: numOfPages }, (_, index) => { return index + 1 });
    //console.log(pages);

    const { search, pathname } = useLocation();
    const navigate = useNavigate();
    console.log(search, pathname);

    const handlePageChange = (pageNumber) => {
        //get my instance
        const searchParams = new URLSearchParams(search);
        console.log(searchParams);
        //console.log(pageNumber);
        //add a extra query param called page
        searchParams.set('page', pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
    }
    return (
        <Wrapper>
            <button className="btn prev-btn"
                onClick={() => {
                    let prevPage = currentPage - 1;
                    if (prevPage < 1) prevPage = numOfPages;
                    handlePageChange(prevPage);
                }}
            >
                <HiChevronDoubleLeft />
            </button>
            <div className="btn-container">
                {pages.map((pageNumber) => {
                    return <button
                        className={`btn page-btn ${pageNumber === currentPage && 'active'}`}
                        key={pageNumber}
                        onClick={() => { handlePageChange(pageNumber); }}
                    >
                        {pageNumber}
                    </button>
                })}
            </div>
            <button className="btn prev-btn"
                onClick={() => {
                    let nextPage = currentPage + 1;
                    if (nextPage > numOfPages) nextPage = 1;
                    handlePageChange(nextPage);
                }}
            >
                next<HiChevronDoubleRight />
            </button>
        </Wrapper>
    )
}

export default PageBtnContainer
