import { TaskService } from "@/services/services";
import { TaskServiceGraphQL } from "@/services/services";
import { Repository, GraphQLRepository } from "@/services/repositories";
import "cross-fetch/polyfill";

  it('can call graphql post "hello world" with async fetch', (done) => {
    const helloQuery = '{ hello }';

    function callback(data : any) {
      try {
        expect(data).toStrictEqual({"data": {"hello": "Hello world!"}});
        done();
      } catch (error) {
        done(error);
      }
    }

    const graphQL  = new GraphQLRepository();
    graphQL.post(helloQuery, callback);
    
  });
