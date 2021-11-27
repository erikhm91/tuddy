export interface IGraphQLFacade {
  post(query: string, callback: (data: any) => void): any   //like postAwait is better!
  postAwait(query: string): Promise<string>
}

export class GraphQLFacade implements IGraphQLFacade {
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
