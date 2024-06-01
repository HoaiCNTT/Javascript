import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useState } from "react";
const Product =()=>{
    const products=database.products
    //State
    const [name, setName]= useState('');
    const [parent_id, setParentId]= useState('0');
    const [sort_order, setSortOrder]= useState('0');
    const [description, setDescription]= useState('');
    const [status, setStatus]= useState('2');

    const handLeSubmit = (e) => {
        e.preventDefault();
        //luu vao co so du lieu
        const add = {
            name: name,
            parent_id: parent_id,
            sort_order: sort_order,
            description: description,
            status: status
        };
        console.log(Product);
    };
    return (
        <div className='card'>
            <div className='card-header'>
                <div className="row">
                    <div className="col-md-6">
                        <strong>Quản lý sản phẩm</strong>
                    </div>
                    <div className='col-md-6 text-end'>
                        <Link to="/" className='btn btn-sm btn-danger'><FaTrash/>Thùng rác</Link>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <div className="row">
                  <div className="col-md-2">
                    <form onSubmit={handLeSubmit}>
                      <div className="mb-2">
                        <label htmlFor="name">Tên Bài Viết</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id='name' className='form-control'/>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="name">Cấp Cha</label>
                        <select className='form-select' id='parentid' value={parent_id} onChange={(e)=>setParentId(e.target.value)}>
                          <option value="0">None</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="name">Sắp xếp</label>
                        <select className='form-select' id='parentid'value={sort_order} onChange={(e)=>setSortOrder(e.target.value)}>
                          <option value="0">None</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="name">Mô Tả</label>
                        <input type="text" id='name' className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="name">Hình Ảnh</label>
                        <input type="file" id='name' className='form-control'/>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="status">Trạng Thái</label>
                        <select className='form-select' id='status' value={status} onChange={(e)=>setStatus(e.target.value)}>
                          <option value="1">Xuất Bản</option>
                          <option value="2">Chưa Xuất Bản</option>
                        </select>
                      </div>
                      <div className="mb-2 text-end">
                        <button type='submit' className='btn btn-success px-5'>Lưu</button>
                      </div>
                    </form>
                  </div>
                    <div className="col-md-10">
                        <table className='table table-bordered table-hover'>
                            <thead>
                                <tr>
                                    <th className='text-center' style={{width:"10px"}}>#</th>
                                    <th className='text-center' style={{width:"50px"}}>ID</th>
                                    <th className='text-center' style={{width:"50px"}}>Category_id</th>
                                    <th className='text-center' style={{width:"40px"}}>Brand_id</th>
                                    <th className='text-center' style={{width:"50px"}}>Name</th>
                                    <th className='text-center' style={{width:"40px"}}>Slug</th>
                                    <th className='text-center' style={{width:"50px"}}>Price</th>
                                    <th className='text-center' style={{width:"50px"}}>Pricesale</th>
                                    <th className='text-center' style={{width:"50px"}}>Image</th>
                                    <th className='text-center' style={{width:"80px"}}>Qty</th>
                                    <th className='text-center' style={{width:"80px"}}>Detail</th>
                                    <th className='text-center' style={{width:"80px"}}>Description</th>
                                    <th className='text-center' style={{width:"50px"}}>Created_At</th>
                                    <th className='text-center' style={{width:"50px"}}>Created_By</th>
                                    <th className='text-center' style={{width:"50px"}}>Updated_At</th>
                                    <th className='text-center' style={{width:"50px"}}>Updated_By</th>
                                    <th className='text-center' style={{width:"50px"}}>Status</th>
                                    <th className='text-center' style={{width:"150px"}}>Chức Năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.length>0 && products.map(product=>{
                                    return(
                                        <tr key={product.id}>
                                    <td><input type="checkbox"/></td>
                                    <td>{product.id}</td>
                                    <td>{product.category_id}</td>
                                    <td>{product.brand_id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.slug}</td>
                                    <td>{product.price}</td>
                                    <td>{product.pricesale}</td>
                                    <td>{product.image}</td>
                                    <td>{product.qty}</td>
                                    <td>{product.detail}</td>
                                    <td>{product.description}</td>
                                    <td>{product.created_at}</td>
                                    <td>{product.created_by}</td>
                                    <td>{product.updated_at}</td>
                                    <td>{product.updated_by}</td>
                                    <td>{product.status}</td>
                                    <td>
                                        <Link className='btn btn-sm btn-info me-1' to={"/admin/product/edit"+product.id}><FaEdit/></Link>
                                        <button className='btn btn-sm btn-danger me-1'><FaTrash/></button>
                                    </td>
                                </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product