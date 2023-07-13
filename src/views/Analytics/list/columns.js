import moment from "moment";

export const columns = [
  {
    name: "Date",
    minWidth: "180px",
    selector: (row) => row?.created_at,
    cell: (row) => <span>{moment(row?.created_at).format("DD MMM YYYY")}</span>,
  },
  {
    name: "Year",
    minWidth: "180px",
    selector: (row) => row?.year,
    cell: (row) => <span>{row?.year}</span>,
  },
  {
    name: "Month",
    minWidth: "180px",
    selector: (row) => row?.month,
    cell: (row) => <span>{row?.month}</span>,
  },
  {
    name: "Label",
    minWidth: "180px",
    selector: (row) => row?.label?.title,
    cell: (row) => <span>{row?.label?.title}</span>,
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
