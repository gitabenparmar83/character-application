import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloclient = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URL,
  cache: new InMemoryCache(),
});
