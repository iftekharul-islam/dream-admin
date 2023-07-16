import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSidebar from "../../../@core/components/CustomSidebar/CustomSidebar";
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
    (state) => state.users
  );

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
      label: "First Name",
      required: true,
      name: "first_name",
      type: "text",
      placeHolder: "First Name",
      show: true,
    },
    {
      label: "Last Name",
      required: true,
      name: "last_name",
      type: "text",
      placeHolder: "Last Name",
      show: true,
    },
    {
      label: "Govt ID",
      required: true,
      name: "govt_id",
      type: "text",
      placeHolder: "Govt ID",
      show: true,
    },
    {
      label: "Username",
      required: true,
      name: "username",
      type: "text",
      placeHolder: "Username",
      disabled: uploadData?.isEdit,
      show: true,
    },
    {
      label: "Phone Number",
      required: true,
      name: "phone",
      type: "text",
      placeHolder: "Phone Number",
      disabled: uploadData?.isEdit,
      show: true,
    },
    {
      label: "Email",
      required: false,
      name: "email",
      type: "text",
      placeHolder: "Email",
      disabled: uploadData?.isEdit,
      show: true,
    },
    {
      label: "Password",
      required: false,
      name: "password",
      type: "password",
      placeHolder: "Password",
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
