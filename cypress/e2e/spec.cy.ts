describe("E2E Test for MSS Studio Car", () => {
  beforeEach(() => {
    cy.visit("https://www.mssstudiocar.com.br/");
  });

  context("Page Navigation Links", () => {
    it('should have the correct link and target for "Continuar lendo"', () => {
      cy.contains("Continuar lendo")
        .parents("a")
        .should("have.attr", "href", "/sobre")
        .and("have.attr", "target", "_blank");
    });

    it('should have the correct link and target for "Clique para saber mais"', () => {
      cy.contains("Clique para saber mais")
        .parents("a")
        .should("have.attr", "href", "/curso")
        .and("have.attr", "target", "_blank");
    });
  });

  context("Service Links", () => {
    const services = [
      { name: "Polimento", path: "/servicos/polimento" },
      {
        name: "Revitalização de Farol",
        path: "/servicos/revitalizacao-de-farol",
      },
      {
        name: "Vitrificação de Pintura",
        path: "/servicos/vitrificacao-de-pintura",
      },
      {
        name: "Higienização Interna Premium",
        path: "/servicos/higienizacao-interna-premium",
      },
    ];

    services.forEach((service) => {
      it(`should navigate to the ${service.name} page`, () => {
        cy.get(`a[href="${service.path}"]`).first().click();
        cy.url().should("include", service.path);
        cy.go("back");
      });
    });
  });

  context("External and Component Based Links", () => {
    it('should point the "Solicite um orçamento" button to the exact WhatsApp link', () => {
      const phoneNumber = "5541999346385";
      const message = "Olá! Gostaria de solicitar um orçamento.";
      const encodedMessage = encodeURIComponent(message);
      const expectedLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      cy.contains("Solicite um orçamento")
        .parents("a")
        .should("have.attr", "href", expectedLink);
    });

    it('should point the "Entrar em contato" button to the exact WhatsApp link', () => {
      const message = "Olá, gostaria de saber mais sobre os serviços!";
      const phoneNumber = "5541999346385";
      const encodedMessage = encodeURIComponent(message);
      const expectedLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      cy.contains("Entrar em contato")
        .parents("a")
        .should("have.attr", "href", expectedLink);
    });

    it('should point the "Nos avalie no Google!" link to the correct URL and open in a new tab', () => {
      const expectedLink = "https://g.page/r/CahbS7buR34pEAI/review";

      cy.contains("Nos avalie no Google!")
        .parents("a")
        .should("have.attr", "href", expectedLink)
        .and("have.attr", "target", "_blank");
    });
  });
});
