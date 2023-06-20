import { DebounceInput } from "react-debounce-input";
import { PlusCircle } from "react-feather";
import { Button, Col, Input, Row } from "reactstrap";

const CustomHeader = ({ toggleSidebar, item, rowsPerPage, q, setParams, searchPlaceHolder, customComponent }) => {
  return (
    <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
      <Row>
        <Col xl="2" className="d-flex align-items-center p-0">
          <div className="d-flex align-items-center w-100">
            <label htmlFor="rows-per-page">Show</label>
            <Input
              className="mx-50"
              type="select"
              id="rows-per-page"
              value={rowsPerPage}
              onChange={(e) =>
                setParams({ rowsPerPage: e.currentTarget.value, page: 1})
              }
              style={{ width: "5rem" }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </Input>
            <label htmlFor="rows-per-page">Entries</label>
          </div>
        </Col>
        <Col xm="6">{customComponent}</Col>
        <Col
          xl="2"
          className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
        >
          <DebounceInput
            className="form-control ms-50 w-100"
            type="text"
            debounceTimeout={300}
            autoFocus
            placeholder={searchPlaceHolder}
            value={q}
            onChange={(e) => setParams({ q: e.target.value, page: 1 })}
          />
        </Col>

        <Col
          xl="2"
          className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
        >
          <div className="d-flex align-items-center table-header-actions">
            {item && (
              <Button
                className="add-new-user"
                color="primary"
                onClick={toggleSidebar}
              >
                <PlusCircle size={14} /> {item}
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomHeader;
