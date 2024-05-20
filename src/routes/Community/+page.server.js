import { fail } from "@sveltejs/kit";

export const prerender = false;

export const actions = {
  default: async ({ request, url }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const ervaring = formData.get("ervaring");
    const formObject = { name, ervaring };

    if (name.length < 2)
      return fail(400, {
        error: true,
        message: "Naam moet minstens 2 karaters bevatten",
        name,
        ervaring,
      });

    return { success: true, props: { formObject } };
  },
};
