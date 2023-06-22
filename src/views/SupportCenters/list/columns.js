
export const columns = [
  {
    name: "ID",
    minWidth: "60px",
    selector: (row) => row?.id,
    cell: (row) => <span className="text-capitalize">{row?.id}</span>,
  },
  {
    name: "Label",
    minWidth: "250px",
    selector: (row) => row?.title,
    cell: (row) => <span>{row?.title}</span>,
  },  
  {
    name: "User",
    minWidth: "120px",
    selector: (row) => row?.user,
    cell: (row) => <span className="text-capitalize">{row?.user?.name}</span>,
  },
  {
    name: "Status",
    minWidth: "120px",
    selector: (row) => row.current_status,
    cell: (row) => (
      <span className="text-capitalize">{row.current_status}</span>
    ),
  }
];
