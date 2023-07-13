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
    minWidth: "250px",
    selector: (row) => row.title,
    cell: (row) => <span className="text-capitalize">{row.title}</span>,
  },
  {
    name: "Spotify Link",
    minWidth: "180px",
    selector: (row) => row?.spotify_url,
    cell: (row) => (
      <Link to={row?.spotify_url} target="_blank">
        {row?.spotify_url?.length > 15
          ? row?.spotify_url?.slice(0, 15) + "..."
          : row?.spotify_url}
      </Link>
    ),
  },
  {
    name: "Apple Link",
    minWidth: "180px",
    selector: (row) => row?.apple_url,
    cell: (row) => (
      <Link to={row?.apple_url} target="_blank">
        {row?.apple_url?.length > 15
          ? row?.apple_url?.slice(0, 15) + "..."
          : row?.apple_url}
      </Link>
    ),
  },
  {
    name: "Facebook Link",
    minWidth: "180px",
    selector: (row) => row?.facebook_url,
    cell: (row) => (
      <Link to={row?.facebook_url} target="_blank">
        {row?.facebook_url?.length > 15
          ? row?.facebook_url?.slice(0, 15) + "..."
          : row?.facebook_url}
      </Link>
    ),
  },
  {
    name: "Instagram Link",
    minWidth: "180px",
    selector: (row) => row?.instagram_url,
    cell: (row) => (
      <Link to={row?.instagram_url} target="_blank">
        {row?.instagram_url?.length > 15
          ? row?.instagram_url?.slice(0, 15) + "..."
          : row?.instagram_url}
      </Link>
    ),
  },
  {
    name: "Youtube Link",
    minWidth: "180px",
    selector: (row) => row?.youtube_url,
    cell: (row) => (
      <Link to={row?.youtube_url} target="_blank">
        {row?.youtube_url?.length > 15
          ? row?.youtube_url?.slice(0, 15) + "..."
          : row?.youtube_url}
      </Link>
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
