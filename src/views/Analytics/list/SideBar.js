import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSidebar from "../../../@core/components/CustomSidebar/CustomSidebar";
import {
  emptyUploadData,
  setUploadData,
  toggleSidebarAction,
  updateData
} from "../store";

const SideBar = () => {
  const dispatch = useDispatch();
  const { loading, sidebarOpen, errors, uploadData, options } = useSelector(
    (state) => state.analytics
  );

  const toggleSidebar = () => {
    dispatch(toggleSidebarAction());
  };

  const submit = (e) => {
    e.preventDefault();
    // dispatch(addData());
  };

  const update = (e) => {
    e.preventDefault();
    dispatch(updateData());
  };

  const fields = [
    {
      label: "Date",
      required: true,
      name: "created_at",
      type: "text",
      placeHolder: "Date",
      disabled: true,
      show: true,
    },
    {
      label: "Year",
      required: false,
      name: "year",
      type: "text",
      placeHolder: "Year",
      disabled: true,
      show: true,
    },
    {
      label: "Month",
      required: false,
      name: "month",
      type: "text",
      placeHolder: "Month",
      disabled: true,
      show: true,
    },
    {
      label: "User",
      required: false,
      name: "user_id",
      type: "select",
      options: options?.user,
      isMulti: false,
      isClearable: false,
      disabled: true,
      placeHolder: "User",
      show: true,
    },
    {
      label: "Status",
      required: true,
      name: "status",
      type: "select",
      options: options?.status,
      isMulti: false,
      isClearable: false,
      placeHolder: "Status",
      show: true,
    },
    {
      label: "File",
      required: false,
      name: "file_url",
      type: "file",
      placeHolder: "File",
      disabled: false,
      show: true,
    },
    {
      label: "Note",
      required: true,
      name: "note",
      type: "text",
      placeHolder: "Note",
      show: true,
    },
  ];

  const button = [
    {
      name: "Save",
      type: "button",
      color: "primary",
      className: "me-1",
      onClick: submit,
      show: !uploadData?.isEdit,
    },
    {
      name: "Update",
      type: "button",
      color: "primary",
      className: "me-1",
      onClick: update,
      show: uploadData?.isEdit,
    },
    {
      name: "Cancel",
      type: "button",
      color: "danger",
      className: "me-1",
      onClick: toggleSidebar,
      show: true,
    },
  ];

  return (
    <Fragment>
      <CustomSidebar
        open={sidebarOpen}
        toggleSidebar={toggleSidebar}
        title={uploadData?.isEdit ? "Edit Label" : "Add new Label"}
        errors={errors}
        data={uploadData}
        onChange={(data) => dispatch(setUploadData(data))}
        onReset={() => dispatch(emptyUploadData({}))}
        loading={loading}
        fields={fields}
        button={button}
      />
    </Fragment>
  );
};

export default SideBar;
