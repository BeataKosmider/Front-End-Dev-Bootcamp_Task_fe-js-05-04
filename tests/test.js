import { waitFor } from "@testing-library/dom";

test("should find text 'Boom!' on #startTimeout button click", async () => {
  const STARTING_HTML = `<button id="startTimeout">Click me</button>`;
  document.body.innerHTML = STARTING_HTML;
  require("./../index.js");

  const btn = document.querySelector("#startTimeout");

  btn.click();

  await waitFor(() => {
    expect(document.body.innerHTML).toBe(`${STARTING_HTML}<h1>Boom!</h1>`);
  });
});
