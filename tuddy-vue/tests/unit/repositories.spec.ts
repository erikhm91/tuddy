import { GraphQLRepository } from "@/repositories/repositories";
import "cross-fetch/polyfill";

  it('can call graphql post "hello world" with async fetch', (done) => {
    const helloQuery = '{ hello }';

    function callback(data : any) {
      try {
        expect(data).toStrictEqual({"data": {"hello": "Hello world!"}})
        done()
      } catch (error) {
        done(error)
      }
    }

    const graphQL  = new GraphQLRepository();
    graphQL.post(helloQuery, callback);
    
  })

  it('can call graphql post "hello world" with async await fetch', async () => {
    const helloQuery = '{ hello }';
    const sut  = new GraphQLRepository();

    const response = await sut.postAwait(helloQuery);
    
    expect(response).toStrictEqual({"data": {"hello": "Hello world!"}})
  })
