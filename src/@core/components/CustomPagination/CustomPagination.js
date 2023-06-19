import "@styles/react/libs/tables/react-dataTable-component.scss";
import ReactPaginate from "react-paginate";

const CustomPagination = (
  current,
  total,
  currentPage,
  rowsPerPage,
  setCurrentPage
) => {
  const count = Number(Math.ceil(total / rowsPerPage));

  return (
    <span className="d-flex justify-content-between">
      <div className="d-flex align-items-center mx-2">
        Showing {current} out of {total} Entries
      </div>
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        pageCount={count || 1}
        activeClassName="active"
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => setCurrentPage(page.selected + 1)}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        containerClassName={
          "pagination react-paginate justify-content-end my-2 pe-1"
        }
      />
    </span>
  );
};

export default CustomPagination;
