function validateForm() 
{
        try {
            //Kiểm tra mã sinh viên
            const masv=document.getElementById("maSV");
            const MSSV = /^21\d{8}\b/g;
            if (MSSV.test(masv.value)==false) {
                masv.focus();
                throw "Mã SV phải có 10 ký tự số và bắt đầu bằng 21.";
            }
            //Kiểm tra họ tên
            const hoTen=document.getElementById("hoTen");
            if (hoTen.value.length==0) {
                hoTen.focus();
                throw "Ho ten khong duoc de trong";
            }
            //Kiểm tra email
            const email=document.getElementById("email");
            const formatemail = /^[^\s@]+@[^\s@]+\.[^\s@]\b/g;
            if (formatemail.test(email.value)==false) {
                email.focus();
                throw "Email không hợp lệ";
            }
            //Kiểm tra điện thoại
            const dienthoai=document.getElementById("dienThoai");
            const codedt = /^(03|05|07|08|09|01)+([0-9]{8})\b/g;
            if (codedt.test(dienthoai.value)==false) {
                dienthoai.focus();
                throw "Số điện thoại không hợp lệ";
            }
            //Kiểm tra lớp
            const lop=document.getElementById("lop");
            const malop = /^CCQ.{5,6}[1|2]\b/g;
            if (malop.test(lop.value)==false) {
                lop.focus();
                throw "Lớp phải có 8 hoặc 9 ký tự, bắt đầu bằng CCQ và kết thúc bằng 1 hoặc 2 ký tự.";
            }
            return true;
        } 
        catch (error) {
            console.log(error);
        }
            return false;
    }
