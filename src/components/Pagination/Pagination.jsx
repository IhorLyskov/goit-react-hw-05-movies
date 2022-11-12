import ReactPaginate from 'react-paginate';
import './Pagination.css';

function Pagination({ totalPages, setPage, currentPage }) {
  const handlePageClick = event => {
    setPage({ page: event.selected + 1 });
  };

  return (
    <>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="item"
        breakLinkClassName="link"
        onPageChange={handlePageClick}
        forcePage={currentPage}
        containerClassName="pagination"
        pageClassName="item"
        pageLinkClassName="link"
        activeClassName="active"
        previousClassName="prev"
        nextClassName="next"
        previousLinkClassName="link"
        nextLinkClassName="link"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
