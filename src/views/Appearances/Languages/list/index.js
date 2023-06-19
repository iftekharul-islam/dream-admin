import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
// import Sidebar from "./Sidebar";
import { Card } from "reactstrap";
import CustomPagination from "../../../../@core/components/CustomPagination/CustomPagination";
import CustomHeader from "../../../../@core/components/CustomeHeader/CustomHeader";
import { getAllData, setParams, toggleSidebarAction } from "../store";
import { columns } from "./columns";

// const CustomHeader = ({
//   store,
//   toggleSidebar,
//   handlePerPage,
//   rowsPerPage,
//   handleFilter,
//   searchTerm,
// }) => {
//   return (
//     <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
//       <Row>
//         <Col xl="6" className="d-flex align-items-center p-0">
//           <div className="d-flex align-items-center w-100">
//             <label htmlFor="rows-per-page">Show</label>
//             <Input
//               className="mx-50"
//               type="select"
//               id="rows-per-page"
//               value={rowsPerPage}
//               onChange={handlePerPage}
//               style={{ width: "5rem" }}
//             >
//               <option value="10">10</option>
//               <option value="25">25</option>
//               <option value="50">50</option>
//             </Input>
//             <label htmlFor="rows-per-page">Entries</label>
//           </div>
//         </Col>
//         <Col
//           xl="6"
//           className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
//         >
//           <div className="d-flex align-items-center mb-sm-0 mb-1 me-1">
//             <label className="mb-0" htmlFor="search-invoice">
//               Search:
//             </label>
//             <Input
//               id="search-invoice"
//               className="ms-50 w-100"
//               type="text"
//               value={searchTerm}
//               onChange={(e) => handleFilter(e.target.value)}
//             />
//           </div>

//           <div className="d-flex align-items-center table-header-actions">
//             {store.permission.isCreate && (
//               <Button
//                 className="add-new-user"
//                 color="primary"
//                 onClick={toggleSidebar}
//               >
//                 <UserPlus size={14} /> Employee
//               </Button>
//             )}
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

const index = () => {
  const dispatch = useDispatch();
  const { data, total, current, params, pagination } = useSelector(
    (state) => state.languages
    );
    console.log("🚀 ~ file: index.js:79 ~ index ~ params:", params)

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  const setCurrentPage = (page) => {
    console.log(page);
  };

  const updateFilter = (item) => {
    dispatch(setParams(item));
  };

  const toggleSidebar = () => {
    dispatch(toggleSidebarAction());
  }

  return (
    <Fragment>
      <Card className="app-user-list">
        <DataTable
          noHeader
          subHeader
          pagination
          responsive
          paginationServer
          columns={columns}
          className="react-dataTable"
          paginationComponent={() =>
            CustomPagination(
              current,
              total,
              pagination?.currentPage,
              params?.rowsPerPage,
              setCurrentPage
            )
          }
          data={data}
          subHeaderComponent={
            <CustomHeader
              toggleSidebar={toggleSidebar}
              setParams={updateFilter}
              rowsPerPage={params?.rowsPerPage}
              q={params?.q}
              item="Language"
            />
          }
        />
      </Card>

      {/* <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
    </Fragment>
  );
};

export default index;
