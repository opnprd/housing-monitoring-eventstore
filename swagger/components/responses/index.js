module.exports = {
  errorResponse: {
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
