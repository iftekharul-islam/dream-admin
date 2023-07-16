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
    name: "Issue Date",
    minWidth: "250px",
    selector: (row) => row.created_at,
    cell: (row) => <span className="text-capitalize">{moment(row?.created_at).format('DD-MMM-YYYY')}</span>,
  },
  {
    name: "Month",
    minWidth: "180px",
    selector: (row) => row?.for_month,
    cell: (row) => <span className="text-capitalize">{row?.for_month}</span>,
  },
  {
    name: "Year",
    minWidth: "180px",
    selector: (row) => row?.for_year,
    cell: (row) => <span className="text-capitalize">{row?.for_year}</span>,
  },
  {
    name: "Amount",
    minWidth: "180px",
    selector: (row) => row?.amount,
    cell: (row) => <span className="text-capitalize">{row?.amount}</span>,
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
