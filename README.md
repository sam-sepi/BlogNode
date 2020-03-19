# BlogNode

Simple CMS with Node and Express

## Getting Started

Building a Simple Blog With Node, Express & NeDb. My first approach with Node left me confused. So I started studying Express and REST architecture for a test bench: a trivial CMS.

In public folder, index.html load the API with async function (list of posts in JSON). Login.html verifies the credentials and save the JWT in local storage. Dashboard.html and handle.html for write new post and update olds.

Article.js is the router for article mini app. Auth.js handles the credentials and permissions and Api.js... yes.

I have not used a template for the views and the user experience sucks. But Vue, with Axios, can make it better.

### Prerequisites

```
npm install express
npm install body-parser
npm install jsonwebtoken
npm install nedb
npm install helmet
```

### Installing

git clone https://github.com/sam-sepi/BlogNode.git

## Built with

[Node](https://nodejs.org/en/)


[Express](https://expressjs.com/)

## Authors

Sam Sepi - s.sepi.84@gamail.com

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details