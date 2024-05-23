import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query MyQuery {
      pages {
        hero {
          hero100 {
            url
          }
          hero50 {
            url
          }
          hero25 {
            url
          }
          fingerprints1 {
            url
          }
          fingerprints2 {
            url
          }
        }
        text {
          headingMission
          pMissionDesktop
          pMissionMobile
          headingIntro
          pIntro1
          pIntro2
          imgJoyceJoost {
            url
          }
          headingContent
          pContent1
          pContent2
          pContent3
          imgLaptop {
            url
          }
          imgMalaga {
            url
          }
        }
      }
    }
  `;

  const data = await hygraph.request(query);
  return data;
}
