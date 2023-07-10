import { Edit } from "react-feather";
import { useDispatch } from "react-redux";
import { emptyUploadData, toggleSidebarAction } from "../store";

const renderActions = (row) => {
  const dispatch = useDispatch();
  return (
    <div className="actions cursor-pointer">
      <div onClick={()=>{
        dispatch(toggleSidebarAction());
        dispatch(emptyUploadData({...row, isEdit: true}))
      }}>
        <Edit size={20} />
      </div>      
    </div>
  );
};

export const columns = [
  {
    name: "Name",
    minWidth: "180px",
    selector: (row) => row?.title,
    cell: (row) => <span className="text-capitalize">{row?.title}</span>,
  },
  {
    name: "Icon",
    minWidth: "180px",
    selector: (row) => row.icon,
    cell: (row) => <span className="text-capitalize">{row.icon}</span>,
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
