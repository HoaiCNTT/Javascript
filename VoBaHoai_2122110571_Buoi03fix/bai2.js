function themmonhoc() {
    try {
        const themmonhoc = document.getElementById('tenmonhoc');
        const tenmonhoc = themmonhoc.value.trim();

        // Kiểm tra xem tên môn học có rỗng hay không
        if (tenmonhoc === '') {
            // throw new Error('Vui lòng nhập tên môn học.');
            throw "Ten mon hoc khong duoc de trong";
        }

        // Tạo phần tử li mới để thêm vào danh sách môn học
        const li = document.createElement('li');
        li.textContent = tenmonhoc;

        // Thêm phần tử li vào danh sách môn học
        const dsmonhoc = document.getElementById('dsmonhoc');
        dsmonhoc.appendChild(li);

        //Tạo nút xóa
        var Nutxoa=document.createElement("button");
        Nutxoa.textContent="Xóa";
        Nutxoa.onclick=function(){
            dsmonhoc.remove();
        };
        //Thêm nút xóa
        dsmonhoc.appendChild(Nutxoa);
        // Xóa nội dung trường nhập sau khi đã thêm
        themmonhoc.value = '';
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}