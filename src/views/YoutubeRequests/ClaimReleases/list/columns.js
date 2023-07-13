import moment from "moment";

export const columns = [
  {
    name: "Date",
    minWidth: "180px",
    selector: (row) => row?.created_at,
    cell: (row) => <span>{moment(row?.created_at).format("DD MMM YYYY")}</span>,
  },
  {
    name: "URL",
    minWidth: "180px",
    selector: (row) => row?.claim_url,
    cell: (row) => <span>{row?.claim_url}</span>,
  },
  {
    name: "UPC/EAN",
    minWidth: "180px",
    selector: (row) => row?.claim_upc,
    cell: (row) => <span>{row?.claim_upc}</span>,
  },  
  {
    name: "User",
    minWidth: "180px",
    selector: (row) => row?.user,
    cell: (row) => <span>{row?.user?.first_name} {row?.user?.last_name}</span>,
  },
  {
    name: "Status",
    minWidth: "180px",
    selector: (row) => row?.current_status,
    cell: (row) => <span>{row?.current_status}</span>,
  },
];
