/// <reference types="Cypress" />

describe("WEB de tipos de cambio", () => {
  let fetchPolyfill;

  before(() => {
    const polyfillUrl = "https://unpkg.com/unfetch/dist/unfetch.umd.js";

    cy.request(polyfillUrl).then((response) => {
      fetchPolyfill = response.body;
    });

    cy.server();
    cy.route(
      "https://api.exchangeratesapi.io/2020-10-06?base=ISK",
      "fixture:cambios"
    ).as("obtenerCambios");

    cy.visit("http://127.0.0.1:8080", {
      onBeforeLoad(contentWindow) {
        // eslint-disable-next-line no-param-reassign
        delete contentWindow.fetch;
        contentWindow.eval(fetchPolyfill);
        // eslint-disable-next-line no-param-reassign
        contentWindow.fetch = contentWindow.unfetch;
      },
    });
  });
  it("Checkea que se creen todos los cuadros", () => {
    cy.get("@obtenerCambios").then(console.log);
    cy.get("#fecha-input").type("2020-10-06");
    cy.get("#listado-monedas").select("ISK");
    cy.get("#obtener-valores").click();
    cy.get("#notificacion").should("have.class", "alert-success");
    cy.get("#container-principal")
      .find(".card-wrapper")
      .should("have.length", 33);
  });
});
