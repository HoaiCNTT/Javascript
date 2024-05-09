function createUrlFriendly(str) {
    str = str.replace(/\s+/g, '-'); // loai bo khoang trang
    str = str.replace(/<[^>]+>/g, ''); // loai bo the tag
    str =str.replace(/[^\u0000-\u007F]/g, char => {
        const hex = char.codePointAt(0).toString(16);
        return `\\u${hex.padStart(4, '0')}`;
      }); // loai bo cac ky tu dac biet
    return str;
  }
  function createUrlFriendly(str) {
    return str.replace(/[^\w\s]|(?<=\s)(?=\s)|\s+/g, match => {
      // Thay thế dấu cách bằng dấu gạch ngang, nhưng chỉ khi chúng không liên tiếp
      if (match === ' ') return '-';
      // Xóa tất cả các ký tự không mong muốn khác
      return '';
    });
  }

  let str=`dây là gì`;
  let cc=createUrlFriendly(str);
  console.log(cc);
