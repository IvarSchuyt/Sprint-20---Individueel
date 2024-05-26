import { fail } from "@sveltejs/kit";
import { request as graphqlRequest } from "graphql-request";
import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export const prerender = false;

// Data naar Hygraph sturen
export const actions = {
  default: async ({ request, url }) => {
    const formData = await request.formData();
    let name = formData.get("name");
    let ervaring = formData.get("ervaring");

    // Zorg dat je een enter kan zetten in de textarea
    name = name.replace(/\r?\n/g, "\\n");
    ervaring = ervaring.replace(/\r?\n/g, "\\n");

    // Check of de naam minimaal 2 karakters bevat
    if (name.length < 2)
      return fail(400, {
        error: true,
        message: "Naam moet minstens 2 karaters bevatten",
        name,
        ervaring,
      });

    // Maak nieuwe content aan voor Hygraph
    const mutation = `
      mutation {
        createCommunity(data: { name: "${name}", ervaring: "${ervaring}" }) {
          id
          name
          ervaring
        }
      }
    `;

    // Hygraph url
    const endpoint =
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clvv6cpib12hf07utq7pabixw/master";

    // Hygraph autorisatie
    const HYGRAPH_TOKEN = import.meta.env.VITE_HYGRAPH_KEY;
    const headers = {
      Authorization: `Bearer ${HYGRAPH_TOKEN}`,
    };

    // Voer de mutatie uit
    const postData = await graphqlRequest(
      endpoint,
      mutation,
      undefined,
      headers
    );
    return { success: true, postData };
  },
};

// Haal de data op uit Hygraph
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
