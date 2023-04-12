export function isLogin() {
  const { token } = JSON.parse(localStorage.getItem('recoil-persist') || '');

  if (token) {
    return true;
  } else {
    return false;
  }
}
