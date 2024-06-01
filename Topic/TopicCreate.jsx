import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useState } from "react";
const TopicCreate =()=>{
    const topiccreates=database.topics
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
        console.log(topicCreate);
    };

    return (
        <div className='card'>
            <div className='card-header'>
                <div className="row">
                    <div className="col-md-6">
                        <strong>Quản lý tin tức</strong>
                    </div>
                    <div className='col-md-6 text-end'>
                        <Link to="/" className='btn btn-sm btn-danger'><FaTrash/>Thùng rác</Link>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <div className="row">
                  <div className="col-md-3">
                    <form onSubmit={handLeSubmit}> 
                      <div className="mb-2">
                        <label htmlFor="name">Tên Tin Tức</label>
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
                    <div className="col-md-9">
                        <table className='table table-bordered table-hover'>
                            <thead>
                                <tr>
                                    <th className='text-center' style={{width:"10px"}}>#</th>
                                    <th className='text-center' style={{width:"50px"}}>ID</th>
                                    <th className='text-center' style={{width:"50px"}}>Name</th>
                                    <th className='text-center' style={{width:"50px"}}>Slug</th>
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
                                {topiccreates && topiccreates.length>0 && topiccreates.map(topiccreate=>{
                                    return(
                                        <tr key={topiccreate.id}>
                                    <td><input type="checkbox"/></td>
                                    <td>{topiccreate.id}</td>
                                   
                                    <td>{topiccreate.name}</td>
                                    <td>{topiccreate.slug}</td>
                                   
                                    <td>{topiccreate.description}</td>
                                    <td>{topiccreate.created_at}</td>
                                    <td>{topiccreate.created_by}</td>
                                    <td>{topiccreate.updated_at}</td>
                                    <td>{topiccreate.updated_by}</td>
                                    <td>{topiccreate.status}</td>
                                    <td>
                                        <Link className='btn btn-sm btn-info me-1' to={"/admin/topiccreate/edit"+topiccreate.id}><FaEdit/></Link>
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
export default TopicCreate