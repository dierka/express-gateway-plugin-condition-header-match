module.exports = {
  name: 'header-match',
  schema: {
    $id: 'https://www.npmjs.com/package/express-gateway-plugin-condition-header-match',
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