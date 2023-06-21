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
  Label,
  Row,
} from "reactstrap";
import { getData, updateData } from "../store";

import { Pause, Play } from "react-feather";

const index = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { showData, options } = useSelector((state) => state.audios);

  useEffect(() => {
    if (id) dispatch(getData(id));
  }, [id]);

  const changeStatus = (item) => {
    showData?.status != item?.value &&
      dispatch(updateData({ id, data: { status: item?.value } }));
  };

  const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };
  
  const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);
  
    return (
      <div>
        {playing ? <Pause onClick={toggle} size={22} /> : <Play onClick={toggle} size={22} />}
      </div>
    );
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <div>
            <h4>{showData?.title}</h4>
          </div>
          <div className="d-flex align-items-center">
            {options?.status?.map((item) => {
              return (
                <Button
                  color={
                    showData?.status == item?.value ? "primary" : "secondary"
                  }
                  className="me-1"
                  onClick={() => changeStatus(item)}
                >
                  {item?.label}
                </Button>
              );
            })}
          </div>
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
                    <h5>{showData?.title ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>Version/Subtitle</Label>
                    <h5>{showData?.subtitle ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>Label Name</Label>
                    <h5>{showData?.label?.title ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>Lyrics Language</Label>
                    <h5>{showData?.title ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>Genre</Label>
                    <h5>{showData?.subtitle ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>Subgenre</Label>
                    <h5>{showData?.language?.name ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>Main Release Date</Label>
                    <h5>
                      {moment(showData?.main_release_date).format(
                        "DD MMM YYYY"
                      )}
                    </h5>
                  </Col>
                  <Col md="4">
                    <Label>Original Release Date </Label>
                    <h5>
                      {moment(showData?.original_release_date).format(
                        "DD MMM YYYY"
                      )}
                    </h5>
                  </Col>
                  <Col md="4">
                    <Label>Format</Label>
                    <h5>{showData?.format?.name ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>UPC/EAN</Label>
                    <h5>{showData?.upc ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>ISRC</Label>
                    <h5>{showData?.isrc ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>Parental Advisory</Label>
                    <h5>{showData?.parental_advisory?.name ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>℗ line</Label>
                    <h5>{showData?.p_line ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>© line</Label>
                    <h5>{showData?.c_line ?? "N/A"}</h5>
                  </Col>
                  <Col md="4">
                    <Label>Producer Catalogue Number</Label>
                    <h5>{showData?.producer_catalogue_number ?? "N/A"}</h5>
                  </Col>
                </Row>
              </div>
              {showData?.writter && (
                <div>
                  <h3 className="mx-1 mt-2">Song Writer</h3>
                  <Row className="border rounded p-1">
                    <Col md="4">
                      <Label>Song Writers</Label>
                      <h5>{showData?.writter}</h5>
                    </Col>
                  </Row>
                </div>
              )}
              {showData?.artists?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Artists</h3>
                  <Row className="border rounded p-1">
                    {showData?.artists?.map((item) => {
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
              {showData?.composers?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Composers</h3>
                  <Row className="border rounded p-1">
                    {showData?.composers?.map((item) => {
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
              {showData?.producers?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Producers</h3>
                  <Row className="border rounded p-1">
                    {showData?.producers?.map((item) => {
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
              {showData?.arrangers?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Arrangers</h3>
                  <Row className="border rounded p-1">
                    {showData?.arrangers?.map((item) => {
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
              {showData?.remixers?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Remixers</h3>
                  <Row className="border rounded p-1">
                    {showData?.remixers?.map((item) => {
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
              {showData?.featurings?.length > 0 && (
                <div>
                  <h3 className="mx-1 mt-2">Featurings</h3>
                  <Row className="border rounded p-1">
                    {showData?.featurings?.map((item) => {
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
                <h3 className="mx-1">Images</h3>
                <div className="border rounded p-1">

                <img src={showData?.images && showData?.images[0]?.image_download_url} width="100%" />  
                <Player url={showData?.files && showData?.files[0]?.file_download_url} className="border rounded p-1 my-1" />                
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
