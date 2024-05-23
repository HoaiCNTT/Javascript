import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../layoutStyle.css";
import { FaShoppingCart, FaSearch, FaPhone } from "react-icons/fa";
import { Fa1, Fa2, Fa3, Fa4 } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaVoicemail, FaInstagram, FaMap } from "react-icons/fa";
import Logo from "../assets/images/logo2.jpg";
import { FaHeart, FaRegUser, FaUser, FaGoogle} from "react-icons/fa6";
import { FaBell } from "react-icons/fa";

import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutSite = () => {
    return (
        <div>
      <header className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src={Logo} style={{ width: "100px" }} alt="logo" />
            </div>
            <div className="toboco col-md-10">
              <nav className="navbar navbar-expand-lg bg-body-aquamarine pd-auto">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav me-auto mb-2 pt-4 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Trang chủ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Về chúng tôi</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sản phẩm
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">Nước có ga</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Coca</a></li>
                            <li><a className="dropdown-item" href="#">Pepsi</a></li>
                            <li><a className="dropdown-item" href="#">SevenUp</a></li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">Nước lọc</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Aqua</a></li>
                            <li><a className="dropdown-item" href="#">Aqua</a></li>
                            <li><a className="dropdown-item" href="#">Aqua</a></li>
                          </ul>
                        </li>
                        <li><a className="dropdown-item" href="#">Nước khác</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link sale" href="#">Sale</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tin tức
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Bài viết</a></li>
                        <li><a className="dropdown-item" href="#">Tin tức công ty</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Chăm sóc khách hàng
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Liên hệ</a></li>
                        <li><a className="dropdown-item" href="#">Hỗ trợ</a></li>
                      </ul>
                    </li>

                  </ul>
                  <div className="d-flex icons pt-3">
                    <a href="#" className="nav-link"><FaSearch /><span className="badge">3</span></a>
                    <a href="#" className="nav-link"><FaUser /><span className="badge">3</span></a>
                    <a href="#" className="nav-link"><FaHeart /><span className="badge">3</span></a>
                    <a href="#" className="nav-link"><FaBell /><span className="badge">3</span></a>
                    <a href="#" className="nav-link"><FaShoppingCart /><span className="badge">0</span></a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
            <Outlet />
            <footer className="bg-dark text-white p-3">
                <section class="hdl-footer pb-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 pt-4">
                                <h3 class="widgettilte">CHÚNG TÔI LÀ AI ?</h3>
                                <p class="pt-1">
                                    Copyright@ 2024 ThirstyDrink là cửa hàng đồ uống đặc biệt luôn chào mừng, vui vẻ và mang lại bầu không khí tuyệt vời cũng như mong muốn đem đến chất lượng tốt nhất cho khách hàng.
                                </p>
                                <p class="pt-1">
                                    Địa chỉ: Khu phố 4, Đường số 3, Linh Xuân, Thủ Đức
                                    <div class="google-icon">
                                        <FaMap />
                                        <a
                                            href="https://www.google.com/maps/place/%C4%90.+S%E1%BB%91+4,+Linh+Xu%C3%A2n,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8742799,106.7683018,17z/data=!3m1!4b1!4m6!3m5!1s0x3174d87f0d0cc2ed:0x5a9cf3d58230282d!8m2!3d10.8742799!4d106.7683018!16s%2Fg%2F1tglkd5s?entry=ttu"
                                            class="btn btn-primary"
                                            title="Chi tiết cụ thể"
                                        >
                                            Địa chỉ »
                                        </a>
                                    </div>
                                </p>
                                <p class="pt-1">
                                    Điện thoại: 0377290631(call, zalo) - Email: hoailyoko123@gmail.com
                                </p>
                                <h3 class="widgettilte">MẠNG XÃ HỘI</h3>
                                <div class="social my-3">
                                    <div class="facebook-icon">
                                        <FaFacebook />
                                        <a
                                            href="https://www.facebook.com/profile.php?id=100018269581705"
                                            class="btn btn-primary"
                                            title="Chi tiết cụ thể"
                                        >
                                            Facebook »
                                        </a>
                                    </div>
                                    <div class="google-icon">
                                        <FaGoogle />
                                        <a
                                            href="https://www.google.com"
                                            class="btn btn-primary"
                                            title="Chi tiết cụ thể"
                                        >
                                            Google »
                                        </a>
                                    </div>
                                    <div class="instagram-icon">
                                        <FaInstagram />
                                        <a
                                            href="#"
                                            class="btn btn-primary"
                                            title="Chi tiết cụ thể"
                                        >
                                            instagram »
                                        </a>
                                    </div>
                                    <div class="google-icon">
                                        <FaVoicemail />
                                        <a
                                            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                                            class="btn btn-primary"
                                            title="Chi tiết cụ thể"
                                        >
                                            Email »
                                        </a>
                                    </div>
                                    <div class="youtube-icon">
                                        <FaYoutube />
                                        <a
                                            href="https://www.youtube.com/channel/UCPsCRfPVDUIV1s9EJaN4bxQ"
                                            class="btn btn-primary"
                                            title="Chi tiết cụ thể"
                                        >
                                            Youtube »
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5 pt-4">
                                <h3 class="widgettilte">
                                    <strong>Thông tin thêm</strong>
                                </h3>
                                <div className="col-md-3">
                                    <div class="social my-3">
                                        <div className="TTT"> <Fa1 />
                                            <a
                                                href="https://vi.wikipedia.org/wiki/Pepsi" class="btn btn-primary" title="Chi tiết cụ thể"
                                            >
                                                Pepsi »
                                            </a></div>
                                        <div className="TTT"><Fa2 />
                                            <a
                                                href="https://vi.wikipedia.org/wiki/Coca-Cola" class="btn btn-primary" title="Chi tiết cụ thể"
                                            >
                                                Coca Cola »
                                            </a></div>
                                        <div className="TTT"> <Fa3 />
                                            <a
                                                href="https://vi.wikipedia.org/wiki/7_Up" class="btn btn-primary" title="Chi tiết cụ thể"
                                            >
                                                7 UP »
                                            </a></div>
                                        <div className="TTT"><Fa4 />
                                            <a
                                                href="https://en.wikipedia.org/wiki/Aquafina" class="btn btn-primary" title="Chi tiết cụ thể"
                                            >
                                                Aquafina »
                                            </a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 pt-4 text-end">
                                <h3 class="fs-5 text-end">
                                    <strong>Lượt truy cập</strong>
                                </h3>
                                <p class="my-1">??? lượt</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="dhl-copyright bg-dark py-3">
                    <div class="container text-center text-white">
                        Thiết kế bởi: Võ Bá Hoài - Phone: 0377290631
                    </div>
                </section>
            </footer>
        </div>
    )
}
export default LayoutSite