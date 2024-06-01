import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const Brand = () => {
  const brands = database.brands;
  //khai bao cac state luu tru gia tri cac control tren form
  const [name, setName] = useState("");
  const [sort_order, setSortOrder] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
  // ham
  const handLeSubmit = (e) => {
    e.preventDefault();
    //luu vao co so du lieu
    const brand = {
      name: name,
      sort_order: sort_order,
      description: description,
      status: status,
    };
    console.log(brand);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lí thương hiệu</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn danger">
              <FaTrash />
              Thùng rác
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <form onSubmit={handLeSubmit}>
              <div className="md-3">
                <label htmlFor="image">Hình ảnh</label>
                <input type="file" id="image" className="form-control" />
              </div>
              <div className="md-3">
                <label htmlFor="name">Tên danh mục</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="sort_order">Sắp xếp</label>
                <select
                  className="form-select"
                  id="sort_order"
                  value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="0">Chọn vị trí</option>
                </select>
              </div>
              <div className="md-3">
                <label htmlFor="desciption">Mô tả</label>
                <textarea
                  id="desciption"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="md-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  className="form-select"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
              <div className="md-3 text-end">
                <button type="submit" className="btn btn-success px-5">
                  Lưu
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên danh mục</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {brands &&
                  brands.length > 0 &&
                  brands.map((brand) => {
                    return (
                      <tr key={brand.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={brand.image} alt={brand.image} />
                        </td>
                        <td>{brand.name}</td>
                        <td>{brand.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/brand/edit/" + brand.id}
                          >
                            <FaRegEdit />
                          </Link>
                          <Link
                            className="btn btn-sm btn-danger me-1"
                            to={"/admin/brand/trash/" + brand.id}
                          >
                            <FaTrash />
                          </Link>
                        </td>
                        <td>{brand.id}</td>
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

export default Brand;
