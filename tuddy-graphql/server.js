const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');



// Create a schema
const schema = buildSchema(`
    type Query {
        hello: String
        quoteOfTheDay: String
        random: Float!
        rollThreeDice: [Int]
        rollDice(numDice: Int!, numSides: Int): [Int]
    }
`);

//Root resolver: the root provides a resolver function for each API endpoint. Or as here, an object (hardcoded)
const root = {
    hello: () => {
        return 'Hello world!'
    },
    tasks: [
        {
            id: "1",
            description: "Kjøpe grill",
            status: "Completed"
        }
    ],
    quoteOfTheDay: () => {
        return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
      },
      random: () => {
        return Math.random();
      },
      rollThreeDice: () => {
        return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
      },
      rollDice: ({numDice, numSides}) => {
          const output = []
          for (let i=0; i<numDice; i++) {
              output.push(1 + Math.floor(Math.random() * (numSides || 6)))
          }
          return output
      }
};

// Create a server:
const app = express()

// Use those to handle incoming requests:
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue : root,
    graphiql: true
}));

// Start the server:
app.listen(3000);
console.log("Server started on port 3000")