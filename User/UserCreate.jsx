import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useState } from "react";
const UserCreate =()=>{
    const usercreates=database.users
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
        console.log(UserCreate);
    };
    return (
        <div className='card'>
            <div className='card-header'>
                <div className="row">
                    <div className="col-md-6">
                        <strong>Quản lý người dùng</strong>
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
                        <label htmlFor="name">Tên Người Dùng</label>
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
                                   
                                    <th className='text-center' style={{width:"50px"}}>Name</th>
                                    <th className='text-center' style={{width:"40px"}}>Email</th>
                                    <th className='text-center' style={{width:"50px"}}>Phone</th>
                                    <th className='text-center' style={{width:"50px"}}>Username</th>
                                    <th className='text-center' style={{width:"50px"}}>Password</th>
                                    <th className='text-center' style={{width:"50px"}}>Address</th>
                                    <th className='text-center' style={{width:"50px"}}>Image</th>
                                   
                                    <th className='text-center' style={{width:"80px"}}>Role</th>
                                    <th className='text-center' style={{width:"50px"}}>Created_At</th>
                                    <th className='text-center' style={{width:"50px"}}>Created_By</th>
                                    <th className='text-center' style={{width:"50px"}}>Updated_At</th>
                                    <th className='text-center' style={{width:"50px"}}>Updated_By</th>
                                    <th className='text-center' style={{width:"50px"}}>Status</th>
                                    <th className='text-center' style={{width:"150px"}}>Chức Năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usercreates && usercreates.length>0 && usercreates.map(usercreate=>{
                                    return(
                                        <tr key={usercreate.id}>
                                    <td><input type="checkbox"/></td>
                                    <td>{usercreatecreate.id}</td>
                                   
                                    <td>{usercreatecreate.name}</td>
                                    <td>{usercreate.email}</td>
                                    <td>{usercreate.phone}</td>
                                    <td>{usercreate.username}</td>
                                    <td>{usercreate.password}</td>
                                    <td>{usercreate.address}</td>
                                    <td>{usercreate.image}</td>
                                   
                                    <td>{usercreate.role}</td>
                                    <td>{usercreate.created_at}</td>
                                    <td>{usercreate.created_by}</td>
                                    <td>{usercreate.updated_at}</td>
                                    <td>{usercreate.updated_by}</td>
                                    <td>{usercreate.status}</td>
                                    <td>
                                        <Link className='btn btn-sm btn-info me-1' to={"/admin/usercreate/edit"+usercreate.id}><FaEdit/></Link>
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
export default UserCreate