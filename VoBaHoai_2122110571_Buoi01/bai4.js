function themSinhVien() {
    var masv = document.getElementById("masv").value;
    var hoten = document.getElementById("hoten").value;
    var malop = document.getElementById("malop").value;
    var ngaysinh = document.getElementById("ngaysinh").value;

    var table = document.getElementById("studentTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = masv;
    cell2.innerHTML = hoten;
    cell3.innerHTML = malop;
    cell4.innerHTML = ngaysinh;
}
