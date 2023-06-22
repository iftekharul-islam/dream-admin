import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSidebar from "../../../../@core/components/CustomSidebar/CustomSidebar";
import {
  emptyUploadData,
  setUploadData,
  toggleSidebarAction,
  updateData
} from "../store";

const SideBar = () => {
  const dispatch = useDispatch();
  const { loading, sidebarOpen, errors, uploadData, options } = useSelector(
    (state) => state.claimReleases
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
      isCopied: true,
      disabled: true,
      show: true,
    },
    {
      label: "URL",
      required: false,
      name: "claim_url",
      type: "text",
      placeHolder: "URL",
      isCopied: true,
      disabled: true,
      show: true,
    },
    {
      label: "UPC/EAN",
      required: false,
      name: "claim_upc",
      type: "text",
      placeHolder: "UPC/EAN",
      isCopied: true,
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
      required: false,
      name: "status",
      type: "select",
      options: options?.status,
      isMulti: false,
      isClearable: false,
      placeHolder: "Status",
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
