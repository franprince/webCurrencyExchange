/// <reference types="Cypress" />

const URL = "http://127.0.0.1:8080";

context("WEB de tipos de cambio", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("Usa la WEB", () => {
    it("Se asegura que aparezca el cartel de éxito", () => {
      cy.get("#fecha-input").type("2020-05-18");
      cy.get("#listado-monedas").select("CAD");
      cy.get("#obtener-valores").click();
      cy.get("#notificacion").should("have.class", "alert-success");
    });
    it("Intenta forzar un error", () => {
      cy.get("#fecha-input").type("2020-05-18");
      cy.get("#listado-monedas").select("CAD");
      cy.get("#listado-monedas").should("have.value", "CAD");
      cy.get("#listado-monedas").select("");
      cy.get("#obtener-valores").click();
      cy.get("#notificacion").should("have.class", "alert-danger");
    });
  });
});
