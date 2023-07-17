import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardBody, CardHeader, Col, Input, Label, Row } from "reactstrap";
import { getAllData, setData, updateData } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { data } = useSelector((state) => state.settings);

  const getData = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const submit = async(e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(updateData());
    setLoading(false);
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">Settings</h4>
        </CardHeader>
        <CardBody>
          {loading ? (
            <div className="text-center d-flex align-items-center justify-content-center">
              <div className="spinner-border"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <span>
            <Row>
              <Col md="3">
                <Label>Whatsapp Number</Label>
                <Input
                  type="text"
                  name="whatsapp"
                  value={data?.whatsapp}
                  onChange={(e) => {
                    dispatch(setData({ whatsapp: e.target.value }));
                  }}
                />
              </Col>
              <Col md="3">
                <Label>Minimum Withdraw</Label>
                <Input
                  type="number"
                  name="min_withdraw"
                  value={data?.min_withdraw}
                  onChange={(e) => {
                    dispatch(setData({ min_withdraw: e.target.value }));
                  }}
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-end mt-1">
              <Col md="1">
                <Button color="primary" onClick={submit}>
                  Update
                </Button>
              </Col>
            </Row>
            </span>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default index;
