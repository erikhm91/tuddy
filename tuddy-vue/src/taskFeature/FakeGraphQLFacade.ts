import { IGraphQLFacade } from "@/api/graphQLFacade";

export class FakeGraphQLFacade implements IGraphQLFacade {
  
    fetch(query: string): Promise<string> {

      return new Promise<string>((resolve, reject) => {
        resolve('success!');
      })
    }
  
  }