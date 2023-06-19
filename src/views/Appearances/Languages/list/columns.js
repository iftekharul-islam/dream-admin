const renderActions = (id) => {
  return (
    <div className="actions cursor-pointer">
      <h5>{id}</h5>
    </div>
  );
};

export const columns = [
  {
    name: "Name",
    minWidth: "180px",
    selector: (row) => row.name,
    cell: (row) => <span className="text-capitalize">{row.name}</span>,
  },
  {
    name: "Status",
    minWidth: "120px",
    selector: (row) => row.current_status,
    cell: (row) => (
      <span className="text-capitalize">{row.current_status}</span>
    ),
  },
  {
    name: "Action",
    minWidth: "120px",
    selector: (row) => row?.id,
    cell: (row) => renderActions(row?.id),
  },
];
