/// <reference types="cypress"/>

import * as commonF from "../../commonFunctions/functions";



describe('Verify Link and page title For links present under What We Offer', () => {

    before(() => {
        commonF.navigateToHomePage();
    })

    beforeEach(() => {
        cy.get('#trk_145_15791_X-tab').within(() => {
            cy.contains('What We Offer').click()
        })
    })

    it.only('Verifies the Retirement Solutions Link and Page title', () => {
         cy.contains('Retirement Solutions').click().then(() => {
            commonF.verifyLink('Retirement Solutions', '/retirement-solutions/');
      
         })
    })

    it('Verifies the Mutual Funds Link and Page title', () => {
        cy.contains('Mutual Funds').then(() => {
            cy.contains('Mutual Funds').click();
            commonF.verifyLink('Mutual Funds', '/mutual-funds/');
        })
    })

    it('Verifies the Annuities Link and Page title', () => {
        cy.contains('Annuities').then(() => {
            cy.contains('Annuities').click();
            commonF.verifyLink('Annuities', '/annuities/');
        })
    })


    it('Verifies the Insurance Link and Page title', () => {
        cy.contains('Insurance').then(() => {
            cy.contains('Insurance').click();
            commonF.verifyLink('Insurance', '/insurance/');
        })
    })


    it('Verifies the Employee Benefits Link and Page title', () => {
        cy.contains('Employee Benefits').then(() => {
            cy.contains('Employee Benefits').click();
            commonF.verifyLink('Employee Benefits', '/employee-benefits/');
        })
    })


    it('Verifies the Exchange Traded Funds Link and Page title', () => {
        cy.contains('Exchange Traded Funds').then(() => {
            cy.contains('Exchange Traded Funds').click();
            commonF.verifyLink('Exchange Traded Funds', '/etfs/');
        })
    })



})

