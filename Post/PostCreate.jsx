import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useState } from "react";

const PostCreate = () => {
    const postcreates = database.posts;
    //khai bao cac state luu tru gia tri cac control tren form
    const [name, setName] = useState("");
    const [parent_id, setParentId] = useState('0');
    const [sort_order, setSortOrder] = useState('0');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('2');
    // ham
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
        console.log(PostCreate);
    };

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong>Quan Li Bai Viet</strong>
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
                       
                  <div className="col-md-8">
                        <table className='table table-bordered table-hover'>
                            <thead>
                                <tr>
                                    <th className='text-center' style={{width:"10px"}}>#</th>
                                    <th className='text-center' style={{width:"50px"}}>ID</th>
                                    <th className='text-center' style={{width:"50px"}}>Topic_id</th>
                                    <th className='text-center' style={{width:"50px"}}>Title</th>
                                    <th className='text-center' style={{width:"50px"}}>Slug</th>
                                    <th className='text-center' style={{width:"50px"}}>Detail</th>
                                    <th className='text-center' style={{width:"50px"}}>Image</th>
                                    <th className='text-center' style={{width:"50px"}}>Type</th>
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
                                {postcreates && postcreates.length>0 && postcreates.map(postcreate=>{
                                    return(
                                        <tr key={postcreate.id}>
                                    <td><input type="checkbox"/></td>
                                    <td>{postcreate.id}</td>
                                    <td>{postcreate.topic_id}</td>
                                    <td>{postcreate.title}</td>
                                    <td>{postcreate.slug}</td>
                                    <td>{postcreate.detail}</td>
                                    <td>{postcreate.image}</td>
                                    <td>{postcreate.type}</td>
                                    <td>{postcreate.description}</td>
                                    <td>{postcreate.created_at}</td>
                                    <td>{postcreate.created_by}</td>
                                    <td>{postcreate.updated_at}</td>
                                    <td>{postcreate.updated_by}</td>
                                    <td>{postcreate.status}</td>
                                    <td>
                                        <Link className='btn btn-sm btn-info me-1' to={"/admin/postcreate/edit"+postcreate.id}><FaEdit/></Link>
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
            <Outlet />
        </div>
    );
};

export default PostCreate;