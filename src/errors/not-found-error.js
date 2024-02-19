export default class NotFoundError extends Error{
    statusCode = 404;

    constructor() {
        super("Not Found!")
    }

    serializeErrors() {
        return [{message: "Not Found!"}]
    }
}