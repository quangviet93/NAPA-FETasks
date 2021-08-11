

const $ = function (id) {
  return document.getElementById(id);
}
const registerAccount = function (e) {
  e.preventDefault();
  var isValid = true;
  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const phoneRegEx = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  const loginInformation = $('login-information');
  if (loginInformation.value.length === 0) {
    alert("Bạn cần nhập email");
    isValid = false;
  } else if (!(emailRegEx.test(loginInformation.value) || phoneRegEx.test(loginInformation.value))) {
    alert("Email hoặc số điện thoại không đúng");
    isValid = false;
  }
  const loginPassword = $('login-password');
  if (loginPassword.value.length === 0) {
    alert("Bạn cần nhập mật khẩu");
    isValid = false;
  } else if (loginPassword.value.length < 8 || loginPassword.value.length > 16) {
    alert("Mật Khẩu tối thiểu 8 kí tự");
    isValid = false;
  }
  if (isValid) {
    alert("Đăng nhập thành công ");
  }
};
var submitButton = $('submit');
submitButton.onclick = registerAccount;
