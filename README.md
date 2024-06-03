
# Project Title

This project is the second assignment in the Full Stack UCF Bootcamp. The objective of this project is to develop a social media application that initially supports text-based posts and is designed to accommodate NFT-based posts in the future. The app is built using the following technologies and frameworks:

**Backend**: Node.js, Express.js, Solidity

<p align="left">
  <!-- Node.js Icon and Link -->
  <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="40" height="40" alt="Node.js" /></a>
    <!-- Express.js Icon and Link -->
  <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer"><img src="https://icongr.am/devicon/express-original.svg?size=123&color=ffffff" width="40" height="40" alt="Express.js" /></a>
  </p>
  <a href="https://soliditylang.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color-glass/70/solidity.png" width="40" height="40" alt="Express.js" /></a>
  </p>


**Database**: PostgreSQL with Sequelize ORM
<p align="left">
<!-- PostgreSQL Icon and Link -->
  <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="40" height="40" alt="PostgreSQL" /></a>
  <!-- Sequelize Icon and Link -->
  <a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg" width="40" height="40" alt="Sequelize" /></a>
</p>

**Template Engine**: EJS (Embedded JavaScript)
<p align="left">
<a href="https://ejs.co/" target="_blank" rel="noopener noreferrer">
  <img src="./images/ejs.svg" width="40" height="40" alt="EJS">
</a>
</p>

**Deployment**: Render
<p align="left">
<a href="https://render.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://avatars.githubusercontent.com/u/36424661?s=200&v=4" width="40" height="40" alt="Render" />
</a>
</p>

While we are aware that there are other technologies and frameworks that could potentially offer more features or better performance for certain aspects of the application, the choice of these specific technologies aligns with the requirements and learning objectives of the bootcamp. This project aims to provide hands-on experience with these tools and to develop a strong foundation in full-stack development.

**Project Features:**

`User Authentication:` Secure login and registration system.

`Text Posts:` Users can create, read, update, and delete text-based posts.

`NFT-ready:` The application is designed to handle NFT-based posts in future updates.

`RESTful API:` A well-structured API to handle all data interactions between the client and server.

`Responsive Design:` Ensuring the application is accessible and user-friendly on various devices.

`Deployment:` The application is deployed using Render, showcasing the ability to manage and deploy full-stack applications in a cloud environment.

This project not only demonstrates the practical application of these technologies but also emphasizes the importance of adhering to project specifications and requirements.


## Badges


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)





## Dependencies

* `express` for the web framework
* `sequelize` for the ORM
* `pg` and `pg-hstore` for PostgreSQL connection
* `body-parser` for parsing request bodies
* `dotenv` for environment variables
* `ejs` for the templating engine
* `cors` for handling Cross-Origin Resource Sharing
* `jsonwebtoken` for token-based authentication (if needed)
* `bcrypt` for password hashing (if user authentication is required)
* `multer` for file uploads (for future NFT handling)


### Dev Dependencies:

* `nodemon` for auto-restarting the server during development

*  `eslint` for linting

## MVC Structure
```
/project-root
├── /config
│   └── database.js            // Database configuration
├── /controllers
│   ├── postController.js      // Controller for handling post requests
│   └── nftController.js       // Future controller for handling NFT requests
├── /models
│   ├── index.js               // Sequelize initialization
│   ├── post.js                // Post model
│   └── nft.js                 // Future NFT model
├── /routes
│   ├── postRoutes.js          // Routes for posts
│   └── nftRoutes.js           // Future routes for NFTs
├── /views
│   ├── index.ejs              // Main page template
│   └── post.ejs               // Template for individual posts
├── /public
│   ├── /css                   // Stylesheets
│   └── /js                    // Client-side JavaScript
├── .env                       // Environment variables
├── .eslintrc.js               // ESLint configuration
├── app.js                     // Express app setup
├── package.json               // Project dependencies
└── README.md                  // Project documentation
```


## Contributors
  **Team Name:** Fist of 5
  * Edwin Rivera | Slack name: Edwin Rivera | Github : EdRivera016
  * Maria Roa | Slack name: Maria Roa | Github : aleroas
  * Anthony Bell | Slack name: Anthony Bell | Github : beyondthefold777
  * Juan Parra | Slack name: Juan Parra | Github : Parraj1025
  * Marcio Pimentel | Slack name: Marcio Pimentel | Github : MarcioPimentel01
  * Project Github Page: 
  * Project Github Repo: https://github.com/MarcioPimentel01/Fist-of-five


