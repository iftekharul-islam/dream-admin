import moment from "moment";
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
    name: "Date",
    minWidth: "250px",
    selector: (row) => row.date,
    cell: (row) => <span className="text-capitalize">{moment(row?.date).format('DD-MMM-YYYY')}</span>,
  },
  {
    name: "Amount",
    minWidth: "180px",
    selector: (row) => row?.amount,
    cell: (row) => <span className="text-capitalize">{row?.amount}</span>,
  },
  {
    name: "Month",
    minWidth: "180px",
    selector: (row) => row?.for,
    cell: (row) => <span className="text-capitalize">{row?.for}</span>,
  },
  {
    name: "User",
    minWidth: "120px",
    selector: (row) => row?.user?.name,
    cell: (row) => <span>{row?.user?.name}</span>,
  },
  {
    name: "Status",
    minWidth: "120px",
    selector: (row) => row.current_status,
    cell: (row) => (
      <span className="text-capitalize">{row.status}</span>
    ),
  },
  {
    name: "Action",
    minWidth: "120px",
    selector: (row) => row?.id,
    cell: (row) => renderActions(row),
  },
];
