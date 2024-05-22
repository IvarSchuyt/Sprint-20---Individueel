import { fail } from "@sveltejs/kit";
import { request as graphqlRequest } from "graphql-request";
import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export const prerender = false;

export const actions = {
  default: async ({ request, url }) => {
    const formData = await request.formData();
    let name = formData.get("name");
    let ervaring = formData.get("ervaring");

    // Sanitize the input
    name = name.replace(/\r?\n/g, "\\n");
    ervaring = ervaring.replace(/\r?\n/g, "\\n");

    if (name.length < 2)
      return fail(400, {
        error: true,
        message: "Naam moet minstens 2 karaters bevatten",
        name,
        ervaring,
      });

    const mutation = `
      mutation {
        createCommunity(data: { name: "${name}", ervaring: "${ervaring}" }) {
          id
          name
          ervaring
        }
      }
    `;

    const endpoint =
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clvv6cpib12hf07utq7pabixw/master";

    const HYGRAPH_TOKEN = import.meta.env.VITE_HYGRAPH_KEY;

    const headers = {
      Authorization: `Bearer ${HYGRAPH_TOKEN}`,
    };

    const postData = await graphqlRequest(
      endpoint,
      mutation,
      undefined,
      headers
    );
    return { success: true, postData };
  },
};

export async function load() {
  let query = gql`
    query MyQuery {
      communities {
        name
        ervaring
      }
    }
  `;
  const data = await hygraph.request(query);
  return data;
}
