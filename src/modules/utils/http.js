class Http {
  constructor() {
    this.url = "";
    this.options = null;
    this.baseUrl = "http://localhost:5000/api/vehiculo/";
  }

  /**
   *
   * @param String url
   * @param {*} options
   * @returns api response
   */
  get = async (url, options) => {
    this.url = url;
    this.options = { ...options, method: "GET" };
    return await this.send();
  };

  /**
   *
   * @param String url
   * @param {*} options
   * @returns api response
   */
  post = async (url, options) => {
    this.url = url;
    this.options = { ...options, method: "POST" };
    return await this.send();
  };

  /**
   *
   * @param {*} response
   */
  handleError = (response) => {
    switch (response.status) {
      case 400:
        alert("Bad request");
        break;
      case 403:
        alert("Forbidden");
        break;
      case 404:
        alert("Not found");
        break;
      case 500:
        alert("Some error occured at the backend. Please try again later.");
        break;

      default:
        alert("Something went wrong. Please try again later.");
        break;
    }
  };

  /**
   *
   * @returns json formatted api response
   */
  send = async () => {
    return fetch(`${this.baseUrl}${this.url}`, this.options).then((result) => {
      if (result.status !== 200) this.handleError(result);
      return result.json();
    });
  };
}

export default new Http();
