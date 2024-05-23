import ChinhSachItem from "./ChinhSachItem";
const ChinhSach =()=>{
    return(
        <div className="section_chinhsach">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <ChinhSachItem image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                  title="Miễn phí vận chuyển" des="Cho đơn hàng từ 500k" />
              </div>
              <div className="col-md-3">
                <ChinhSachItem image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_2.png?1712652027135"
                  title="Miễn phí vận chuyển" des="Cho đơn hàng từ 500k" />
              </div>
              <div className="col-md-3">
                <ChinhSachItem image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_3.png?1712652027135"
                  title="Miễn phí vận chuyển" des="Cho đơn hàng từ 500k" />
              </div>
              <div className="col-md-3">
                <ChinhSachItem image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_4.png?1712652027135"
                  title="Miễn phí vận chuyển" des="Cho đơn hàng từ 500k" />
              </div>
            </div>
          </div>
        </div>
    )
}
export default ChinhSach