let profileId = "";

describe("Юзер заходит на страницу профиля", () => {
  beforeEach(() => {
    cy.login("admin", "123").then((data) => {
      profileId = data.id;
      cy.visit(`profile/${profileId}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it("Профиль загружается", () => {
    cy.getByTestId("ProfileCard.firstname").should("have.value", "admin");
  });

  it("Профиль редактируется", () => {
    const firstName = "new";
    const lastName = "lastname";

    cy.updateProfile(firstName, lastName);
    cy.getByTestId("ProfileCard.firstname").should("have.value", firstName);
    cy.getByTestId("ProfileCard.lastname").should("have.value", lastName);
  });
});
