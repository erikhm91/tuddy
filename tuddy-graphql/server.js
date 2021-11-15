const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');



// Create a schema
const schema = buildSchema(`
    type Book {
        title: String!
        author: String
    }
    type Author {
        name: String
        books: [Book]
    }

    type Query {
        books: [Book],
        hello: String
        authors: [Author]
    }
`);

//Root resolver: the root provides a resolver function for each API endpoint. Or as here, an object (hardcoded)
const root = {
    hello: () => {
        return 'Hello world!'
    },
    books: [
        {
            title: "The Name of the Wind",
            author: "Patrick Rothfuss",
        },
        {
            title: "The Wise Man's Fear",
            author: "Patrick Rothfuss",
        }
    ],
    authors: [
        { name: "Patrick Rothfuss"
        },
        { name: "Dusten McDust"
        }
    ]
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