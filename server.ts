import {
  applyGraphQL,
  gql,
} from "https://deno.land/x/oak_graphql@0.6.2/mod.ts";

const typeDefs = (gql as any)`
  type User {
    username: String!
    email: String!
    password: String!
  }
  type Query {
    users: [User]!
  }

  type Mutation {
    signup(username: String!, email: String!, password:String!): User
  }
  `;

const users = [
  {
    username: "agmar",
    email: "agmar@gmail.com",
    password: "123123",
  },
];

// Resolvers

const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    signup: (
      parent: any,
      {
        username,
        email,
        password,
      }: { username: string; email: string; password: string },
      ctx: any,
      info: any
    ) => {
      const newUser = { username, email, password };
      users.push(newUser);
      return newUser;
    },
  },
};

export const GraphQLService = await applyGraphQL({
  typeDefs,
  resolvers,
});
