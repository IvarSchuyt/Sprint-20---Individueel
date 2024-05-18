import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query MyQuery {
      pages {
        header {
          home
          program
          community
          extras
          account
          logo {
            logo {
              url
            }
          }
        }
      }
    }
  `;

  const data = await hygraph.request(query);
  return data;
}
