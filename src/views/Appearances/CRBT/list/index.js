import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment } from "react";
import { Card } from "reactstrap";
import SideBar from "./SideBar";
import Table from "./Table";

const index = () => {
  return (
    <Fragment>
      <Card className="app-user-list">
        <Table />
      </Card>
      <SideBar />
    </Fragment>
  );
};

export default index;
