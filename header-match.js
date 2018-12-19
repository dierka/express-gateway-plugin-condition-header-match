module.exports = {
  name: 'header-match',
  schema: {
    type: 'object',
    properties: {
      expected: {
        type: 'string'
      },
      headerName: {
        type: 'string'
      }
    },
    required: ['expected', 'headerName']
  },
  handler: function (req, conditionConfig) {
    return (conditionConfig.expected === req.headers[conditionConfig.headerName]);
  }
};