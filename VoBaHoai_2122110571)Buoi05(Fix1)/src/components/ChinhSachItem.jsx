import ChinhSach_1 from "../assets/images/chinhsach_1.webp"
const ChinhSachItem =() =>{
    return(
        <div className='row'>
            <div className='col-4'>
                <img src={ChinhSach_1} className='img-fluid' alt='ChinhSach_1'/>
            </div>
            <div className='col-8'>
                <p className='p-0 m-0'><strong>Miễn phí vận chuyển</strong></p>
                <p className='p-0 m-0'>Cho đơn hàng từ 500k</p>
            </div>

            
        </div>
        
    )
}
export default ChinhSachItem