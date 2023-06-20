import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "reactstrap";
import CustomPagination from "../../../../@core/components/CustomPagination/CustomPagination";
import CustomHeader from "../../../../@core/components/CustomeHeader/CustomHeader";
import {
  setParams,
  toggleSidebarAction
} from "../store";
import { columns } from "./columns";

const Table = () => {
  const dispatch = useDispatch();
  const {
    data,
    total,
    from,
    to,
    params,
    loading,
  } = useSelector((state) => state.genres);



  const updateFilter = (item) => {
    dispatch(setParams(item));
  };

  const toggleSidebar = () => {
    dispatch(toggleSidebarAction());
  };
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
              from,
              to,
              total,
              params?.page,
              params?.rowsPerPage,
              updateFilter
            )
          }
          data={data}
          progressPending={loading}
          highlightOnHover
          persistTableHead
          subHeaderComponent={
            <CustomHeader
              toggleSidebar={toggleSidebar}
              setParams={updateFilter}
              rowsPerPage={params?.rowsPerPage}
              q={params?.q}
              item="Genre"
              searchPlaceHolder="Search by Genre Name"
            />
          }
        />
      </Card>
    </Fragment>
  );
};

export default Table;
