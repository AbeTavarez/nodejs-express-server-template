# NodeJS Express Server Template

This NodeJS and Express server template contains the basic files, folders, dependencies and basic setup that are needed to start a new quick project.

## Folder Structure

    public/
    src/
        controllers/
        errors/
        middlewares/
        models/
        routes/

## Dependencies

 - Express
 - Helmet
 - Morgan (dev dependency)
 - Nodemon (dev dependency)

## Middlewares

 - Static middleware: for serving the public folder.

 - Morgan middleware: for logging.

 - Helmet middleware: for HTTP response headers security.

 - Express/BodyParser middleware: for parsing request bodies.
   [express.json() and express.urlencoded()]

 - Custom Error handler middleware: for standard error messaging.

## Routes

Default API test route:
 - /api/v1/health-check -> healthCheckRouter

Default API Docs Route:
This route can be used to show the API documentation, if desire.

 - /docs -> res.send('docs...')

