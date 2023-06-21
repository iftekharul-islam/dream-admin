
export const columns = [
  {
    name: "Title",
    minWidth: "180px",
    selector: (row) => row.title,
    cell: (row) => <span className="text-capitalize">{row.title}</span>,
  },
  {
    name: "Label",
    minWidth: "180px",
    selector: (row) => row?.label?.title,
    cell: (row) => <span>{row?.label?.title}</span>,
  },
  {
    name: "Language",
    minWidth: "180px",
    selector: (row) => row.language?.name,
    cell: (row) => <span>{row.language?.name}</span>,
  },
  {
    name: "Genre",
    minWidth: "120px",
    selector: (row) => row.genre?.name,
    cell: (row) => <span className="text-capitalize">{row.genre?.name}</span>,
  },

  {
    name: "Artists",
    minWidth: "120px",
    selector: (row) => row?.artists,
    cell: (row) => (
      <span className="text-capitalize">
        {row?.artists?.length > 0
          ? row?.artists?.length > 1
            ? row?.artists[0]?.artist?.title +
              " and " +
              (row?.artists?.length - 1) +
              " Others"
            : row?.artists[0]?.artist?.title
          : "No Artist Found"}
      </span>
    ),
  },
  {
    name: "Caller Tune",
    minWidth: "120px",
    selector: (row) => row.is_coller_tune,
    cell: (row) => (
      <span className="text-capitalize">
        {row.is_coller_tune ? "Created" : "Not yet"}
      </span>
    ),
  },
  {
    name: "User",
    minWidth: "120px",
    selector: (row) => row?.user,
    cell: (row) => <span className="text-capitalize">{row?.user?.name}</span>,
  },
  {
    name: "Status",
    minWidth: "120px",
    selector: (row) => row.current_status,
    cell: (row) => (
      <span className="text-capitalize">{row.current_status}</span>
    ),
  }
];
