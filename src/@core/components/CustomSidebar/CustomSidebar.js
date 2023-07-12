import Sidebar from "@components/sidebar";
import CopyToClipboard from "react-copy-to-clipboard";
import { Copy } from "react-feather";
import { toast } from "react-hot-toast";
import Select from "react-select";
import { Button, Form, Input, Label, Spinner } from "reactstrap";

const CustomSidebar = ({
  open,
  toggleSidebar,
  title,
  errors,
  data,
  onChange,
  onReset,
  loading,
  fields,
  button,
}) => {
  const onChangeText = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };
  const onChangeOption = (name, value) => {
    onChange({ [name]: value });
  };
  const onChangeFile = (e) => {
    onChange({ [e.target.name]: e.target.files[0] });
  };

  const coppied = () => {
    toast.success("Copied");
  };
  return (
    <Sidebar
      size="lg"
      open={open}
      title={title}
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
      onClosed={onReset}
    >
      <Form>
        {fields?.map((item, index) => {
          return (
            <div>
              {(item?.type == "text" ||
                item?.type == "textarea" ||
                item?.type == "password") &&
                item?.show && (
                  <div className="mb-1" key={index}>
                    <span className="d-flex justify-content-between">
                      <Label className="form-label" for={item?.name}>
                        {item?.label}
                        {item?.required && (
                          <span className="text-danger">*</span>
                        )}
                      </Label>
                      {item?.isCopied && (
                        <CopyToClipboard
                          text={data?.[item?.name]}
                          onCopy={coppied}
                        >
                          <Copy size={16} className="cursor-pointer" />
                        </CopyToClipboard>
                      )}
                    </span>
                    <Input
                      type={item?.type}
                      name={item?.name}
                      disabled={item?.disabled}
                      placeholder={item?.placeHolder}
                      onChange={onChangeText}
                      value={data?.[item?.name]}
                    />
                    {errors?.[item?.name] && (
                      <p className="text-danger">{errors?.[item?.name]}</p>
                    )}
                  </div>
                )}
              {item?.type == "select" && !item?.isMulti && item?.show && (
                <div className="mb-1" key={index}>
                  <span className="d-flex justify-content-between">
                    <Label className="form-label" for={item?.name}>
                      {item?.label}
                      {item?.required && <span className="text-danger">*</span>}
                    </Label>
                    {item?.isCopied && (
                      <CopyToClipboard
                        text={data?.[item?.name]}
                        onCopy={coppied}
                      >
                        <Copy size={16} className="cursor-pointer" />
                      </CopyToClipboard>
                    )}
                  </span>
                  <Select
                    className="react-select"
                    classNamePrefix="select"
                    isDisabled={item?.disabled}
                    options={item?.options}
                    isClearable={item?.isClearable ?? false}
                    value={item?.options?.find(
                      (option) => option?.value == data?.[item?.name]
                    )}
                    onChange={(e) => onChangeOption(item?.name, e?.value)}
                    placeholder={item?.placeholder}
                  />
                  {errors?.[item?.name] && (
                    <p className="text-danger">{errors?.[item?.name]}</p>
                  )}
                </div>
              )}
              {item?.type == "select" && item?.isMulti && item?.show && (
                <div className="mb-1" key={index}>
                  <span className="d-flex justify-content-between">
                    {item?.isCopied && (
                      <Label className="form-label" for={item?.name}>
                        {item?.label}
                        {item?.required && (
                          <span className="text-danger">*</span>
                        )}
                      </Label>
                    )}
                    <CopyToClipboard text={data?.[item?.name]} onCopy={coppied}>
                      <Copy size={16} className="cursor-pointer" />
                    </CopyToClipboard>
                  </span>
                  <Select
                    className="react-select"
                    classNamePrefix="react-select"
                    isDisabled={item?.disabled}
                    options={item?.options}
                    isMulti
                    isClearable={item?.isClearable ?? false}
                    value={item?.options?.filter((option) =>
                      data?.[item?.name]?.includes(option?.value)
                    )}
                    onChange={(e) =>
                      onChangeOption(
                        item?.name,
                        e?.map((item) => item?.value)
                      )
                    }
                    placeholder={item?.placeholder}
                  />
                  {errors?.[item?.name] && (
                    <p className="text-danger">{errors?.[item?.name]}</p>
                  )}
                </div>
              )}
              {item?.type == "file" && item?.show && (
                <div className="mb-1" key={index}>
                  <span className="d-flex justify-content-between">
                    <Label className="form-label" for={item?.name}>
                      {item?.label}
                      {item?.required && <span className="text-danger">*</span>}
                    </Label>

                    {item?.isCopied && (
                      <CopyToClipboard
                        text={data?.[item?.name]}
                        onCopy={coppied}
                      >
                        <Copy size={16} className="cursor-pointer" />
                      </CopyToClipboard>
                    )}
                  </span>
                  <Input
                    type='file'
                    name={item?.name}
                    disabled={item?.disabled}
                    placeholder={item?.placeHolder}
                    onChange={onChangeFile}
                  />
                  {errors?.[item?.name] && (
                    <p className="text-danger">{errors?.[item?.name]}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {button?.map((item, index) => {
          return (
            item?.show && (
              <Button
                color={item?.color || "primary"}
                className="me-1"
                type="button"
                onClick={item?.onClick}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner className="me-25" size="sm" />
                    Please Wait...
                  </>
                ) : (
                  item?.name
                )}
              </Button>
            )
          );
        })}
      </Form>
    </Sidebar>
  );
};

export default CustomSidebar;
