import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSidebar from "../../../../@core/components/CustomSidebar/CustomSidebar";
import {
  addData,
  emptyUploadData,
  setUploadData,
  toggleSidebarAction,
  updateData,
} from "../store";

const SideBar = () => {
  const dispatch = useDispatch();
  const { loading, sidebarOpen, errors, uploadData, options } = useSelector(
    (state) => state.deposits
  );
  console.log("🚀 ~ file: index.js:13 ~ index ~ params:", options)

  const toggleSidebar = () => {
    dispatch(toggleSidebarAction());
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(addData());
  };

  const update = (e) => {
    e.preventDefault();
    dispatch(updateData());
  };

  const fields = [
    {
      label: "Amount",
      required: false,
      name: "amount",
      type: "text",
      placeHolder: "Amount",
      show: true,
    },       
    {
      label: "Month",
      required: true,
      name: "for_month",
      type: "select",
      options: options?.month,
      isMulti: false,
      isClearable: false,
      placeHolder: "Select Month",
      disabled: uploadData?.isEdit,
      show: true,
    },       
    {
      label: "Year",
      required: true,
      name: "for_year",
      type: "select",
      options: options?.year,
      isMulti: false,
      isClearable: false,
      placeHolder: "Select Year",
      disabled: uploadData?.isEdit,
      show: true,
    },  
    {
      label: "User",
      required: true,
      name: "user_id",
      type: "select",
      options: options?.user,
      isMulti: false,
      isClearable: false,
      placeHolder: "Select User",
      disabled: uploadData?.isEdit,
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
      show: uploadData?.isEdit,
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
        title={uploadData?.isEdit ? "Edit Artist" : "Add new Artist"}
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
