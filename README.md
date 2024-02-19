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

## Routes

Default API test route:
 - /api/v1/health-check -> healthCheckRouter