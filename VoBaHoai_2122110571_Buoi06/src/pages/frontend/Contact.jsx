import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../layoutStyle.css";
const Contact = () => {
  return (
    <div>
      <section className="bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <a className="text-main" href="index.php">Trang chủ</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Liên hệ
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.746776096385!2d106.77242407468411!3d10.830680489321376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526ffdc466379%3A0x89b09531e82960d!2zMjAgVMSDbmcgTmjGoW4gUGjDuiwgUGjGsOG7m2MgTG9uZyBCLCBRdeG6rW4gOSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692683712719!5m2!1svi!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="name" className="text-main">Họ tên</label>
                <input type="text" name="name" id="name" className="form-control" placeholder="Nhập họ tên" />
              </div>
              <div className="mb-3">
                <label for="phone" className="text-main">Điện thoại</label>
                <input type="text" name="phone" id="phone" className="form-control" placeholder="Nhập điện thoại" />
              </div>
              <div className="mb-3">
                <label for="email" className="text-main">Email</label>
                <input type="text" name="email" id="email" className="form-control" placeholder="Nhập email" />
              </div>
              <div className="mb-3">
                <label for="title" className="text-main">Tiêu đề</label>
                <input type="text" name="title" id="title" className="form-control" placeholder="Nhập tiêu đề" />
              </div>
              <div className="mb-3">
                <label for="detail" className="text-main">Nội dung</label>
                <textarea name="detail" id="detail" className="form-control" placeholder="Nhập nội dung liên hệ"></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-main">Gửi liên hệ</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact