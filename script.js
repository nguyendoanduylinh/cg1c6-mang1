let mang = [];
let chiSo = 0;

function hamNhapData() {
  // let chiSo = 0;
  mang[chiSo] = document.getElementById("nhapData").value;
  alert(`Phần tử ${mang[chiSo]} vừa được thêm vào tại chỉ số ${chiSo}`);
  chiSo++;
  document.getElementById("nhapData").value = "";
}

function hamHienThi() {
  let cauHienThi = `<hr/>`;
  for (let soHienThi = 0; soHienThi < mang.length; soHienThi++) {
    cauHienThi += `Mảng có giá trị ${mang[soHienThi]} tại vị trí ${soHienThi} <br/>`;
  }
  document.getElementById("ketqua").innerHTML = cauHienThi;
}
