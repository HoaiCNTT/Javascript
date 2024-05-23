import ChinhSach_1 from "../assets/images/chinhsach_1.webp"
import ChinhSach_2 from "../assets/images/chinhsach_2.webp"
import ChinhSach_3 from "../assets/images/chinhsach_3.webp"
import ChinhSach_4 from "../assets/images/chinhsach_4.webp"
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