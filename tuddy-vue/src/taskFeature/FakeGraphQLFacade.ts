import { IGraphQLFacade } from "@/api/graphQLFacade";

export class FakeGraphQLFacade implements IGraphQLFacade {


    post(query: string, callback: (data: any) => void): Promise<any> {
  
      return new Promise<string>((resolve, reject) => {
        resolve('success!');
      })
    }
  
    postAwait(query: string): Promise<string> {

      return new Promise<string>((resolve, reject) => {
        resolve('success!');
      })
    }
  
  }