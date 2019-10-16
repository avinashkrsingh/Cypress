import * as Hepage from '../../pageObjects/Header.Page';

import * as Fdpage from '../../pageObjects/Header.page';
import { clickmenu } from '../../support/clickmenu/click_menu';
describe('LeadValidationForm Suite', () => {

    before(() => {
        cy.visit('/');
        cy.get(Hepage.CookieCloseButton).click({force:true});
     
    })

    it('Verify user is on any TA.com IndividuaI page, then upon click over TA logo - user will land on IndividuaI Home page', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get(Hepage.Login).eq(0).should('be.visible').click().wait(3000)
        cy.url().should('include', 'https://www.transamerica.com/login/#page-0')  
        cy.get(Hepage.TaLogo).eq(0).should('be.visible').click()
        cy.url().should('include', 'www.transamerica.com/individual/') 

    })

    it('Verify user is on any TA.com FP page, then upon click over TA logo - user will land on FP Home page', () => {
        cy.visit('https://www.transamerica.com/financial-professional/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
      
        cy.get(Hepage.WhatWeOffer).eq(3).should('be.visible').click().wait(3000)
         
        cy.get(Hepage.FpRetirementSolution).eq(0).should('be.visible').click()
        cy.url().should('include', '/financial-professional/what-we-offer/products/retirement-solutions/') 
        cy.get(Hepage.TaLogo).eq(0).should('be.visible').click()
        cy.url().should('include', '/financial-professional/') 

    })

    it('Verify user is on any TA.com Employer page, then upon click over TA logo - user will land on Employer Home page', () => {
        cy.visit('https://www.transamerica.com/employer/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
      
        cy.get(Hepage.WhatWeOffer).eq(6).should('be.visible').click().wait(3000)
         
        cy.get(Hepage.EmpRetirementSolution).eq(0).should('be.visible').click()
        cy.url().should('include', '/employer/what-we-offer/products/retirement-solutions/') 
        cy.get(Hepage.TaLogo).eq(0).should('be.visible').click()
        cy.url().should('include', '/employer/') 

    })


//     it.only('Verify menu  Links for Indiviual, Finicial Professional and Employer ', () => {
//   clickmenu();
//     })


})