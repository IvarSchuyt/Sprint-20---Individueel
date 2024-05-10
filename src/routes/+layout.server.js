import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query headerFooter {
      pages {
        header {
          logo {
            logo {
              url
            }
          }
          home
          programma
          community
          extras
          mijnAccount
        }
        footer {
          logo {
            logo {
              url
            }
          }
          yourJourneyAcadamy
          yourJourney
          programma
          community
          extras
          mijnAccount
          contact
          contactDetails
        }
      }
    }
  `;

  const data = await hygraph.request(query);
  return data;
}
