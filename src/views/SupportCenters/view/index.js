// import moment from "moment";
// import { Fragment, useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Button, Card, CardBody, CardHeader } from "reactstrap";
// import { getData, sendMsg, updateData } from "../store";
// import './styles.css';

// const index = () => {
//   const dispatch = useDispatch();
//   const [message, setMessage] = useState("");
//   const { id } = useParams();
//   const { showData, options } = useSelector((state) => state.supportCenters);
//   const messagesContainerRef = useRef(null);

//   useEffect(() => {
//     if (id) dispatch(getData(id));
//   }, [id]);

//   const changeStatus = (item) => {
//     if (showData?.status !== item?.value) {
//       dispatch(updateData({ id, data: { status: item?.value } }));
//     }
//   };

//   const sendMessage = async () => {
//     if (message.trim() !== "") {
//       dispatch(sendMsg({ message, support_ticket_id: id, sender: 1 }));
//       setMessage("");
//     }
//   };

//   useEffect(() => {
//     const handleWheelEvent = (event) => {
//       event.preventDefault();
//       const container = document.getElementById('scrollable-container');
//       const containerScrollPosition = container.scrollTop;
//       container.scrollTo({
//         top: containerScrollPosition + event.deltaY,
//         behavior: 'smooth',
//       });
//     };

//     const container = document.getElementById('scrollable-container');
//     container.addEventListener('wheel', handleWheelEvent);

//     return () => {
//       container.removeEventListener('wheel', handleWheelEvent);
//     };
//   }, []);

//   return (
//     <Fragment>
//       <Card>
//         <CardHeader>
//           <div>
//             <h4>
//               {showData?.user?.name} - {showData?.user?.email}
//             </h4>
//           </div>
//           <div className="d-flex align-items-center">
//             {options?.status?.map((item) => (
//               <Button
//                 key={item.value}
//                 color={showData?.status === item?.value ? "primary" : "secondary"}
//                 className="me-1"
//                 onClick={() => changeStatus(item)}
//               >
//                 {item?.label}
//               </Button>
//             ))}
//           </div>
//         </CardHeader>
//         <hr />
//         <CardBody>
//           <div
//             className="border rounded p-1 d-flex flex-column"
//             style={{ height: "60vh" }}
//             ref={messagesContainerRef}
//           >
//             <div id="scrollable-container" className="scrollable-content fixed-bottom">
//               {showData?.messages?.map((item, index) => {
//                 const isUserMessage = item?.sender === 1;
//                 const messageClass = isUserMessage
//                   ? "bg-primary text-white"
//                   : "bg-secondary text-white";

//                 return (
//                   <div
//                     key={index}
//                     className={`d-flex align-items-center justify-content-${
//                       isUserMessage ? "end" : "start"
//                     } my-1`}
//                   >
//                     {isUserMessage && (
//                       <span className="px-1">
//                         {moment(item?.created_at).format("hh:mm on DD MMM YY")}
//                       </span>
//                     )}
//                     <div className={`p-1 rounded ${messageClass}`}>
//                       {item?.message}
//                     </div>
//                     {!isUserMessage && (
//                       <span className="px-1">
//                         {moment(item?.created_at).format("hh:mm on DD MMM YY")}
//                       </span>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="mt-2 px-1">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Type your message here..."
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <button className="btn btn-primary" onClick={sendMessage}>
//                   Send
//                 </button>
//               </div>
//             </div>
//           </div>
//         </CardBody>
//       </Card>
//     </Fragment>
//   );
// };

// export default index;

import moment from "moment";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { getData, sendMsg, updateData } from "../store";

function ChatWindow({ data }) {
  const chatWindowRef = useRef(null);

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [data?.messages]);

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = event.deltaY || event.detail || -event.wheelDelta;
      chatWindowRef.current.scrollTop += delta;
      event.preventDefault();
    };

    const chatWindowElement = chatWindowRef.current;
    chatWindowElement.addEventListener("wheel", handleScroll, {
      passive: false,
    });

    return () => {
      chatWindowElement.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="chat-window">
      <h2>Chat with {data?.user?.name}</h2>
      <ul
        className="list-group"
        ref={chatWindowRef}
        style={{
          height: "400px",
          overflow: "hidden",
        }}
      >
        {data?.messages?.map((message) => {
          let adminClass = message?.sender == 2 ? true : false;
          return (
            <li
              key={message.id}
              className={`list-group-item d-flex align-items-center justify-content-${
                adminClass ? "end" : "start"
              } px-1`}
            >
              {adminClass && (
                <small>
                  {moment(message?.created_at).format("hh:mm on DD MMM YY")}{" "}
                </small>
              )}
              <strong className="px-1">{message?.message}</strong>{" "}
              {!adminClass && (
                <small>
                  {moment(message?.created_at).format("hh:mm on DD MMM YY")}{" "}
                </small>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function MessageInput({ sendMessage, support_ticket_id }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    setMessage("");
    sendMessage({ message, support_ticket_id });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="message-input mt-2 d-flex">
      <input
        type="text"
        className="form-control"
        value={message}
        onChange={handleMessageChange}
        onKeyUp={handleKeyPress}
        placeholder="Type a message"
      />
      <button className="btn btn-primary mx-1" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
}

function index() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { showData, options } = useSelector((state) => state.supportCenters);

  useEffect(() => {
    if (id) dispatch(getData(id));
  }, [id]);

  const changeStatus = (item) => {
    if (showData?.status !== item?.value) {
      dispatch(updateData({ id, data: { status: item?.value } }));
    }
  };

  const sendMessage = async (data) => {
    dispatch(sendMsg(data));
  };
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <div>
            <h4>
              {showData?.user?.name} - {showData?.user?.email}
            </h4>
          </div>
          <div className="d-flex align-items-center">
            {options?.status?.map((item) => (
              <Button
                key={item.value}
                color={
                  showData?.status === item?.value ? "primary" : "secondary"
                }
                className="me-1"
                onClick={() => changeStatus(item)}
                disabled={showData?.status === 3}
              >
                {item?.label}
              </Button>
            ))}
          </div>
        </CardHeader>
        <hr />
        <CardBody>
          <Row>
            <Col md="2"></Col>
            <Col md="8">
              <ChatWindow data={showData} />
              {showData?.status !=3 && <MessageInput sendMessage={sendMessage} support_ticket_id={id} />}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default index;
