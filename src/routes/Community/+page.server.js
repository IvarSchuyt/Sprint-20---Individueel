import { fail } from "@sveltejs/kit";

export const prerender = false;

export const actions = {
  default: async ({ request, url }) => {
    const ervaringData = await request.formData();
    const name = ervaringData.get("name");
    const ervaring = ervaringData.get("ervaring");

    if (name.length < 2)
      return fail(400, {
        error: true,
        message: "Naam moet minstens 2 karaters bevatten",
        name,
        ervaring,
      });

    return { success: true, name, ervaring };
  },
};
