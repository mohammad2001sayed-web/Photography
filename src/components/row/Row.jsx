import { Link, NavLink, Outlet } from "react-router";
import myRow from "./row.module.css";

function Row() {
  return (
    <>
      <div className="container-fluid">
        <div className={["row", "py-5", myRow.test].join(" ")}>
          <div className="col-2 bg-info-subtle min-vh-100 fw-bolder test">
            <NavLink
              className="text-decoration-none d-block text-center text-warning display-6  fw-bold"
              to="one"
            >
              one
            </NavLink>
            <NavLink
              className="text-decoration-none d-block text-center text-warning display-6 fw-bold"
              to="two"
            >
              two
            </NavLink>
            <NavLink
              className={[
                "text-decoration-none",
                "d-block",
                "text-center",
                "text-warning",
                "display-6",
                "fw-bold",
                myRow.test,
                myRow["mo-1"],
              ].join(" ")}
              to="three"
            >
              three
            </NavLink>
          </div>
          <div className="col-10 bg-body-secondary  fw-bolder">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Row;
