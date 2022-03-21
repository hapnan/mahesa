import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";
const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 "
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={require("assets/img/team-1-800x800.jpg").default}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
          <Link
            className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
              to="/profile"
            >
            <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
            Profile
          </Link>
          <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Settings
                </Link>
           <Link
            className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
              to="/#"
            >
            <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
            Help
          </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
           <Link
            className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
              to="/profile"
            >
            <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
            Logout
          </Link>
      </div>
    </>
  );
};

export default UserDropdown;
