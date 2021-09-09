import React, { useState } from "react";
import company_logo from "../../Assets/image/download.png";
import login_profile_img from "../../Assets/image/login_img.png";
import "../../Css/Style.css";
import { Link, useHistory } from "react-router-dom";

const Header = ({ sideBar, setSideBar }) => {
  const history = useHistory();
  const [Notification, setNotification] = useState(false);

  const [LoginProfileBtn, setLoginProfileBtn] = useState(false);
  const [searchField, setSearchField] = useState(false);

  const handleSidebar = () => {
    if (sideBar) {
      setSideBar(false);
      setLoginProfileBtn(false);
      setSearchField(false);
      setNotification(false);
    } else {
      setSideBar(true);
    }
  };

  const handleChange = () => {
    if (Notification) {
      setNotification(false);
    } else {
      setNotification(true);
      setLoginProfileBtn(false);
      setSearchField(false);
    }
  };

  const handleChangeAdmin = () => {
    if (LoginProfileBtn) {
      setLoginProfileBtn(false);
    } else {
      setLoginProfileBtn(true);
      setNotification(false);
      setSearchField(false);
    }
  };

  const handleSearchResponsive = () => {
    if (searchField) {
      setSearchField(false);
    } else {
      setSearchField(true);
      setNotification(false);
      setLoginProfileBtn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("isAdmin");
    history.push("/login");
  };

  return (
    <>
      <header>
        <div className="header_section">
          <div className="header_sidebar_control">
            <div className="header_sidebar_control_section">
              <div className="header_company_logo">
                <img src={company_logo} alt="" />
              </div>
              <div
                className="sidebar_controler_btn open_close_nav"
                onClick={() => setSideBar(!sideBar)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="company_name">
              <p>9TH DIMENSION</p>
            </div>
          </div>

          {/* () => setSideBar(!sideBar) */}

          <div className="responsive_header_sidebar_control">
            <div
              className="sidebar_controler_btn open_close_nav"
              onClick={handleSidebar}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="responsive_header_logo">
            <div className="header_company_logo">
              <img src={company_logo} />
            </div>
          </div>

          <div className="header_details">
            <div className="header_detail_section">
              {sessionStorage.getItem("token") && (
                <>
                  <div className="header_search_field">
                    <input type="text" />
                    <button>
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                  <div class="responsive_header_search_field">
                    <button>
                      <i
                        class="fa fa-search"
                        onClick={handleSearchResponsive}
                      ></i>
                      <div
                        class={
                          searchField
                            ? "header_responsive_search_field toogle_responsive_search_field"
                            : "header_responsive_search_field"
                        }
                      >
                        <input type="text" />
                        <button>search</button>
                      </div>
                    </button>
                  </div>
                  <div className="header_notification_btn">
                    <a onClick={handleChange}>
                      <i className="far fa-bell"></i>
                      <span>50+</span>
                    </a>
                    <div
                      className={
                        Notification
                          ? "header_notification_click_detail notificationpannel"
                          : "header_notification_click_detail"
                      }
                    >
                      <div className="header_notification_click_detail_head">
                        <p>notifications</p>
                        <button>clear all</button>
                      </div>

                      <a href="#">
                        {" "}
                        <div className="header_single_notification_detail">
                          <div className="header_single_notification_data">
                            <img src={login_profile_img} />
                            <div className="header_single_notification_time">
                              <span>
                                Lesley Grauer added new task Hospital
                                Administration
                              </span>
                              <p>4 minut ago</p>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a href="#">
                        {" "}
                        <div className="header_single_notification_detail">
                          <div className="header_single_notification_data">
                            <img src={login_profile_img} />
                            <div className="header_single_notification_time">
                              <span>
                                Lesley Grauer added new task Hospital
                                Administration
                              </span>
                              <p>4 minut ago</p>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a href="#">
                        {" "}
                        <div className="header_single_notification_detail">
                          <div className="header_single_notification_data">
                            <img src={login_profile_img} />
                            <div className="header_single_notification_time">
                              <span>
                                Lesley Grauer added new task Hospital
                                Administration
                              </span>
                              <p>4 minut ago</p>
                            </div>
                          </div>
                        </div>
                      </a>

                      <div className="header_notification_click_detail_footer">
                        <a href="#">view all notifications</a>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="header_login_details_section">
                {sessionStorage.getItem("token") ? (
                  <div
                    className="header_login_details"
                    onClick={handleChangeAdmin}
                  >
                    <>
                      <figure>
                        <img src={login_profile_img} />
                      </figure>
                      <p>admin</p>
                      <span>
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </>
                  </div>
                ) : (
                  <div className="login-div">
                    <Link to="/login">Login</Link>
                  </div>
                )}
                <div
                  className={
                    LoginProfileBtn
                      ? "header_login_details_section_click_data LoginProfileBtn"
                      : "header_login_details_section_click_data"
                  }
                >
                  <Link to="/profile">My profile</Link>
                  <Link to="#">setting</Link>
                  <Link onClick={handleLogout}>logout</Link>
                </div>
              </div>
              <div className="responsive_header_login_details">
                <a onClick={handleChangeAdmin}>
                  <i className="fa fa-ellipsis-v"></i>
                </a>
                <div
                  className={
                    LoginProfileBtn
                      ? "header_login_details_section_click_data LoginProfileBtn"
                      : "header_login_details_section_click_data"
                  }
                >
                  <a href="#">My profile</a>
                  <a href="#">setting</a>
                  <a href="#">logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
