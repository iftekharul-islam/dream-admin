import { Edit } from "react-feather";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
    name: "Title",
    minWidth: "180px",
    selector: (row) => row.title,
    cell: (row) => <span className="text-capitalize">{row.title}</span>,
  },
  {
    name: "Youtube Link",
    minWidth: "180px",
    selector: (row) => row?.youtube_url,
    cell: (row) => (
      <Link to={row?.youtube_url} target="_blank">
        {row?.youtube_url?.length > 20
          ? row?.youtube_url?.slice(0, 20) + "..."
          : row?.youtube_url}
      </Link>
    ),
  },
  {
    name: "Message",
    minWidth: "400px",
    selector: (row) => row?.message,
    cell: (row) => (
      <span>
        {row?.message?.length > 70
          ? row?.message?.slice(0, 70) + "..."
          : row?.message}
      </span>
    ),
  },
  {
    name: "User",
    minWidth: "120px",
    selector: (row) => row?.user,
    cell: (row) => <span>{row?.user?.first_name} {row?.user?.last_name}</span>,
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
