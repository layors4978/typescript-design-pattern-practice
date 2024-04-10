class UrlBuilder {
  private path: string;
  private queries: string[] = [];
  private fragment: string;

  public addPath(path: string): UrlBuilder {
    this.path = path;
    return this;
  }

  public addQuery(query: string): UrlBuilder {
    this.queries.push(query);
    return this;
  }

  public addFragment(fragment: string): UrlBuilder {
    this.fragment = fragment;
    return this;
  }

  public getUrl(): string {
    let url = '';

    if (!this.path) {
      throw new Error();
    }
    url += this.path;

    this.queries.forEach((query, index) => {
      if (index === 0) {
        url += `?${query}`;
      } else {
        url += `&${query}`;
      }
    });

    if (this.fragment) {
      url += `#${this.fragment}`;
    }

    return url;
  }
}

const ub = new UrlBuilder();

ub.addPath('localhost:3000')
  .addQuery('page=1')
  .addQuery('limit=10')
  .addFragment('FAQ');

console.log(ub.getUrl());
// localhost:3000?page=1&limit=10#FAQ
