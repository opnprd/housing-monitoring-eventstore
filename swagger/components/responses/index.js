module.exports = {
  errorResponse: {
    description: 'Standard error response',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              enum: [ 'InternalServer' ],
            },
            message: {
              type: 'string',
              description: 'Error message',
              example: 'An error has occurred',
            }
          }
        }
      }
    }
  }
};
