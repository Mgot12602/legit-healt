class Api {
  static async request(method: string, endpoint: string, data?: any) {
    const url = `https://reqres.in/api/${endpoint}`;
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const res = await fetch(url, options);

    if (!res.ok) {
      switch (res.status) {
        case 404:
          throw new Error("Resource not found");
        case 500:
          throw new Error("Server error");
        default:
          throw new Error("An error occurred");
      }
    }

    return res.json();
  }
}

export default Api;
