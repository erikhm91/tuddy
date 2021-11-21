import { TaskService } from "@/services/services";
import { TaskServiceGraphQL } from "@/services/services";
import 'cross-fetch/polyfill';


// //test graphql connection 
// describe('TaskServiceGraphQL', () => {
//   it('can post hello world to localhost', () => {
//     //arrange
//     const sut = new TaskServiceGraphQL()
//     const exp = '{"data":{"hello":"Hello world!"}}'

//     //act
//     const promise = sut.callHelloWorld();
//     const response = promise.then();

//     //assert
//     expect(response).toMatch(exp)
//   })
// })

describe('TaskServiceGraphQL', () => {
    it('can post hello world to localhost', () => {
        var query = '{query: "{ hello }"}'

        const promise = fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query : "{ hello }"
                
          })
        })
          .then(r => r.json())
          .then(data => {   
                console.log('data returned:', data);
                return data
            
            })
            .catch(r => console.log("catched error: ", r))
        const output = promise.then()
    })
  })