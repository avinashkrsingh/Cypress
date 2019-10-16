/// <reference types="cypress"/>
import * as lvpage from '../../pageObjects/LeadValidationFrom.page';


describe('LeadValidationForm Suite', () => {

    before(() => {
        cy.visit('/');
        cy.get(lvpage.CookieCloseButton).click({force:true});
     
    });

    it.only('II - Sign Up - chekcing all the feilds on Please enter your contact info after clciking on sign up link', () => {
        cy.get(lvpage.IndSignUpButton).click({force:true});
        cy.wait(2000)  
      //  cy.get('#leadValidationFormId-leadValidation-subscribeWMH').within(() => {
        cy.get(lvpage.IndSignUpEmail).should('be.visible');
          cy.get(lvpage.IndSignUpCompanyName).should('be.visible');
          cy.get(lvpage.IndSignUpFirstLastName).should('be.visible');
        
          cy.get(lvpage.IndSignUpTitle).should('be.visible')
          .should('contain','Please enter your')
          cy.get(lvpage.IndSignUpDsiclaimer).should('be.visible');
          cy.get(lvpage.IndSignUpWindowCloseButton).should('be.visible')
          cy.get(lvpage.IndSignUpSubmitButton).should('be.disabled');
          cy.get(lvpage.IndSignUpOnlinePrivacyStatement).should('be.visible');
          cy.log('all links are visible as expected')
          cy.get(lvpage.IndSignUpTermsofUse).click() 
          cy.url().should('include', '/terms-of-use-customers/')  
          cy.go('back')
          cy.url().should('include', 'www.transamerica.com/individual/')  
          cy.get(lvpage.IndSignUpButton).click();
          cy.get(lvpage.IndSignUpOnlinePrivacyStatement).click() 
          cy.url().should('include', 'www.transamerica.com/privacy-policy/') 
          
         })

    it.only('II - Sign Up - II - Verifying signup lead validation form error when we enter email id in wrong formatte ', () => {
      cy.get(lvpage.IndSignUpButton).click({force:true});
      cy.get(lvpage.IndSignUpSubmitButton).should('be.disabled');
      cy.get(lvpage.IndSignUpEmail).clear().type('a@b.')
      cy.get(lvpage.IndSignUpCompanyName).click()
      // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
      cy.get(lvpage.IndSignUpCompanyName).clear().type('c')
     // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
      cy.get(lvpage.IndSignUpEmail).clear().type('a@b.com')
      cy.get(lvpage.IndSignUpCompanyName).clear().type('ia')
      cy.get(lvpage.IndSignUpEmail).click()
      cy.get(lvpage.IndSignUpSubmitButton).should('be.enabled');
  })

  it('II - Sign Up - chekcing thank you pop-up message and yes button functionality after entering the valid email id', () => {
    cy.contains(lvpage.IndSignUpButton).click({force:true});
    cy.get(lvpage.IndSignUpSubmitButton).should('be.disabled');
    cy.get(lvpage.IndSignUpEmail).clear().type('a@b.com')
    cy.get(lvpage.IndSignUpCompanyName).clear().type('ia')
    cy.get(lvpage.IndSignUpEmail).click()
    cy.get(lvpage.IndSignUpSubmitButton).should('be.enabled').click()
    cy.get(lvpage.IndSignupThankyou).should('be.visible')
    cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
    cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
    cy.get(lvpage.IndSignupClosebutton).should('be.visible').click();
    cy.wait(2000)  
    cy.get(lvpage.IndSignUpButton).click({force:true});
    cy.get(lvpage.IndSignupSendDocument).should('be.visible')
    cy.get(lvpage.IndSignupWrongEmail).should('be.visible')
    cy.get(lvpage.IndSignupYes).should('be.visible').click()
    cy.get(lvpage.IndSignupThankyou).should('be.visible')
    cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
    cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
    cy.get(lvpage.IndSignupClosebutton).click()
    cy.contains(lvpage.IndSignUpButton).click({force:true});
  })

it('II - Sign Up - chekcing thank you pop-up message and wrong button functionality after entering the valid email id', () => {
  cy.get(lvpage.IndSignUpButton).click({force:true});
  cy.get(lvpage.IndSignUpSubmitButton).should('be.disabled');
    cy.get(lvpage.IndSignUpEmail).clear().type('a@b.com')
    cy.get(lvpage.IndSignUpCompanyName).clear().type('ia')
    cy.get(lvpage.IndSignUpEmail).click()
    cy.get(lvpage.IndSignUpSubmitButton).should('be.enabled').click()
    cy.get(lvpage.IndSignupThankyou).should('be.visible')
    cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
    cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
    cy.get(lvpage.IndSignupClosebutton).should('be.visible').click();
    cy.wait(2000)  
    cy.get(lvpage.IndSignUpButton).click({force:true});
    cy.get(lvpage.IndSignupSendDocument).should('be.visible')
    cy.get(lvpage.IndSignupYes).should('be.visible')
    cy.get(lvpage.IndSignupWrongEmail).should('be.visible').click()
    cy.get(lvpage.IndSignUpTitle).should('be.visible')
    cy.get(lvpage.IndSignUpDsiclaimer).should('be.visible');
    cy.get(lvpage.IndSignUpWindowCloseButton).should('be.visible')
    cy.get(lvpage.IndSignUpSubmitButton).should('be.disabled');
})



it('FP - Sign Up - chekcing all the feilds on Please enter your contact info after clciking on sign up link', () => {
  cy.visit('https://www.transamerica.com/financial-professional/')
      cy.get(lvpage.FpSucscibeButton).click()
      cy.wait(2000)  
    cy.get(lvpage.FpSubscribeEmail).should('be.visible');
    cy.get(lvpage.FpSubscibeCompanyName).should('be.visible');
    cy.get(lvpage.FpSubscibeFirstLastName).should('be.visible');
    cy.get(lvpage.FpSubscibeTitle).should('be.visible')
    .should('contain','Please enter your')
    cy.get(lvpage.FpSubscibeDsiclaimer).should('be.visible');
    cy.get(lvpage.FpSubscibeWindowCloseButton).should('be.visible')
    cy.get(lvpage.FpSubscibeSubmitButton).should('be.disabled');
    cy.get(lvpage.FpSubscibePrivacyStatement).should('be.visible');
    cy.get(lvpage.FpSubscibeTermsofUse).should('be.visible').click()
    cy.url().should('include', '/terms-of-use-customers/')  
    cy.go('back')
    cy.url().should('include', '/financial-professional/')  
    cy.get(lvpage.FpSucscibeButton).click();
    cy.get(lvpage.FpSubscibePrivacyStatement).click() 
    cy.url().should('include', 'www.transamerica.com/privacy-policy/') 
})

it('Fp - Subscibe - Fp - Verifying signup lead validation form error when we enter email id in wrong formatte ', () => {
  cy.visit('https://www.transamerica.com/financial-professional/')
  cy.get(lvpage.FpSucscibeButton).click({force:true});
  cy.get(lvpage.FpSubscibeSubmitButton).should('be.disabled');
  cy.get(lvpage.FpSubscribeEmail).clear().type('a@b.')
  cy.get(lvpage.FpSubscibeCompanyName).click()
//    cy.contains("Please enter a valid email address").invoke('text').then((text)=> {console.log(text)})

//    cy.get('.myClass')
// .then($els => {
//   // get Window reference from element
//   if($els[0].ownerDocument.defaultView !== undefined) { const win = $els[0].ownerDocument.defaultView} 
//   // use getComputedStyle to read the pseudo selector
//   const before = win.getComputedStyle($els[0], 'before')
//   // read the value of the `content` CSS property
//   const contentValue = before.getPropertyValue('content')
//   // the returned value will have double quotes around it, but this is correct
//   expect(contentValue).to.eq('"foo-"')


//   cy.get("iframe").then(function($iframe){
//     // query into the iframe
//     var b = $iframe.contents().find("body")
  
//     // you can work with this element here but it cannot
//     // be returned
  
//     var evt = new Event(...)
//     b.dispatchEvent(evt)
  
//     return null
    cy.get(lvpage.FpSubscibeCompanyName).clear().type('c')
 // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
  cy.get(lvpage.FpSubscribeEmail).clear().type('a@b.com')
  cy.get(lvpage.FpSubscibeCompanyName).clear().type('ia')
  cy.get(lvpage.FpSubscribeEmail).click()
  cy.get(lvpage.IndSignUpSubmitButton).should('be.enabled');
})

it('Fp - Subscribe - chekcing thank you pop-up message and yes button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/financial-professional/')
  cy.wait(2000)
  cy.get(lvpage.FpSucscibeButton).click()
  cy.get(lvpage.FpSubscibeSubmitButton).should('be.disabled');
  cy.get(lvpage.FpSubscribeEmail).clear().type('a@b.com')
  cy.get(lvpage.FpSubscibeCompanyName).clear().type('ia')
  cy.get(lvpage.FpSubscribeEmail).click()
  cy.get(lvpage.FpSubscibeSubmitButton).should('be.enabled').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
  cy.get(lvpage.FpSubscibeClosebutton).should('be.visible').click();
  cy.wait(2000)  
  cy.get(lvpage.FpSucscibeButton).click({force:true});
  cy.get(lvpage.FpSubscibeSendDocument).should('be.visible')
  cy.get(lvpage.FpSubscibeWrongEmail).should('be.visible')
  cy.get(lvpage.FpSubscibeYes).should('be.visible').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
  cy.get(lvpage.FpSubscibeClosebutton).click()
})

it('Fp - Subscibe - chekcing thank you pop-up message and wrong button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/financial-professional/')
  cy.get(lvpage.FpSucscibeButton).click()
  cy.get(lvpage.FpSubscibeSubmitButton).should('be.disabled');
    cy.get(lvpage.FpSubscribeEmail).clear().type('a@b.com')
    cy.get(lvpage.FpSubscibeCompanyName).clear().type('ia')
    cy.get(lvpage.FpSubscribeEmail).click()
    cy.get(lvpage.FpSubscibeSubmitButton).should('be.enabled').click()
    cy.get(lvpage.IndSignupThankyou).should('be.visible')
    cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
    cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
    cy.get(lvpage.FpSubscibeClosebutton).should('be.visible').click();
    cy.wait(2000)  
    cy.get(lvpage.FpSucscibeButton).click({force:true});
    cy.get(lvpage.FpSubscibeSendDocument).should('be.visible')
    cy.get(lvpage.FpSubscibeYes).should('be.visible')
    cy.get(lvpage.FpSubscibeWrongEmail).should('be.visible').click()
    cy.get(lvpage.FpSubscribeEmail).should('be.visible');
    cy.get(lvpage.FpSubscibeCompanyName).should('be.visible');
    cy.get(lvpage.FpSubscibeFirstLastName).should('be.visible');
    cy.get(lvpage.FpSubscibeTitle).should('be.visible')
    .should('contain','Please enter your')
    cy.get(lvpage.FpSubscibeDsiclaimer).should('be.visible');
    cy.get(lvpage.FpSubscibeWindowCloseButton).should('be.visible')
    cy.get(lvpage.FpSubscibeSubmitButton).should('be.disabled');
})



it('FP - SIGN ME UP-_LVF-checking all the field labels', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/tools-and-services/advisor-experience/')
  cy.contains(lvpage.FpSignMeUpButton).click({force:true});
  cy.wait(2000)  
    cy.get(lvpage.FpSignMeUpEmail).should('be.visible');
    cy.get(lvpage.FpSignMeUpCompanyName).should('be.visible');
    cy.get(lvpage.FpSignMeUpFirstLastName).should('be.visible');
    cy.get(lvpage.FpSignMeUpTitle).should('be.visible')
    .should('contain','Please enter your')
    cy.get(lvpage.FpSignMeUpDsiclaimer).should('be.visible');
    cy.get(lvpage.FpSignMeUpWindowCloseButton).should('be.visible')
    cy.get(lvpage.FpSignMeUpSubmitButton).should('be.disabled');
    cy.get(lvpage.FpSignMeUpPrivacyStatement).should('be.visible');
    cy.get(lvpage.FpSignMeUpTermsofUse).click() 
    cy.url().should('include', '/terms-of-use-customers/')  
    cy.go('back')
    cy.url().should('include', 'what-we-offer/tools-and-services/advisor-experience/')  
    cy.get(lvpage.FpSignMeUpButton).click();
    cy.get(lvpage.FpSignMeUpPrivacyStatement).click() 
    cy.url().should('include', 'www.transamerica.com/privacy-policy/') 
})

it('FP - SIGN ME UP - Verifying signup lead validation form error when we enter email id in wrong formatte ', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/tools-and-services/advisor-experience/')
  cy.contains(lvpage.FpSignMeUpButton).click({force:true});
  cy.wait(2000) 
  cy.get(lvpage.FpSignMeUpSubmitButton).should('be.disabled');
  cy.get(lvpage.FpSignMeUpEmail).clear().type('a@b.')
  cy.get(lvpage.FpSignMeUpCompanyName).click()
  // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
  cy.get(lvpage.FpSignMeUpCompanyName).clear().type('c')
 // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
  cy.get(lvpage.FpSignMeUpEmail).clear().type('a@b.com')
  cy.get(lvpage.FpSignMeUpCompanyName).clear().type('ia')
  cy.get(lvpage.FpSignMeUpEmail).click()
  cy.get(lvpage.FpSignMeUpSubmitButton).should('be.enabled');
})

it('FP - SIGN ME UP - chekcing thank you pop-up message and yes button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/tools-and-services/advisor-experience/')
  cy.contains(lvpage.FpSignMeUpButton).click({force:true});
  cy.wait(2000) 
cy.get(lvpage.FpSignMeUpSubmitButton).should('be.disabled');
cy.get(lvpage.FpSignMeUpEmail).clear().type('a@b.com')
cy.get(lvpage.FpSignMeUpCompanyName).clear().type('ia')
cy.get(lvpage.FpSignMeUpEmail).click()
cy.get(lvpage.FpSignMeUpSubmitButton).should('be.enabled').click()
cy.get(lvpage.IndSignupThankyou).should('be.visible')
cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
cy.get(lvpage.FpSignMeUpClosebutton).should('be.visible').click();
cy.wait(2000)  
cy.get(lvpage.FpSignMeUpButton).click({force:true});
cy.get(lvpage.FpSignMeUpSendDocument).should('be.visible')
cy.get(lvpage.FpSignMeUpWrongEmail).should('be.visible')
cy.get(lvpage.FpSignMeUpYes).should('be.visible').click()
cy.get(lvpage.IndSignupThankyou).should('be.visible')
cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
cy.get(lvpage.FpSignMeUpClosebutton).click()
})

it('FP - SIGN ME UP - chekcing thank you pop-up message and wrong button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/tools-and-services/advisor-experience/')
  cy.contains(lvpage.FpSignMeUpButton).click({force:true});
  cy.wait(2000) 
cy.get(lvpage.FpSignMeUpSubmitButton).should('be.disabled');
cy.get(lvpage.FpSignMeUpEmail).clear().type('a@b.com')
cy.get(lvpage.FpSignMeUpCompanyName).clear().type('ia')
cy.get(lvpage.FpSignMeUpEmail).click()
cy.get(lvpage.FpSignMeUpSubmitButton).should('be.enabled').click()
cy.get(lvpage.IndSignupThankyou).should('be.visible')
cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
cy.get(lvpage.FpSignMeUpClosebutton).should('be.visible').click();
cy.wait(2000)  
cy.get(lvpage.FpSignMeUpButton).click({force:true});
cy.get(lvpage.FpSignMeUpSendDocument).should('be.visible')
cy.get(lvpage.FpSignMeUpYes).should('be.visible')
cy.get(lvpage.FpSignMeUpWrongEmail).should('be.visible').click()
cy.get(lvpage.FpSignMeUpTitle).should('be.visible')
cy.get(lvpage.FpSignMeUpDsiclaimer).should('be.visible');
cy.get(lvpage.FpSignMeUpWindowCloseButton).should('be.visible')
cy.get(lvpage.FpSignMeUpSubmitButton).should('be.disabled');
})



it('FP - SUBSCRIBE insightandcommentary - chekcing all the feilds on Please enter your contact info after clciking on sign up link', () => {
  cy.visit('https://www.transamerica.com/financial-professional/why-transamerica/how-we-are-different/insights-and-commentary/')
      cy.get(lvpage.FpSucscibeButton).click()
  cy.wait(2000)  
    cy.get(lvpage.FpSubscribeEmail).should('be.visible');
    cy.get(lvpage.FpSubscibeCompanyName).should('be.visible');
    cy.get(lvpage.FpSubscibeFirstLastName).should('be.visible');
    cy.get(lvpage.FpSubscibeTitle).should('be.visible')
    .should('contain','Please enter your')
    cy.get(lvpage.FpSubscibeDsiclaimer).should('be.visible');
    cy.get(lvpage.FpSubscibeWindowCloseButton).should('be.visible')
    cy.get(lvpage.FpSubscibeSubmitButton).should('be.disabled');
    cy.get(lvpage.FpSubscibePrivacyStatement).should('be.visible');
    cy.get(lvpage.FpSubscibeTermsofUse).should('be.visible').click()
    cy.url().should('include', '/terms-of-use-customers/')  
    cy.go('back')
    cy.url().should('include', '/financial-professional/why-transamerica/how-we-are-different/insights-and-commentary/')  
    cy.get(lvpage.FpSucscibeButton).click();
    cy.get(lvpage.FpSubscibePrivacyStatement).click() 
    cy.url().should('include', 'www.transamerica.com/privacy-policy/') 
})

it('FP - SUBSCRIBE insightandcommentary - Verifying signup lead validation form error when we enter email id in wrong formatte ', () => {
  cy.visit('https://www.transamerica.com/financial-professional/why-transamerica/how-we-are-different/insights-and-commentary/')
  cy.get(lvpage.FpSucscibeButton).click()
  cy.get(lvpage.FpSubscibeSubmitButton).should('be.disabled');
  cy.get(lvpage.FpSubscribeEmail).clear().type('a@b.')
  cy.get(lvpage.FpSubscibeCompanyName).click()
  cy.get(lvpage.FpSubscibeCompanyName).clear().type('c')
 // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
  cy.get(lvpage.FpSubscribeEmail).clear().type('a@b.com')
  cy.get(lvpage.FpSubscibeCompanyName).clear().type('ia')
  cy.get(lvpage.FpSubscribeEmail).click()
  cy.get(lvpage.IndSignUpSubmitButton).should('be.enabled');
})

it('FP - SUBSCRIBE insightandcommentary - chekcing thank you pop-up message and yes button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/financial-professional/why-transamerica/how-we-are-different/insights-and-commentary/')
  cy.wait(2000)
  cy.get(lvpage.FpSucscibeButton).click()
  cy.get(lvpage.FpSubscibeSubmitButton).should('be.disabled');
  cy.get(lvpage.FpSubscribeEmail).clear().type('a@b.com')
  cy.get(lvpage.FpSubscibeCompanyName).clear().type('ia')
  cy.get(lvpage.FpSubscribeEmail).click()
  cy.get(lvpage.FpSubscibeSubmitButton).should('be.enabled').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
  cy.get(lvpage.FpSubscibeClosebutton).should('be.visible').click();
  cy.wait(2000)  
  cy.get(lvpage.FpSucscibeButton).click()
  cy.get(lvpage.FpSubscibeSendDocument).should('be.visible')
  cy.get(lvpage.FpSubscibeWrongEmail).should('be.visible')
  cy.get(lvpage.FpSubscibeYes).should('be.visible').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
})

it('FP - SUBSCRIBE insightandcommentary - chekcing thank you pop-up message and wrong button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/financial-professional/why-transamerica/how-we-are-different/insights-and-commentary/')
  cy.get(lvpage.FpSucscibeButton).click()
    cy.get(lvpage.FpSubscibeSubmitButton).should('be.disabled');
    cy.get(lvpage.FpSubscribeEmail).clear().type('a@b.com')
    cy.get(lvpage.FpSubscibeCompanyName).clear().type('ia')
    cy.get(lvpage.FpSubscribeEmail).click()
    cy.get(lvpage.FpSubscibeSubmitButton).should('be.enabled').click()
    cy.get(lvpage.IndSignupThankyou).should('be.visible')
    cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
    cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
    cy.get(lvpage.FpSubscibeClosebutton).should('be.visible').click();
    cy.wait(2000)  
    cy.get(lvpage.FpSucscibeButton).click()
    cy.get(lvpage.FpSubscibeSendDocument).should('be.visible')
    cy.get(lvpage.FpSubscibeYes).should('be.visible')
    cy.get(lvpage.FpSubscibeWrongEmail).should('be.visible').click()
    cy.get(lvpage.FpSubscribeEmail).should('be.visible');
    cy.get(lvpage.FpSubscibeCompanyName).should('be.visible');
    cy.get(lvpage.FpSubscibeFirstLastName).should('be.visible');
    cy.get(lvpage.FpSubscibeTitle).should('be.visible')
    .should('contain','Please enter your')
    cy.get(lvpage.FpSubscibeDsiclaimer).should('be.visible');
    cy.get(lvpage.FpSubscibeWindowCloseButton).should('be.visible')
    cy.get(lvpage.FpSubscibeSubmitButton).should('be.disabled');
})



it('FP - SUBSCRIBE new-age-of-advice - chekcing all the feilds on Please enter your contact info after clciking on sign up link', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/education/new-age-of-advice/')
      cy.get(lvpage.FpEducationSucscibeButton).click()
  cy.wait(2000)  
    cy.get(lvpage.FpEducationSubscribeEmail).should('be.visible');
    cy.get(lvpage.FpEducationSubscibeCompanyName).should('be.visible');
    cy.get(lvpage.FpEducationSubscibeFirstLastName).should('be.visible');
    cy.get(lvpage.FpEducationSubscibeTitle).should('be.visible')
    .should('contain','Please enter your')
    cy.get(lvpage.FpEducationSubscibeDsiclaimer).should('be.visible');
    cy.get(lvpage.FpEducationSubscibeWindowCloseButton).should('be.visible')
    cy.get(lvpage.FpEducationSubscibeSubmitButton).should('be.disabled');
    cy.get(lvpage.FpEducationSubscibePrivacyStatement).should('be.visible');
    cy.get(lvpage.FpEducationSubscibeTermsofUse).should('be.visible').click()
    cy.url().should('include', '/terms-of-use-customers/')  
    cy.go('back')
    cy.url().should('include', 'https://www.transamerica.com/financial-professional/what-we-offer/education/new-age-of-advice/')  
    cy.get(lvpage.FpEducationSucscibeButton).click();
    cy.get(lvpage.FpEducationSubscibePrivacyStatement).click() 
    cy.url().should('include', 'www.transamerica.com/privacy-policy/') 
})

it('FP - SUBSCRIBE new-age-of-advice - Verifying signup lead validation form error when we enter email id in wrong formatte ', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/education/new-age-of-advice/')
  cy.get(lvpage.FpEducationSucscibeButton).click()
  cy.get(lvpage.FpEducationSubscibeSubmitButton).should('be.disabled');
  cy.get(lvpage.FpEducationSubscribeEmail).clear().type('a@b.')
  cy.get(lvpage.FpEducationSubscibeCompanyName).click()
  cy.get(lvpage.FpEducationSubscibeCompanyName).clear().type('c')
 // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
  cy.get(lvpage.FpEducationSubscribeEmail).clear().type('a@b.com')
  cy.get(lvpage.FpEducationSubscibeCompanyName).clear().type('ia')
  cy.get(lvpage.FpEducationSubscribeEmail).click()
  cy.get(lvpage.FpEducationSubscibeSubmitButton).should('be.enabled');
})

it('FP - SUBSCRIBE new-age-of-advice - chekcing thank you pop-up message and yes button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/education/new-age-of-advice/')
  cy.wait(2000)
  cy.get(lvpage.FpEducationSucscibeButton).click()
  cy.get(lvpage.FpEducationSubscibeSubmitButton).should('be.disabled');
  cy.get(lvpage.FpEducationSubscribeEmail).clear().type('a@b.com')
  cy.get(lvpage.FpEducationSubscibeCompanyName).clear().type('ia')
  cy.get(lvpage.FpEducationSubscribeEmail).click()
  cy.get(lvpage.FpEducationSubscibeSubmitButton).should('be.enabled').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
  cy.get(lvpage.FpEducationSubscibeClosebutton).should('be.visible').click();
  cy.wait(2000)  
  cy.get(lvpage.FpEducationSucscibeButton).click()
  cy.get(lvpage.FpEducationSubscibeSendDocument).should('be.visible')
  cy.get(lvpage.FpEducationSubscibeWrongEmail).should('be.visible')
  cy.get(lvpage.FpEducationSubscibeYes).should('be.visible').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
})

it('FP - SUBSCRIBE new-age-of-advice - chekcing thank you pop-up message and wrong button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/education/new-age-of-advice/')
  cy.get(lvpage.FpEducationSucscibeButton).click()
    cy.get(lvpage.FpEducationSubscibeSubmitButton).should('be.disabled');
    cy.get(lvpage.FpEducationSubscribeEmail).clear().type('a@b.com')
    cy.get(lvpage.FpEducationSubscibeCompanyName).clear().type('ia')
    cy.get(lvpage.FpEducationSubscribeEmail).click()
    cy.get(lvpage.FpEducationSubscibeSubmitButton).should('be.enabled').click()
    cy.get(lvpage.IndSignupThankyou).should('be.visible')
    cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
    cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
    cy.get(lvpage.FpEducationSubscibeClosebutton).should('be.visible').click();
    cy.wait(2000)  
    cy.get(lvpage.FpEducationSucscibeButton).click()
    cy.get(lvpage.FpEducationSubscibeSendDocument).should('be.visible')
    cy.get(lvpage.FpEducationSubscibeYes).should('be.visible')
    cy.get(lvpage.FpEducationSubscibeWrongEmail).should('be.visible').click()
    cy.get(lvpage.FpEducationSubscribeEmail).should('be.visible');
    cy.get(lvpage.FpEducationSubscibeCompanyName).should('be.visible');
    cy.get(lvpage.FpEducationSubscibeFirstLastName).should('be.visible');
    cy.get(lvpage.FpEducationSubscibeTitle).should('be.visible')
    .should('contain','Please enter your')
    cy.get(lvpage.FpEducationSubscibeDsiclaimer).should('be.visible');
    cy.get(lvpage.FpEducationSubscibeWindowCloseButton).should('be.visible')
    cy.get(lvpage.FpEducationSubscibeSubmitButton).should('be.disabled');
})



it('II - MUTUAL FUND - chekcing all the feilds on Please enter your contact info after clciking on sign up link', () => {
  cy.visit('https://www.transamerica.com/individual/what-we-offer/products/mutual-funds/#')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
}) 
      cy.get(lvpage.MutualFundCheckBox).click({force:true});
      cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000) 
    cy.get(lvpage.IIMutualFundEmail).click({force:true});
    cy.get(lvpage.IIMutualFundCompanyName).should('be.visible');
    cy.get(lvpage.IIMutualFundFirstLastName).should('be.visible');
    cy.get(lvpage.IIMutualFundTitle).should('be.visible')
    .should('contain','Where should we send this')
    cy.get(lvpage.IIMutualFundDsiclaimer).should('be.visible');
    cy.get(lvpage.IIMutualFundWindowCloseButton).should('be.visible')
    cy.get(lvpage.IIMutualFundSubmitButton).should('be.disabled');
    cy.get(lvpage.IIMutualFundPrivacyStatement).should('be.visible');
    cy.get(lvpage.IIMutualFundTermsofUse).should('be.visible').click()
    cy.url().should('include', '/terms-of-use-customers/')  
    cy.go('back')
    cy.url().should('include', 'https://www.transamerica.com/individual/what-we-offer/products/mutual-funds/#')  
    cy.get(lvpage.MutualFundCheckBox).click({force:true});
    cy.wait(8000)  
    cy.get(lvpage.MutualFundEmailForm).click({force:true});
    cy.get(lvpage.IIMutualFundPrivacyStatement).click() 
    cy.url().should('include', 'www.transamerica.com/privacy-policy/') 
})

it('II - Mutual Fund new-age-of-advice - Verifying signup lead validation form error when we enter email id in wrong formatte ', () => {
  cy.visit('https://www.transamerica.com/individual/what-we-offer/products/mutual-funds/#')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
}) 
      cy.get(lvpage.MutualFundCheckBox).click({force:true});
      cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000) 
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.disabled');
  cy.get(lvpage.IIMutualFundEmail).clear().type('a@b.')
  cy.get(lvpage.IIMutualFundCompanyName).click()
  cy.get(lvpage.IIMutualFundCompanyName).clear().type('c')
 // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
  cy.get(lvpage.IIMutualFundEmail).clear().type('a@b.com')
  cy.get(lvpage.IIMutualFundCompanyName).clear().type('ia')
  cy.get(lvpage.IIMutualFundEmail).click()
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.enabled');
})

it('II - Mutual Fund new-age-of-advice - chekcing thank you pop-up message and yes button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/individual/what-we-offer/products/mutual-funds/#')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
}) 
      cy.get(lvpage.MutualFundCheckBox).click({force:true});
      cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000) 
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.disabled');
  cy.get(lvpage.IIMutualFundEmail).clear().type('a@b.com')
  cy.get(lvpage.IIMutualFundCompanyName).clear().type('ia')
  cy.get(lvpage.IIMutualFundEmail).click()
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.enabled').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
  cy.get(lvpage.IIMutualFundClosebutton).should('be.visible').click();
cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000)  
  cy.get(lvpage.IIMutualFundSendDocument).should('be.visible')
  cy.get(lvpage.IIMutualFundWrongEmail).should('be.visible') 
   cy.get(lvpage.IIMutualFundYes).should('be.visible').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
  cy.get(lvpage.IIMutualFundClosebutton).should('be.visible').click();
})
it('II - Mutual Fund new-age-of-advice - chekcing thank you pop-up message and wrong button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/individual/what-we-offer/products/mutual-funds/#')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
}) 
      cy.get(lvpage.MutualFundCheckBox).click({force:true});
      cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000) 
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.disabled');
  cy.get(lvpage.IIMutualFundEmail).clear().type('a@b.com')
  cy.get(lvpage.IIMutualFundCompanyName).clear().type('ia')
  cy.get(lvpage.IIMutualFundEmail).click()
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.enabled').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
  cy.get(lvpage.IIMutualFundClosebutton).should('be.visible').click();
cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000)  
  cy.get(lvpage.IIMutualFundSendDocument).should('be.visible')
    cy.get(lvpage.IIMutualFundYes).should('be.visible')
    cy.get(lvpage.IIMutualFundWrongEmail).should('be.visible').click()
    cy.get(lvpage.IIMutualFundEmail).click({force:true});
    cy.get(lvpage.IIMutualFundCompanyName).should('be.visible');
    cy.get(lvpage.IIMutualFundFirstLastName).should('be.visible');
    cy.get(lvpage.IIMutualFundTitle).should('be.visible')
    .should('contain','Where should we send this')
    cy.get(lvpage.IIMutualFundDsiclaimer).should('be.visible');
    cy.get(lvpage.IIMutualFundWindowCloseButton).should('be.visible')
    cy.get(lvpage.IIMutualFundSubmitButton).should('be.disabled');
})




it('Fp - MUTUAL FUND - chekcing all the feilds on Please enter your contact info after clciking on sign up link', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/products/mutual-funds/#')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
}) 
      cy.get(lvpage.MutualFundCheckBox).click({force:true});
      cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000) 
    cy.get(lvpage.IIMutualFundEmail).click({force:true});
    cy.get(lvpage.IIMutualFundCompanyName).should('be.visible');
    cy.get(lvpage.IIMutualFundFirstLastName).should('be.visible');
    cy.get(lvpage.IIMutualFundTitle).should('be.visible')
    .should('contain','Where should we send this')
    cy.get(lvpage.IIMutualFundDsiclaimer).should('be.visible');
    cy.get(lvpage.IIMutualFundWindowCloseButton).should('be.visible')
    cy.get(lvpage.IIMutualFundSubmitButton).should('be.disabled');
    cy.get(lvpage.IIMutualFundPrivacyStatement).should('be.visible');
    cy.get(lvpage.IIMutualFundTermsofUse).should('be.visible').click()
    cy.url().should('include', '/terms-of-use-customers/')  
    cy.go('back')
    cy.url().should('include', 'https://www.transamerica.com/financial-professional/what-we-offer/products/mutual-funds/#')  
    cy.get(lvpage.MutualFundCheckBox).click({force:true});
    cy.wait(8000)  
    cy.get(lvpage.MutualFundEmailForm).click({force:true});
    cy.get(lvpage.IIMutualFundPrivacyStatement).click() 
    cy.url().should('include', 'www.transamerica.com/privacy-policy/') 
})

it('Fp - Mutual Fund new-age-of-advice - Verifying signup lead validation form error when we enter email id in wrong formatte ', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/products/mutual-funds/#')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
}) 
      cy.get(lvpage.MutualFundCheckBox).click({force:true});
      cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000) 
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.disabled');
  cy.get(lvpage.IIMutualFundEmail).clear().type('a@b.')
  cy.get(lvpage.IIMutualFundCompanyName).click()
  cy.get(lvpage.IIMutualFundCompanyName).clear().type('c')
 // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
  cy.get(lvpage.IIMutualFundEmail).clear().type('a@b.com')
  cy.get(lvpage.IIMutualFundCompanyName).clear().type('ia')
  cy.get(lvpage.IIMutualFundEmail).click()
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.enabled');
})

it('Fp - Mutual Fund new-age-of-advice - chekcing thank you pop-up message and yes button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/products/mutual-funds/#')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
}) 
      cy.get(lvpage.MutualFundCheckBox).click({force:true});
      cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000) 
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.disabled');
  cy.get(lvpage.IIMutualFundEmail).clear().type('a@b.com')
  cy.get(lvpage.IIMutualFundCompanyName).clear().type('ia')
  cy.get(lvpage.IIMutualFundEmail).click()
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.enabled').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
  cy.get(lvpage.IIMutualFundClosebutton).should('be.visible').click();
cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000)  
  cy.get(lvpage.IIMutualFundSendDocument).should('be.visible')
  cy.get(lvpage.IIMutualFundWrongEmail).should('be.visible')
  cy.get(lvpage.IIMutualFundYes).should('be.visible').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
  cy.get(lvpage.IIMutualFundClosebutton).should('be.visible').click();
})
it('Fp - Mutual Fund new-age-of-advice - chekcing thank you pop-up message and wrong button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/financial-professional/what-we-offer/products/mutual-funds/#')
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
}) 
      cy.get(lvpage.MutualFundCheckBox).click({force:true});
      cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000) 
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.disabled');
  cy.get(lvpage.IIMutualFundEmail).clear().type('a@b.com')
  cy.get(lvpage.IIMutualFundCompanyName).clear().type('ia')
  cy.get(lvpage.IIMutualFundEmail).click()
  cy.get(lvpage.IIMutualFundSubmitButton).should('be.enabled').click()
  cy.get(lvpage.IndSignupThankyou).should('be.visible')
  cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
  cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
  cy.get(lvpage.IIMutualFundClosebutton).should('be.visible').click();
cy.wait(2000)  
      cy.get(lvpage.MutualFundEmailForm).should('be.visible')
      cy.get(lvpage.MutualFundEmailForm).click();
      cy.wait(2000)  
  cy.get(lvpage.IIMutualFundSendDocument).should('be.visible')
    cy.get(lvpage.IIMutualFundYes).should('be.visible')
    cy.get(lvpage.IIMutualFundWrongEmail).should('be.visible').click()
    cy.get(lvpage.IIMutualFundEmail).click({force:true});
    cy.get(lvpage.IIMutualFundCompanyName).should('be.visible');
    cy.get(lvpage.IIMutualFundFirstLastName).should('be.visible');
    cy.get(lvpage.IIMutualFundTitle).should('be.visible')
    .should('contain','Where should we send this')
    cy.get(lvpage.IIMutualFundDsiclaimer).should('be.visible');
    cy.get(lvpage.IIMutualFundWindowCloseButton).should('be.visible')
    cy.get(lvpage.IIMutualFundSubmitButton).should('be.disabled');
})



it('FP - workplace-platform Subscibe - _LVF-checking all the field labels', () => {
  cy.visit('https://www.transamerica.com/employer/what-we-offer/tools-and-services/workplace-platform/')
  cy.get(lvpage.EmpWorkplaceSubscibeButton).click({force:true});
  cy.wait(2000)  
    cy.get(lvpage.EmpWorkplaceSubscribeEmail).should('be.visible');
    cy.get(lvpage.EmpWorkplaceSubscibeCompanyName).should('be.visible');
    cy.get(lvpage.FEmpWorkplaceSubscibeFirstLastName).should('be.visible');
    cy.get(lvpage.EmpWorkplaceSubscibeTitle).should('be.visible')
    .should('contain','Please enter your')
    cy.get(lvpage.EmpWorkplaceSubscibeDsiclaimer).should('be.visible');
    cy.get(lvpage.EmpWorkplaceSubscibeWindowCloseButton).should('be.visible')
    cy.get(lvpage.EmpWorkplaceSubscibeSubmitButton).should('be.disabled');
    cy.get(lvpage.EmpWorkplaceSubscibePrivacyStatement).should('be.visible');
    cy.get(lvpage.EmpWorkplaceSubscibeTermsofUse).click() 
    cy.url().should('include', '/terms-of-use-customers/')  
    cy.go('back')
    cy.url().should('include', 'what-we-offer/tools-and-services/advisor-experience/')  
    cy.contains(lvpage.EmpWorkplaceSubscibeButton).click();
    cy.get(lvpage.EmpWorkplaceSubscibePrivacyStatement).click() 
    cy.url().should('include', 'www.transamerica.com/privacy-policy/') 
})

it('FP - workplace-platform Subscibe - Verifying signup lead validation form error when we enter email id in wrong formatte ', () => {
  cy.visit('https://www.transamerica.com/employer/what-we-offer/tools-and-services/workplace-platform/')
  cy.get(lvpage.EmpWorkplaceSubscibeButton).click({force:true});
  cy.wait(2000) 
  cy.get(lvpage.EmpWorkplaceSubscibeSubmitButton).should('be.disabled');
  cy.get(lvpage.EmpWorkplaceSubscribeEmail).clear().type('a@b.')
  cy.get(lvpage.EmpWorkplaceSubscibeCompanyName).click()
  // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
  cy.get(lvpage.EmpWorkplaceSubscibeCompanyName).clear().type('c')
 // cy.get(lvpage.IndSignUpEmailError).should('be.visible').should('contain','Please enter a valid email address')
  cy.get(lvpage.EmpWorkplaceSubscribeEmail).clear().type('a@b.com')
  cy.get(lvpage.EmpWorkplaceSubscibeCompanyName).clear().type('ia')
  cy.get(lvpage.EmpWorkplaceSubscribeEmail).click()
  cy.get(lvpage.EmpWorkplaceSubscibeSubmitButton).should('be.enabled');
})

it('FP - workplace-platform Subscibe - chekcing thank you pop-up message and yes button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/employer/what-we-offer/tools-and-services/workplace-platform/')
  cy.get(lvpage.EmpWorkplaceSubscibeButton).click({force:true});
  cy.wait(2000) 
cy.get(lvpage.EmpWorkplaceSubscibeSubmitButton).should('be.disabled');
cy.get(lvpage.EmpWorkplaceSubscribeEmail).clear().type('a@b.com')
cy.get(lvpage.EmpWorkplaceSubscibeCompanyName).clear().type('ia')
cy.get(lvpage.EmpWorkplaceSubscribeEmail).click()
cy.get(lvpage.EmpWorkplaceSubscibeSubmitButton).should('be.enabled').click()
cy.get(lvpage.IndSignupThankyou).should('be.visible')
cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
cy.get(lvpage.EmpWorkplaceSubscibeClosebutton).should('be.visible').click();
cy.wait(2000)  
cy.get(lvpage.EmpWorkplaceSubscibeButton).click({force:true});
cy.get(lvpage.EmpWorkplaceSubscibeSendDocument).should('be.visible')
cy.get(lvpage.EmpWorkplaceSubscibeWrongEmail).should('be.visible')
cy.get(lvpage.EmpWorkplaceSubscibeYes).should('be.visible').click()
cy.get(lvpage.IndSignupThankyou).should('be.visible')
cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
cy.get(lvpage.EmpWorkplaceSubscibeClosebutton).click()
})

it('FP - workplace-platform Subscibe - chekcing thank you pop-up message and wrong button functionality after entering the valid email id', () => {
  cy.visit('https://www.transamerica.com/employer/what-we-offer/tools-and-services/workplace-platform/')
  cy.get(lvpage.EmpWorkplaceSubscibeButton).click({force:true});
  cy.wait(2000) 
cy.get(lvpage.EmpWorkplaceSubscibeSubmitButton).should('be.disabled');
cy.get(lvpage.EmpWorkplaceSubscribeEmail).clear().type('a@b.com')
cy.get(lvpage.EmpWorkplaceSubscibeCompanyName).clear().type('ia')
cy.get(lvpage.EmpWorkplaceSubscribeEmail).click()
cy.get(lvpage.EmpWorkplaceSubscibeSubmitButton).should('be.enabled').click()
cy.get(lvpage.IndSignupThankyou).should('be.visible')
cy.get(lvpage.IndSignupRightSymbol).should('be.visible')
cy.get(lvpage.IndSignupConfirmationMail).should('be.visible').should('contain','You should be receiving');
cy.get(lvpage.EmpWorkplaceSubscibeClosebutton).should('be.visible').click();
cy.wait(2000)  
cy.get(lvpage.EmpWorkplaceSubscibeButton).click({force:true});
cy.get(lvpage.EmpWorkplaceSubscibeSendDocument).should('be.visible')
cy.get(lvpage.EmpWorkplaceSubscibeYes).should('be.visible')
cy.get(lvpage.EmpWorkplaceSubscibeWrongEmail).should('be.visible').click()
cy.get(lvpage.EmpWorkplaceSubscibeTitle).should('be.visible')
cy.get(lvpage.EmpWorkplaceSubscibeDsiclaimer).should('be.visible');
cy.get(lvpage.EmpWorkplaceSubscibeWindowCloseButton).should('be.visible')
cy.get(lvpage.EmpWorkplaceSubscibeSubmitButton).should('be.disabled');
})

})





























