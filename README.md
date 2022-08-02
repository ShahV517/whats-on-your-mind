# Full-Stack MERN Website with CRUD functionality

Website where users can post an update on their day. 

## First Update

### Where the website is right now

I have completed the development of the server, although there is room for improvement.

I have built a RESTful API and incorporated Authentication with JWT. I used Express for routing, Mongoose ODM to create custom schemas and connect to MongoDB servers, 
JWT to create user tokens upon login for authentication and user access validation as middleware, and BcryptJS to salt and hash the password for encryption.

Current issues include: 

- User update leads to decrpytion of password.

### Next steps:

- Fix bugs
- Implement the frontend portion of the project and connect it to the backend


## Second Update

### Where the website is right now

I have essentially completed the development of the backend and implemented a large portion of the frontend. The previous server bugs have been fixed, and I made sure that the backend API securely communicates with the frontend such that the user sensitive information is safe from possible breach. The user, with authentication, can now post new blogs and view their current ones. I will be working on adding the Update and Delete functionality next, as well as ability to edit user information. As of now, the frontend is still very primitive and contains little stylistic design. I plan on fixing that by using Bootstrap and custom CSS. 

Current issues include:

- User cannot edit or delete their posts
- Structure of the client-side files is awkward and messy
- Website looks primitive and unappealing

### Next steps:

- Further development of frontend in terms of functionality and style
- Test the website for possible bugs
- Possibly incorporate a refresh token upon further research and understanding of how refresh tokens work
