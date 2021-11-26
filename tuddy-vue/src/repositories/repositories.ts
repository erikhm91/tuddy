export interface IRepository {
  post(query: string, callback: (data: any) => void): any   //like postAwait is better!
  postAwait(query: string): Promise<string>
}

export class MockRepository implements IRepository {
  toReturn: string
  sentValue: string

  setValueToBeReturned(toReturn: string): void {
    this.toReturn = toReturn
  }
  post(query: string, callback: (data: any) => void): Promise<any> {
    this.sentValue = query;
    return new Promise<string>((resolve, reject) => {
      resolve('success!');
    })
  }

  postAwait(query: string): Promise<string> {
    this.sentValue = query;
    return new Promise<string>((resolve, reject) => {
      resolve('success!');
    })
  }

  getSentValue(): string {
    return this.sentValue
  }
}

export class GraphQLRepository implements IRepository {
  async post(query: string, callback: (data: any) => void): Promise<any> {
    fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((r) => r.json())
      .then((data) => callback(data));
  }

  async postAwait(query: string): Promise<string> {
    const response = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    })

    return response.json()
  }
}
