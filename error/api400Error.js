import httpStatusCodes from './httpStatusCodes'
import BaseError from './baseError'

class Api400Error extends BaseError {
    constructor (
        name,
        statusCode = httpStatusCodes.BAD,
        description = 'Bad request.',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

export default Api400Error;