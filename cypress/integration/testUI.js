/// <reference types="Cypress" />

const URL = "http://127.0.0.1:8080";

context("WEB de tipos de cambio", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("Usa la WEB", () => {
    let fetchPolyfill;

    before(() => {
      const polyfillUrl = "https://unpkg.com/unfetch/dist/unfetch.umd.js";

      cy.request(polyfillUrl).then((response) => {
        fetchPolyfill = response.body;
      });

      cy.server();
      cy.route(
        "https://api.exchangeratesapi.io/2020-05-18?base=CAD",
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
    it("Se asegura que aparezca el cartel de éxito", () => {
      cy.get("#fecha-input").type("2020-05-18");
      cy.get("#listado-monedas").select("CAD");
      cy.get("#obtener-valores").click();
      cy.get("#notificacion").should("have.class", "alert-success");
    });
    it("Se asegura que aparezca el cartel de error", () => {
      cy.get("#fecha-input").type("2020-05-18");
      cy.get("#listado-monedas").select("CAD");
      cy.get("#listado-monedas").should("have.value", "CAD");
      cy.get("#listado-monedas").select("");
      cy.get("#obtener-valores").click();
      cy.get("#notificacion").should("have.class", "alert-danger");
    });
    it("Checkea que funcione el botón Limpiar", () => {
      cy.get("#eliminar-todo").click();
      cy.get("#notificacion").should("have.class", "");
      cy.get("#container-principal")
        .find(".card-wrapper")
        .should("have.length", 0);
    });
  });
});
