import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "reactstrap";
import { getAllData } from "../store";
import SideBar from "./SideBar";
import Table from "./Table";

const index = () => {
  const dispatch = useDispatch();
  const { params } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getAllData());
  }, [params]);

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
