import React from "react";
import { Link } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const Category = () => {
  const categorys = database.categorys;
  //khai bao cac state luu tru gia tri cac control tren form
  const [name, setName] = useState("");
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOrder] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
  // ham
  const handleSubmit = (e) => {
    e.preventDefault();
    //luu vao co so du lieu
    const category = {
      name: name,
      parent_id: parent_id,
      sort_order: sort_order,
      description: description,
      status: status,
    };
    console.log(category);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản Lí Danh Mục</strong>
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
            <form onSubmit={handleSubmit}>
              <div className="md-3">
                <label htmlFor="name">Tên Danh Mục</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="parent_id">Cấp Cha</label>
                <select className="form-select" id="parent_id">
                  <option value="0">None</option>
                </select>
                <input
                  type="text"
                  id="parent_id"
                  value={parent_id}
                  onChange={(e) => setParentId(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="sort_order">Sắp Xếp</label>
                <select className="form-select" id="sort_order">
                  <option value="0">Chọn Vị Trí</option>
                </select>
                <input
                  type="text"
                  id="sort_order"
                  value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="desciption">Mô Tả</label>
                <input
                  type="text"
                  id="desciption"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="image">Hình Ảnh</label>
                <input type="file" id="image" className="form-control" />
              </div>
              <div className="md-3">
                <label htmlFor="status">Trạng Thái</label>
                <select
                  className="form-select"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1">Xuất Bản</option>
                  <option value="2"> Chưa Xuất Bản</option>
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
                {categorys &&
                  categorys.length > 0 &&
                  categorys.map((category) => {
                    return (
                      <tr key={category.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={category.image} alt={category.image} />
                        </td>
                        <td>{category.name}</td>
                        <td>{category.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/category/edit/" + category.id}
                          >
                            <FaRegEdit />
                          </Link>
                          <Link
                            className="btn btn-sm btn-danger me-1"
                            to={"/admin/category/trash/" + category.id}
                          >
                            <FaTrash />
                          </Link>
                        </td>
                        <td>{category.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;