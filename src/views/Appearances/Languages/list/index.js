import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const { total } = useSelector((state) => state?.languages);
  
  useEffect(() => {
    console.log("languages");
    dispatch(getAllData());
    }, []);

  return (
    <div>
      <h1>Appearances Languages List {total}</h1>
    </div>
  );
};

export default index;
