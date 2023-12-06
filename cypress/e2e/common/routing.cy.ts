import { selectByTestId } from "cypress/helpers/selectByTestId";

describe("Роутинг", () => {
  describe("Пользователь не авторизован", () => {
    it("Переход на главную страницу", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("Переход открывает главную страницу", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("Переход на несуществующую страницу", () => {
      cy.visit("/super-puper-not-found");
      cy.get(selectByTestId("NotFoundPage")).should("exist");
    });
  });

  describe("Пользователь авторизован", () => {
    beforeEach(() => cy.login("admin", "123"));

    it("Переход на страницу профиля", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("ProfilePage")).should("exist");
    });

    it("Переход на страницу статей", () => {
      cy.visit("articles");
      cy.get(selectByTestId("ArticlesPage")).should("exist");
    });
  });
});
