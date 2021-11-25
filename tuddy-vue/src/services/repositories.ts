export interface Repository {
  post(query: string, callback: (data: any) => void): any;
}

export class MockRepository implements Repository {
    post() {}
}

export class GraphQLRepository implements Repository {
  
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
}
