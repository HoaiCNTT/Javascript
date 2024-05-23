import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../layoutStyle.css";
import Coca2 from "../../assets/images/coca banner.jpg"
const ProductCategory = () => {

  return (
    <div className="product-category">
      <h2>DANH MỤC NƯỚC GIẢI KHÁT</h2>
      <div className="product-category mt-3" classNameName="DSSP text-white p-3">
                <div className="row">
                  <div className="col-md-3" >
                    <div className="card">
                      <img className="card-img-top" src={Coca2} alt="coca"></img>
                      <h2 className="mt-3">Nước Có Ga</h2>
                      <dl className="card-body">
                        <dt>Thông Tin Thêm</dt>
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
                      <img className="card-img-top" src={Coca2} alt="coca"></img>
                      <h2 className="mt-3">Nước Lọc</h2>
                      <dl className="card-body">
                        <dt>Thông tin thêm</dt>
                      
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
                      <img className="card-img-top" src={Coca2} alt="coca"></img>
                      <h2 className="mt-3">Khác</h2>
                      <dl className="card-body">
                      
                        <dt>???</dt>
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
                </div>
              </div>
    </div>
  );
};

export default ProductCategory;