import React, { useState } from 'react'
import {FaTrash, FaEdit} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Database from '../../../Database.json'

const Menu =()=>{
    const menus=Database.Menus
    //State
    const [name, setName]= useState('');
    const [type, setType]= useState('0');
    const[table_id,setTableId]=useState('0')
    const [link, setLink]= useState('');
    const [status, setStatus]= useState('2');
    const handLeSubmit = (e) => {
      e.preventDefault();
      //luu vao co so du lieu
      const add = {
          name: name,
         type: type,
          table_id: table_id,
          link: link,
          status:status,
          
      };
      console.log(add);
  };
    return (
        <div className='card'>
            <div className='card-header'>
                <div className="row">
                    <div className="col-md-6">
                        <strong>Quản lý đơn đặt hàng</strong>
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
                        <label htmlFor="name">Tên Menu</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id='name' className='form-control'/>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="link">Link Menu</label>
                        <input type="text" value={link} onChange={(e)=>setLink(e.target.value)} id='link' className='form-control'/>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="tableid">Id bang</label>
                        <input type="text" value={table_id} onChange={(e)=>setTableId(e.target.value)} id='tableid' className='form-control'/>
                      </div>
                      <div className="mb-2">
                      <label htmlFor="type">Loai Menu</label>
                        <select className='form-select' id='type'value={type} onChange={(e)=>setType(e.target.value)}>
                          <option value="0">None</option>
                          <option value="1">Site</option>
                          <option value="2">Admin</option>
                          
                        </select>
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
                                    <th className='text-canter' style={{width:"10px"}}>#</th>
                                    <th className='text-canter' style={{width:"50px"}}>iD</th>
                                    <th className='text-canter' style={{width:"50px"}}>name</th>
                                    <th className='text-canter' style={{width:"50px"}}>link</th>
                                    <th className='text-canter' style={{width:"50px"}}>table_id</th>
                                    <th className='text-canter' style={{width:"50px"}}>type</th>
                                    <th className='text-canter' style={{width:"50px"}}>created_at</th>
                                    <th className='text-canter' style={{width:"50px"}}>created_by</th>
                                    <th className='text-canter' style={{width:"50px"}}>Updated_At</th>
                                    <th className='text-canter' style={{width:"50px"}}>Updated_By</th>
                                    <th className='text-canter' style={{width:"50px"}}>Status</th>
                              
                                </tr>
                            </thead>
                            <tbody>
                                {menus && menus.length>0 && menus.map(menu=>{
                                    return(
                                        <tr key={menu.id}>
                                    <td><input type="checkbox"/></td>
                                    <td>{menu.id}</td>
                                    <td>{menu.name}</td>
                                    <td>{menu.link}</td>
                                    <td>{menu.table_id}</td>
                                    <td>{menu.type}</td>
                                    
                                    <td>{menu.created_at}</td>
                                    <td>{menu.created_by}</td>
                                    <td>{menu.updated_at}</td>
                                    <td>{menu.updated_by}</td>
                                    <td>{menu.status}</td>
                                    <td>
                                        <Link className='btn btn-sm btn-info me-1' to={"/admin/menu/edit"+menu.id}><FaEdit/></Link>
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
export default Menu