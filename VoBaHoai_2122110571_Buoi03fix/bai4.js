function chuyenDoi() {
    // Lấy giá trị và đơn vị gốc từ ô nhập liệu
    var giaTri = parseFloat(document.getElementById("giaTri").value);
    var donViGoc = document.getElementById("donViGoc").value;
  
    // Lấy đơn vị muốn chuyển đổi
    var donViDich = document.getElementById("donViDich").value;
  
    // Biến để lưu kết quả chuyển đổi
    var ketQua = "";
  
    // Chuyển đổi giá trị từ đơn vị gốc sang đơn vị đích
    switch (donViGoc) {
      case "m":
        if (donViDich === "ft") {
          ketQua = (giaTri * 3.28084).toFixed(2) + " feet";
        } else if (donViDich === "in") {
          ketQua = (giaTri * 39.3701).toFixed(2) + " inch";
        } else {
          ketQua = giaTri + " mét";
        }
        break;
      case "ft":
        if (donViDich === "m") {
          ketQua = (giaTri * 0.3048).toFixed(2) + " mét";
        } else if (donViDich === "in") {
          ketQua = (giaTri * 12).toFixed(2) + " inch";
        } else {
          ketQua = giaTri + " feet";
        }
        break;
      case "in":
        if (donViDich === "m") {
          ketQua = (giaTri * 0.0254).toFixed(2) + " mét";
        } else if (donViDich === "ft") {
          ketQua = (giaTri * 0.0833333).toFixed(2) + " feet";
        } else {
          ketQua = giaTri + " inch";
        }
        break;
      default:
        ketQua = "Đơn vị không hợp lệ";
    }
  
    // Hiển thị kết quả
    document.getElementById("ketQua").textContent = ketQua;
  }
  