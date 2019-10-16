/**
 * @name navigateToHomePage
 * @Description it navigates to the BaseUrl
 */
export function navigateToHomePage() {
    cy.visit("/");
}

/**
 * @name verifyLink
 * @Description it verifies the link Url and title
 * @param pgTitle 
 * @param pgUrl 
 */
export function verifyLink(pgTitle: string, pgUrl: string) {
   cy.url().should('include',pgUrl);
    cy.title().should('include',pgTitle);
}