
export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId("EditableProfileCardHeader.EditButton").click();
  cy.getByTestId("ProfileCard.firstname").clear().type(firstname);
  cy.getByTestId("ProfileCard.lastname").clear().type(lastname);
  cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: "adsad" },
    body: {
      id: "1",
      first: "admin",
      lastname: "kek",
      age: 465,
      currency: "RUB",
      country: "Russia",
      city: "Moscow",
      username: "admin",
      avatar:
        "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
