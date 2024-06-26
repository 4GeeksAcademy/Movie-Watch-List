import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Toggle = () => {
  const { store, actions } = useContext(Context);

  const handleToggle = () => {
    actions.toggleSeries(); // Toggle between Movies and Series
  };

  return (
    <div className="container d-flex justify-content-center toggle-body">
      <div className="pb-4 toggle-container ">
        <div className="add-content">
          <div className="row align-items-center toggle-row">
            <div
              className="col pe-1 text-end toggle-title"
              style={{ fontSize: "30px" }}
            >
              Movies
            </div>
            <div
              className="col d-flex justify-content-center toggle"
              style={{ padding: "0" }}
            >
              <div className="form-check form-switch ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={store.isSeriesActive}
                  onChange={handleToggle}
                  style={{ transform: "scale(2)" }}
                />
              </div>
            </div>
            <div
              className="col ps-1 text-start toggle-title"
              style={{ fontSize: "30px" }}
            >
              Series
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
