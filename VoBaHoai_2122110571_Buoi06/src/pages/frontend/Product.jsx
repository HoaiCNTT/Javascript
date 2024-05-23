import React from 'react'
import Coca2 from '../../assets/images/COCA2 - Copy.jpg'
import Aqua2 from '../../assets/images/AQUA2.jpg'
import Pepsi2 from '../../assets/images/PEPSI2- Copy.jpg'
import Seven2 from '../../assets/images/SEVEN2- Copy.jpg'
const Product = () => {
  return (
    <div>
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 order-2 order-md-1">
              <ul className="list-group mb-3 list-category">
                <li className="list-group-item bg-main py-3">Danh mục sản phẩm</li>
                <li className="list-group-item">
                  <a href="#">Nước có ga</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Nước Lọc</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Nước Khác</a>
                </li>
              </ul>
              <ul className="list-group mb-3 list-brand">
                <li className="list-group-item bg-main py-3">Thương hiệu</li>
                <li className="list-group-item">
                  <a href="#">Việt Nam</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Mỹ</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Nhật</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Khác</a>
                </li>
              </ul>
              <ul className="list-group mb-3 list-product-new">
                <li className="list-group-item bg-main py-3">Sản phẩm mới</li>
                <li className="list-group-item">
                  <div className="product-item border">
                    <div className="product-item-image">
                      <a href="#">
                      <img className="card-img-top" src={Coca2} alt="coca"></img>
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="#">Sting Dâu</a>
                    </h2>
                    <h3 className="product-item-price fs-6 p-2 d-flex">
                      <div className="flex-fill"><del>10000đ</del></div>
                      <div className="flex-fill text-end text-main">8000đ</div>
                    </h3>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="product-item border">
                    <div className="product-item-image">
                      <a href="#">
                      <img className="card-img-top" src={Coca2} alt="coca"></img>
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="#">Mirinda</a>
                    </h2>
                    <h3 className="product-item-price fs-6 p-2 d-flex">
                      <div className="flex-fill"><del>15000đ</del></div>
                      <div className="flex-fill text-end text-main">12000đ</div>
                    </h3>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="product-item border">
                    <div className="product-item-image">
                      <a href="#">
                      <img className="card-img-top" src={Coca2} alt="coca"></img>
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="#">Trà chanh</a>
                    </h2>
                    <h3 className="product-item-price fs-6 p-2 d-flex">
                      <div className="flex-fill"><del>8000đ</del></div>
                      <div className="flex-fill text-end text-main">8000đ</div>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-9 order-1 order-md-2">
              <div align="center" classNameName="DSSP text-white p-3">DANH MỤC CÁC SẢN PHẨM </div>
              <div className="product-category mt-3" classNameName="DSSP text-white p-3">
                <div className="row">
                  <div className="col-md-3" >
                    <div className="card">
                      <img className="card-img-top" src={Coca2} alt="coca"></img>
                      <h2 className="mt-3">COCA COLA</h2>
                      <dl className="card-body">
                        <dt>Giá: 10000Đ</dt>
                        <dt>Bảo hành: 12 tháng</dt>
                        <dt>Tình trạng: Còn hàng</dt>
                        <dt>Hãng sản xuất: Mỹ</dt>
                      </dl>{" "}
                      <a
                        href="https://www.coca-cola.com/vn/vi"
                        className="btn btn-primary"
                        title="Chi tiết"
                      >
                        Chi tiết cụ thể »
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3" >
                    <div className="card">
                      <img className="card-img-top" src={Pepsi2} alt="coca"></img>
                      <h2 className="mt-3">PEPSI</h2>
                      <dl className="card-body">
                        <dt>Giá: 10000Đ</dt>
                        <dt>Bảo hành: 12 tháng</dt>
                        <dt>Tình trạng: Còn hàng</dt>
                        <dt>Hãng sản xuất: Mỹ</dt>
                      </dl>{" "}
                      <a
                        href="https://pepsishop.vn/"
                        className="btn btn-primary"
                        title="Chi tiết"
                      >
                        Chi tiết cụ thể »
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3" >
                    <div className="card">
                      <img className="card-img-top" src={Seven2} alt="coca"></img>
                      <h2 className="mt-3">SEVEN UP</h2>
                      <dl className="card-body">
                        <dt>Giá: 10000Đ</dt>
                        <dt>Bảo hành: 12 tháng</dt>
                        <dt>Tình trạng: Còn hàng</dt>
                        <dt>Hãng sản xuất: Nhật</dt>
                      </dl>{" "}
                      <a
                        href="https://www.7up.com/en"
                        className="btn btn-primary"
                        title="Chi tiết"
                      >
                        Chi tiết cụ thể »
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3" >
                    <div className="card">
                      <img className="card-img-top" src={Aqua2} alt="coca"></img>
                      <h2 className="mt-3">AQUAFINA</h2>
                      <dl className="card-body">
                        <dt>Giá: 5000Đ</dt>
                        <dt>Bảo hành: 12 tháng</dt>
                        <dt>Tình trạng: Còn hàng</dt>
                        <dt>Hãng sản xuất: Việt Nam</dt>
                      </dl>{" "}
                      <a
                        href="https://aquafinavietnam.com/"
                        className="btn btn-primary"
                        title="Chi tiết"
                      >
                        Chi tiết cụ thể »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product