export class LoanService {
  static getOverview() {
    const endpoint = process.env.REACT_APP_OVERVIEW_ENDPOINT || '';

    return fetch(endpoint).then((response) => {
      if (response.ok) {
        return response.json();
      }
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw response;
    });
  }
}
