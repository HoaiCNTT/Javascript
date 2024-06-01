import React from "react";
import HeaderContent from "../../../layouts/LayoutAdmin/HeaderContent";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import db from "../../../database.json";

const OrderDetail = () => {
  const { orderdetail } = db;
  return (
    <>
      <HeaderContent title="Chi tiết đơn hàng" />
      <div className="row">
        <div className="col-md-3">...</div>
        <div className="col-md-9">
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="text-capitalize">
                <th className="text-center">#</th>
                <th className="text-center">id</th>
                <th>Order id</th>
                <th>Product id</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {orderdetail &&
                orderdetail.length > 0 &&
                orderdetail.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="text-center">{item.id}</td>
                    <td>{item.order_id}</td>
                    <td>{item.product_id}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td style={{ width: "15%" }}>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <Link
                          to={`/admin/orderdetail/edit/${item.id}`}
                          className="btn btn-info text-white"
                        >
                          <FaRegEdit />
                        </Link>
                        <button className="btn btn-danger text-white">
                          <CiTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
