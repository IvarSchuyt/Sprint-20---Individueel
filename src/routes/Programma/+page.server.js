import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query MyQuery {
      programmas {
        program {
          stepProgram
          descriptionProgram
          attendanceBlob {
            headingBlob
            textBlob
          }
          blobContact {
            headingBlob
            textBlob
            lineBlob
            emailBlob
          }
        }
      }
    }
  `;
  const data = await hygraph.request(query);
  // console.log(data.programmas[0].program.attendanceBlob.textBlob);
  return data;
}
