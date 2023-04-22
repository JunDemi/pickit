export function isLogin() {
  const { accessToken } = JSON.parse(
    // eslint-disable-next-line no-undef
    localStorage.getItem('recoil-persist') || '',
  );

  if (accessToken) {
    return true;
  } else {
    return false;
  }
}
