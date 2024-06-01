import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import database from "../../../database.json";

const Banner = () => {
  const banners = database.Banners;
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lý danh mục</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn-danger">
              Thùng rác
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="name">Tên Danh Mục</label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="link">Link</label>
              <input type="text" id="link" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="sort_order">Sắp Xếp</label>
              <select className="form-select" id="sort_order">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="position">Vị trí</label>
              <input type="text" id="position" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="description">Mô tả</label>
              <textarea id="description" className="form-control"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="image">Hình ảnh</label>
              <input type="file" id="image" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="status">Trạng thái</label>
              <select className="form-select" id="status">
                <option value="1">Xuất bản</option>
                <option value="2">Chưa Xuất bản</option>
              </select>
            </div>
            <div className="mb-3">
              <button className="btn btn-success px-5">Lưu</button>
            </div>
          </div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên danh mục</th>
                  <th>Link</th>
                  <th>Vị trí</th>
                  <th>Trạng thái</th>
                  <th>Chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {banners &&
                  banners.length > 0 &&
                  banners.map((banner) => {
                    return (
                      <tr key={banner.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img
                            src={banner.image}
                            alt={banner.name}
                            style={{ width: "50px", height: "50px" }}
                          />
                        </td>
                        <td>{banner.name}</td>
                        <td>{banner.link}</td>
                        <td>{banner.position}</td>
                        <td>
                          {banner.status === 1 ? "Xuất bản" : "Chưa Xuất bản"}
                        </td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/banner/edit/" + banner.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{banner.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Banner;
