import React from "react";
import { Rings } from "react-loader-spinner";

function Looding() {
  return (
    <>
      <div className="position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center z-3">
        <Rings
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
}
export default Looding;
