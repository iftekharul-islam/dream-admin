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
    selector: (row) => row.name,
    cell: (row) => <span className="text-capitalize">{row.name}</span>,
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
