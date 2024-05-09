function removeSpace(str)
{
    str=str.trim();
    str=str.replace(/\s/g," ");
    //chuyen ki tu dau ve in hoa
    const arr=str.split(" ");
    for(let i=0;i<arr.length;i++)
        {
            arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        }
    str=arr.join(" ")
    return str;
}
let str='   taurus   ';
str=removeSpace(str);
console.log(str);