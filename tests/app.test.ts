import { describe, test, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("App", async () => {
  await setup()

  test("Renders", async () => {
    const html = await $fetch("/");
    expect(html).toContain("Nuxt 3");
  });
});
