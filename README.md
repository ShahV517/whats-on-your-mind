# Full-Stack MERN Website with CRUD functionality

Website where users can post an update on their day. 

## Where the website is right now

I have completed the development of the server, although there is room for improvement.

I have built a RESTful API and incorporated Authentication with JWT. I used Express for routing, Mongoose ODM to create custom schemas and connect to MongoDB servers, 
JWT to create user tokens upon login for authentication and user access validation as middleware, and BcryptJS to salt and hash the password for encryption.

Current issues include: 

- User update leads to decrpytion of password.

## Next steps:

- Fix bugs
- Implement the frontend portion of the project and connect it to the backend
