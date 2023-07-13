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
    cell: (row) => (
      <span className="text-capitalize">
        {moment(row?.date).format("DD-MMM-YYYY")}
      </span>
    ),
  },
  {
    name: "Amount",
    minWidth: "180px",
    selector: (row) => row?.amount,
    cell: (row) => <span className="text-capitalize">{row?.amount}</span>,
  },
  {
    name: "Bank",
    minWidth: "360px",
    selector: (row) => row?.bank,
    cell: (row) => (
      <span>
        {row?.bank?.account_name}-{row?.bank?.account_number} <br />
        {row?.bank?.bank_name}-{row?.bank?.ifsc}
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
    cell: (row) => <span className="text-capitalize">{row.status}</span>,
  },
  {
    name: "Action",
    minWidth: "120px",
    selector: (row) => row?.id,
    cell: (row) => renderActions(row),
  },
];
