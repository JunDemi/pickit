import service from 'service';

const commonService = {
  // TODO: API URL 수정필요
  getNotify: () => {
    return service({
      url: 'https://jsonplaceholder.typicode.com/todos',
    }).then((r) => {
      return r.data;
    });
  },

  getMyInfo: () => {
    return service({
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    }).then((r) => {
      return r.data;
    });
  },
};

export default commonService;
