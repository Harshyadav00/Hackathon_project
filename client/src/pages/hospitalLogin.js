import React from "react";

const HospitalLogin = () => {
  return (
    <div className="mainBgColor h100 font">
      <div>
        <form className="d-flex justify-content-center align-items-center h100 flex-column">
          <label style={{ fontWeight: "500" }} className="label">
            Username <input />
          </label>

          <label style={{ fontWeight: "500" }} className="label">
            Password <input type="password" />
          </label>

          <button style={{ padding: "5px" }} type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default HospitalLogin;
