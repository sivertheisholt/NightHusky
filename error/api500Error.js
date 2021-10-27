import httpStatusCodes from './httpStatusCodes'
import BaseError from './baseError'

class Api500Error extends BaseError {
    constructor (
        name,
        statusCode = httpStatusCodes.INTERNAL_SERVER,
        description = 'Internal server.',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

export default Api500Error;