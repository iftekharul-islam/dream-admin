export const columns = [
  {
    name: "Title",
    minWidth: "180px",
    selector: (row) => row?.audio?.title,
    cell: (row) => <span className="text-capitalize">{row?.audio?.title}</span>,
  },
  {
    name: "Label",
    minWidth: "180px",
    selector: (row) => row?.audio?.label?.title,
    cell: (row) => <span>{row?.audio?.label?.title}</span>,
  },
  {
    name: "Language",
    minWidth: "180px",
    selector: (row) => row?.audio?.language?.name,
    cell: (row) => <span>{row?.audio?.language?.name}</span>,
  },
  {
    name: "Genre",
    minWidth: "120px",
    selector: (row) => row?.audio?.genre?.name,
    cell: (row) => (
      <span className="text-capitalize">{row?.audio?.genre?.name}</span>
    ),
  },

  {
    name: "Artists",
    minWidth: "180px",
    selector: (row) => row?.audio?.artists,
    cell: (row) => (
      <span className="text-capitalize">
        {row?.audio?.artists?.length > 0
          ? row?.audio?.artists?.length > 1
            ? row?.audio?.artists[0]?.artist?.title +
              " and " +
              (row?.audio?.artists?.length - 1) +
              " Others"
            : row?.audio?.artists[0]?.artist?.title
          : "No Artist Found"}
      </span>
    ),
  },
  {
    name: "User",
    minWidth: "120px",
    selector: (row) => row?.audio?.user,
    cell: (row) => (
      <span className="text-capitalize">{row?.audio?.user?.name}</span>
    ),
  },
  {
    name: "Caller Tune Request",
    minWidth: "120px",
    selector: (row) => row.is_requested,
    cell: (row) => (
      <span className="text-capitalize">
        {row.is_requested ? "Approved" : "Requested"}
      </span>
    ),
  },
];
