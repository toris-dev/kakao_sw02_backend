import { gql } from "apollo-server";

export default gql`
  type getChatsResult {
    ok: Boolean!
    error: String
    chats: [Chat]
  }
  type Mutation {
    getChats: getChatsResult!
  }
`;