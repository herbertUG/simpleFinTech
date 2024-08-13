import { ApolloClient, InMemoryCache } from "@apollo/client";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
//NOTE: Needed to swith this to my machines Ip so as to work on my test device.
const BASE_URL = `${apiUrl}/graphql`;

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
