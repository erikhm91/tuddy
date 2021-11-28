Følger tutorial: 
https://levelup.gitconnected.com/set-up-a-project-using-express-graphql-and-typescript-1fa38ee79886


Example query fra docs justert for windows. curl i command line. må ha double quotes på -d (melding i header) og escape faktiske quotes i query):
curl -X POST -H "Content-Type: application/json" -d "{\"query\": \"{ hello }\"}" "http://localhost:3000/graphql"
https://graphql.org/graphql-js/graphql-clients/


Hadde litt issues med at ikke jeg kunne bruke require('fs') (file system), løste ved å bruke 'npm install "@types/node" --save-dev' (fungerte uten å oppdatere tsconfig)
https://stackoverflow.com/questions/37260901/how-to-find-module-fs-in-vs-code-with-typescript

## start graphql server:
npm run start

gå i browser: 
localhost:3000/graphql



## test queries
mutation {
     addTask(description:"Kjøpe pølser", 
       status:"Created") {
       id
     }
}


query {
  taskList {
    getAllTasks {
      id,
      description,
      status
    } 
  }
}

getAllTasks returns the array of objects on json format:

{
  "data": {
    "taskList": {
      "getAllTasks": [
        {
          "id": "10",
          "description": "Kjøpe pølser",
          "status": "Created"
        },
        {
          "id": "39",
          "description": "Kjøpe pølser",
          "status": "Created"
        }
    }
  }
}


