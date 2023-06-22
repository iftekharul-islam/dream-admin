import moment from "moment";

export const columns = [
  {
    name: "Date",
    minWidth: "180px",
    selector: (row) => row?.created_at,
    cell: (row) => <span>{moment(row?.created_at).format("DD MMM YYYY")}</span>,
  },
  {
    name: "Channel Link",
    minWidth: "180px",
    selector: (row) => row?.artist_channel_link,
    cell: (row) => <span>{row?.artist_channel_link}</span>,
  },
  {
    name: "Topic Link",
    minWidth: "180px",
    selector: (row) => row?.artist_topic_link,
    cell: (row) => <span>{row?.artist_topic_link}</span>,
  },
  {
    name: "UPC/EAN1",
    minWidth: "180px",
    selector: (row) => row?.artist_upc1,
    cell: (row) => <span>{row?.artist_upc1}</span>,
  },
  {
    name: "UPC/EAN2",
    minWidth: "180px",
    selector: (row) => row?.artist_upc2,
    cell: (row) => <span>{row?.artist_upc2}</span>,
  },
  {
    name: "UPC/EAN3",
    minWidth: "180px",
    selector: (row) => row?.artist_upc3,
    cell: (row) => <span>{row?.artist_upc3}</span>,
  },
  {
    name: "User",
    minWidth: "180px",
    selector: (row) => row?.user?.name,
    cell: (row) => <span>{row?.user?.name}</span>,
  },
  {
    name: "Status",
    minWidth: "180px",
    selector: (row) => row?.current_status,
    cell: (row) => <span>{row?.current_status}</span>,
  },
];
