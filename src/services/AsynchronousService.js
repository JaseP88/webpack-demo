
class AsynchronousService {
  static giveYouLater() {
    // return new Promise(() => {
    //   setTimeout(() => resolve(42), 3000);
    // })
    return Promise.resolve(12);
    // return Promise.reject('err');
  }
}

export default AsynchronousService;