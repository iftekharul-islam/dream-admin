import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import { getData, updateData } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { showData, options } = useSelector((state) => state.audios);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (showData) {
      setData({...showData, note: null});
    }
  }, [showData]);

  useEffect(() => {
    if (id) dispatch(getData(id));
  }, [id]);

  const changeStatus = (item) => {
    showData?.status != item?.value &&
      dispatch(updateData({ id, data: { ...data, status: item?.value } }));
  };

  const onChange = (e) => {
    setData({ ...data, [e?.target?.name]: e.target.value });
  };

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = data?.title;
    link.target = "_blank";
    link.click();
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <div>
            {/* <h4>
              <Button
                color="primary"
                className="me-1"
                onClick={() =>
                  setIsEdit(true)
                }
              >
                Edit
              </Button>
            </h4> */}
          </div>
          <div className="d-flex align-items-center my-1">
            {options?.status?.map((item) => {
              return (
                <Button
                  color={data?.status == item?.value ? "primary" : "secondary"}
                  className="me-1"
                  onClick={() => changeStatus(item)}
                >
                  {item?.label}
                </Button>
              );
            })}
          </div>
          <Input
            type="text"
            value={data?.note}
            name="note"
            onChange={onChange}
            placeholder="Note"
          />
        </CardHeader>
        <hr />
        <CardBody>
          <Row>
            <Col md="9">
              <div>
                <h3 className="mx-1">Audio Details</h3>
                <Row className="border rounded p-1">
                  <Col md="4">
                    <Label>Release Title</Label>
                    <Input
                      type="text"
                      value={data?.title}
                      name="title"
                      onChange={onChange}
                      placeholder="Title"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Version/Subtitle</Label>
                    <Input
                      type="text"
                      value={data?.subtitle}
                      name="subtitle"
                      onChange={onChange}
                      placeholder="Subtitle"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Label Name</Label>
                    <Input
                      type="text"
                      value={data?.label?.title}
                      name="label"
                      disabled
                      placeholder="Label"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Lyrics Language</Label>
                    <Input
                      type="text"
                      value={data?.lyrics_language?.name}
                      name="lyrics_language"
                      disabled
                      placeholder="Lyrics Language"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Genre</Label>
                    <Input
                      type="text"
                      value={data?.genre?.name}
                      name="genre"
                      disabled
                      placeholder="Genre"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Subgenre</Label>
                    <Input
                      type="text"
                      value={data?.subgenre?.name}
                      name="subgenre"
                      disabled
                      placeholder="Subgenre"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Main Release Date</Label>
                    <Input
                      type="text"
                      value={moment(data?.main_release_date).format(
                        "YYYY-MM-DD"
                      )}
                      name="main_release_date"
                      disabled
                      placeholder="Main Release Date"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Original Release Date </Label>
                    <Input
                      type="text"
                      value={moment(data?.original_release_date).format(
                        "YYYY-MM-DD"
                      )}
                      name="original_release_date"
                      disabled
                      placeholder="Original Release Date"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Format</Label>
                    <Input
                      type="text"
                      value={data?.format?.name}
                      name="format"
                      disabled
                      placeholder="Format"
                    />
                  </Col>
                  <Col md="4">
                    <Label>UPC/EAN</Label>
                    <Input
                      type="text"
                      value={data?.upc}
                      name="upc"
                      onChange={onChange}
                      placeholder="UPC/EAN"
                    />
                  </Col>
                  <Col md="4">
                    <Label>ISRC</Label>
                    <Input
                      type="text"
                      value={data?.isrc}
                      name="isrc"
                      onChange={onChange}
                      placeholder="ISRC"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Parental Advisory</Label>
                    <Input
                      type="text"
                      value={data?.parental_advisory?.name}
                      name="parental_advisory"
                      disabled
                      placeholder="Parental Advisory"
                    />
                  </Col>
                  <Col md="4">
                    <Label>℗ line</Label>
                    <Input
                      type="text"
                      value={data?.p_line}
                      name="p_line"
                      onChange={onChange}
                      placeholder="℗ line"
                    />
                  </Col>
                  <Col md="4">
                    <Label>© line</Label>
                    <Input
                      type="text"
                      value={data?.c_line}
                      name="c_line"
                      onChange={onChange}
                      placeholder="© line"
                    />
                  </Col>
                  <Col md="4">
                    <Label>Producer Catalogue Number</Label>
                    <Input
                      type="text"
                      value={data?.producer_catalogue_number}
                      name="producer_catalogue_number"
                      onChange={onChange}
                      placeholder="Producer Catalogue Number"
                    />
                  </Col>
                </Row>
              </div>
              {data?.writter && (
                <div>
                  <h3 className="mx-1 mt-2">Song Writer</h3>
                  <Row className="border rounded p-1">
                    <Col md="4">
                      <Label>Song Writers</Label>
                      <h5>{data?.writter}</h5>
                    </Col>
                  </Row>
                </div>
              )}
              {data?.artists?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Artists</h3>
                  <Row className="border rounded p-1">
                    {data?.artists?.map((item) => {
                      return (
                        <Col md="4">
                          <Label>
                            {item?.isPrimary
                              ? "Primary Artist"
                              : "Secondary Artist"}
                          </Label>
                          <h5>{item?.artist?.title}</h5>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}
              {data?.composers?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Composers</h3>
                  <Row className="border rounded p-1">
                    {data?.composers?.map((item) => {
                      return (
                        <Col md="4">
                          <Label>
                            {item?.isPrimary
                              ? "Primary Composer"
                              : "Secondary Composer"}
                          </Label>
                          <h5>{item?.composer}</h5>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}
              {data?.producers?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Producers</h3>
                  <Row className="border rounded p-1">
                    {data?.producers?.map((item) => {
                      return (
                        <Col md="4">
                          <Label>
                            {item?.isPrimary
                              ? "Primary Producer"
                              : "Secondary Producer"}
                          </Label>
                          <h5>{item?.producer}</h5>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}
              {data?.arrangers?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Arrangers</h3>
                  <Row className="border rounded p-1">
                    {data?.arrangers?.map((item) => {
                      return (
                        <Col md="4">
                          <Label>
                            {item?.isPrimary
                              ? "Primary Arranger"
                              : "Secondary Arranger"}
                          </Label>
                          <h5>{item?.arranger}</h5>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}
              {data?.remixers?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Remixers</h3>
                  <Row className="border rounded p-1">
                    {data?.remixers?.map((item) => {
                      return (
                        <Col md="4">
                          <Label>
                            {item?.isPrimary
                              ? "Primary Remixer"
                              : "Secondary Remixer"}
                          </Label>
                          <h5>{item?.remixer}</h5>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}
              {data?.featurings?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Featurings</h3>
                  <Row className="border rounded p-1">
                    {data?.featurings?.map((item) => {
                      return (
                        <Col md="4">
                          <Label>
                            {item?.isPrimary
                              ? "Primary Featuring"
                              : "Secondary Featuring"}
                          </Label>
                          <h5>{item?.featuring}</h5>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}
            </Col>
            <Col md="3">
              <div>
                <h3 className="mx-1">Player</h3>
                <div className="border rounded p-1">
                  {data?.images && data?.images?.image_download_url && (
                    <sapn>
                      <img
                        src={data?.images && data?.images?.image_download_url}
                        width="100%"
                      />
                      <Button
                        color="primary"
                        className="mt-2"
                        onClick={() =>
                          handleDownload(data?.images?.image_download_url)
                        }
                      >
                        Download Image
                      </Button>
                    </sapn>
                  )}

                  {data?.files && data?.files?.file_download_url && (
                    <video controls name="media" width="100%" height={60}>
                      <source
                        src={data?.files?.file_download_url}
                        type="audio/mpeg"
                      />
                    </video>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default index;
