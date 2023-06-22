import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Card, Col, Row } from "reactstrap";
import CustomPagination from "../../../../@core/components/CustomPagination/CustomPagination";
import CustomHeader from "../../../../@core/components/CustomeHeader/CustomHeader";
import { emptyUploadData, setParams, toggleSidebarAction } from "../store";
import { columns } from "./columns";

const Table = () => {
  const dispatch = useDispatch();
  const { data, total, from, to, params, loading, options } = useSelector(
    (state) => state.claimReleases
  );

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
              item={null}
              searchPlaceHolder="Search by UPC"
              customComponent={
                <Row>
                  <Col sm="4"></Col>
                  <Col sm="4">
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      options={options?.user}
                      isClearable={true}
                      value={options?.user?.find(
                        (option) => option?.value == params?.user
                      )}
                      onChange={(e) =>
                        updateFilter({ user: e?.value, page: 1 })
                      }
                      placeholder="Select User"
                    />
                  </Col>
                  <Col sm="4">
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      options={options?.status}
                      isClearable={true}
                      value={options?.status?.find(
                        (option) => option?.value == params?.status
                      )}
                      onChange={(e) =>
                        updateFilter({ status: e?.value, page: 1 })
                      }
                      placeholder="Select Status"
                    />
                  </Col>
                </Row>
              }
            />
          }
          onRowClicked={(row) => {
            dispatch(toggleSidebarAction());
            dispatch(emptyUploadData({ ...row, isEdit: true }));
          }}
        />
      </Card>
    </Fragment>
  );
};

export default Table;
