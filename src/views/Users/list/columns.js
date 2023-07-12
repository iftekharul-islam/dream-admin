import { Edit } from "react-feather";
import { useDispatch } from "react-redux";
import { emptyUploadData, toggleSidebarAction } from "../store";

const renderActions = (row) => {
  const dispatch = useDispatch();
  return (
    <div className="actions cursor-pointer">
      <div
        onClick={() => {
          dispatch(toggleSidebarAction());
          dispatch(emptyUploadData({ ...row, isEdit: true }));
        }}
      >
        <Edit size={20} />
      </div>
    </div>
  );
};

export const columns = [
  {
    name: "Name",
    minWidth: "180px",
    selector: (row) => row,
    cell: (row) => <span className="text-capitalize">{row?.first_name} {row?.last_name}</span>,
  },
  {
    name: "Username",
    minWidth: "180px",
    selector: (row) => row?.username,
    cell: (row) => <span>{row?.username}</span>,
  },  
  {
    name: "Govt. Id",
    minWidth: "180px",
    selector: (row) => row?.govt_id,
    cell: (row) => <span>{row?.govt_id}</span>,
  },  
  {
    name: "Email",
    minWidth: "180px",
    selector: (row) => row.email,
    cell: (row) => <span>{row.email}</span>,
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
    cell: (row) => renderActions(row),
  },
];
