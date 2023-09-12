// This middleware is designed to handle requests for routes that do not exist in the application (i.e., the "Not Found" routes).
// When a request is made to a route that does not match any of the defined routes, this middleware is called.
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Custom Error Message...
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // In Mongoose we have a specific type of error called a cast error if you just leave it as default. it gives a weired kind of message.
  if (err.name === "CastError" && err.kind === "ObjectId") {
    // basically if you try to get a user with an object Id that doesn't exist then this is gonna fired off
    statusCode(404);
    message: "Resource not found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
