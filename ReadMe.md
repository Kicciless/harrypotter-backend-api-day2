# Harry Potter API  Day 2

Session express the fundamental practice of how an API works, by using example API of Harry Potter’s Characters. 

Extension need for the following project includes:

- Postman
- Json Package
- Data of your choice (Harry Potter’s Characters)

Within the Json Package (package.json) the following installation were needed ( download via terminal/ linked to a website) : 

- 

```
"devDependencies": {
    "nodemon": "^3.1.4"
```

- "express": "^4.19.2”
- "dotenv": "^16.4.5",

Once installed you must create: 

- .gitignore (to prevent package modules / of changes to be shared)
- .env - ensure that right port is connected within the code

Once 

- "dotenv": "^16.4.5" - is installed & connected to right code

Index must include the following: 

- require('dotenv').config() on the very first line of the index code (index.js)
- ensure.        const port=process.env.PORT - is address to link the link .env port