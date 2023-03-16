import service from "service";

const commonService = {
  getNotify: () => {
    return service({
      url: "https://jsonplaceholder.typicode.com/todos",
    }).then((r) => {
      return r.data;
    });
  },
};

export default commonService;
