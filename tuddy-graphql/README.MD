Følger tutorial: 
https://levelup.gitconnected.com/set-up-a-project-using-express-graphql-and-typescript-1fa38ee79886


Example query fra docs justert for windows. curl i command line. må ha double quotes på -d (melding i header) og escape faktiske quotes i query):
curl -X POST -H "Content-Type: application/json" -d "{\"query\": \"{ hello }\"}" "http://localhost:3000/graphql"
https://graphql.org/graphql-js/graphql-clients/

## start graphql server:
npm run start

gå i browser: 
localhost:3000/graphql



