// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => {  })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { ClickLink , ClickLinknewtab,clickmenu,login,searchbox }  from '../support/clickmenu/click_menu';

Cypress.Commands.add('ClickLink', ClickLink);
Cypress.Commands.add('ClickLinknewtab', ClickLinknewtab);
Cypress.Commands.add('clickmenu', clickmenu);
Cypress.Commands.add('login', login);
Cypress.Commands.add('searchbox',searchbox);
