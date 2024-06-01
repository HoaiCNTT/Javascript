import React, { useState } from 'react'
import {FaTrash, FaEdit} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Database from '../../../Database.json'

const Order =()=>{
    const orders=Database.Orderr
    //State
    const [name, setName]= useState('');
    const [phone, setPhone]= useState('');
    const [email, setEmail]= useState('');
    const [address , setAddress]= useState('');
    const [note, setNote]= useState('');
   
    const handLeSubmit = (e) => {
      e.preventDefault();
      //luu vao co so du lieu
      const add = {
          name: name,
         phone: phone,
          email: email,
          address: address,
          note:note,
          status: status
      };
      console.log(add);
  };
    const [status, setStatus]= useState('2');
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
                        <label htmlFor="name">Tên nguoi dat hang</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id='name' className='form-control'/>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} id='phone' className='form-control'/>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="Email">Email</label>
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} id='Email' className='form-control'/>
                      </div>
                      <div className="mb-2">
                      <label htmlFor="address">Dia chi</label>
                      <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} id='address' className='form-control'/>
                      </div>
                      <div className="mb-2">
                      <label htmlFor="note">Ghi chu</label>
                      <textarea value={note} onChange={(e)=>setNote(e.target.value)} id='note' className='form-control'></textarea>
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
                                    <th className='text-canter' style={{width:"50px"}}>user_id</th>
                                    <th className='text-canter' style={{width:"50px"}}>name</th>
                                    <th className='text-canter' style={{width:"50px"}}>phone</th>
                                    <th className='text-canter' style={{width:"50px"}}>email</th>
                                    <th className='text-canter' style={{width:"50px"}}>address</th>
                                    <th className='text-canter' style={{width:"50px"}}>note</th>
                                    <th className='text-canter' style={{width:"50px"}}>created_by</th>
                                    <th className='text-canter' style={{width:"50px"}}>Updated_At</th>
                                    <th className='text-canter' style={{width:"50px"}}>Updated_By</th>
                                    <th className='text-canter' style={{width:"50px"}}>Status</th>
                              
                                </tr>
                            </thead>
                            <tbody>
                                {orders && orders.length>0 && orders.map(order=>{
                                    return(
                                        <tr key={order.id}>
                                    <td><input type="checkbox"/></td>
                                    <td>{order.id}</td>
                                    <td>{order.user_id}</td>
                                    <td>{order.name}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>{order.note}</td>
                                   
                                    <td>{order.created_by}</td>
                                    <td>{order.updated_at}</td>
                                    <td>{order.updated_by}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <Link className='btn btn-sm btn-info me-1' to={"/admin/order/edit"+order.id}><FaEdit/></Link>
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
export default Order