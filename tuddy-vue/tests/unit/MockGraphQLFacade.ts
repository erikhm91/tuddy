import { IGraphQLFacade } from "@/api/graphQLFacade";

export class MockGraphQLFacade implements IGraphQLFacade {
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