const { GraphQLScalarType, GraphQLError } = require("graphql");
const { Kind } = require("graphql/language");

const validateDate = date => {
  if (isNaN(Date.parse(date))) {
    throw new GraphQLError(`Query error: not a valid date`, [date]);
  }
};

const Date = new GraphQLScalarType({
  name: "Date",
  description: "Date type",
  parseValue(value) {
    validateDate(value);
    return new Date(value); // sent to resolvers
  },
  parseLiteral(ast) {
    // value comes from the client, inlined in the query
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Query error: Can only parse dates strings, got a: ${ast.kind}`,
        [ast]
      );
    }
    validateDate(ast.value);
    return new Date(ast.value); // sent to resolvers
  },
  serialize(value) {
    // value comes from resolvers
    return value.toISOString(); // sent to the client
  }
});

module.exports = { Date };
