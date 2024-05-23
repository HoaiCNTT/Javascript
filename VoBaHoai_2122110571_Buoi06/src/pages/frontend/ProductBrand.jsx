import React from 'react'
import Coca2 from "../../assets/images/coca banner.jpg"
import Pepsi2 from "../../assets/images/pepsi banner.jpg"
import Seven2 from "../../assets/images/seven banner.jpg"
import Aqua2 from "../../assets/images/aqua banner.jpg"
const ProductBrand = () => {
  return (
    <div>
      <div align="center" classNameName="DSSP text-white p-3">THƯƠNG HIỆU SẢN PHẨM</div>
      <div className="product-category mt-3" classNameName="DSSP text-white p-3">
                <div className="row">
                  <div className="col-md-3" >
                    <div className="card">
                      <img className="card-img-top" src={Coca2} alt="coca"></img>
                      <h2 className="mt-3">AMERICA</h2>
                      <dl className="card-body">
                        <dt>Thông tin chi tiêt</dt>
                        <dt>Slogan: </dt>
                        <dt>Tình trạng: </dt>
                        <dt>Thời gian hoạt động: </dt>
                        <dt>Mô tả: </dt>
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
                      <h2 className="mt-3">JAPAN</h2>
                      <dl className="card-body">
                        <dt>Thông tin chi tiêt</dt>
                        <dt>Slogan: </dt>
                        <dt>Tình trạng: </dt>
                        <dt>Thời gian hoạt động: </dt>
                        <dt>Mô tả: </dt>
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
                      <h2 className="mt-3">KOREA</h2>
                      <dl className="card-body">
                        <dt>Thông tin chi tiêt</dt>
                        <dt>Slogan: </dt>
                        <dt>Tình trạng: </dt>
                        <dt>Thời gian hoạt động: </dt>
                        <dt>Mô tả: </dt>
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
                      <h2 className="mt-3">KHÁC</h2>
                      <dl className="card-body">
                        <dt>Thông tin chi tiêt</dt>
                        <dt>Slogan: </dt>
                        <dt>Tình trạng: </dt>
                        <dt>Thời gian hoạt động: </dt>
                        <dt>Mô tả: </dt>
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
  )
}

export default ProductBrand