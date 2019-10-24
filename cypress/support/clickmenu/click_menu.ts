import * as Fppage from '../../pageObjects/Footer.page';
import * as Fdpage from '../../pageObjects/Header.page';
import * as Hepage from '../../pageObjects/Header.page';

export function ClickLink(linkName: string, Url?: string): void {
    cy.get(Fppage.FooterLinks).contains(linkName).invoke('removeAttr', 'target').click();
    cy.wait(20);
    cy.url().should('include',Url);
    
    }


    export function ClickLinknewtab(linkName: string, Url?: string): void {
        Cypress.on('uncaught:exception', (err, runnable) => {
           
            return false
          })

          cy.get(Fppage.FooterLinks).then(Footer => {
            var FooterCount:number = Cypress.$(Footer).length;
         for (var i:number = 0; i < FooterCount; i++) {
            const Urls: string [] = ['/individual/what-we-offer/products/retirement-solutions/', '/individual/what-we-offer/products/mutual-funds/', '/individual/what-we-offer/products/annuities/', '/individual/what-we-offer/products/insurance/', '/individual/what-we-offer/products/employee-benefits/', 'https://www.transamerica.com/contact-us/#page-0', '/financial-professional/what-we-offer/products/retirement-solutions/', '/financial-professional/what-we-offer/products/mutual-funds/', '/financial-professional/what-we-offer/products/annuities/', '/financial-professional/what-we-offer/products/insurance/', '/financial-professional/what-we-offer/products/employee-benefits/', '/financial-professional/support/questions/contact-us/', '/employer/what-we-offer/products/retirement-solutions/', '/employer/what-we-offer/products/employee-benefits/', '/employer/support/questions/contact-us/', '/register-account/', '/compensation-disclosure/', '/privacy-policy/', '/terms-of-use-customers/', '/terms-of-use-advisors/', '/accessibility-statement/', '/abuse-victims/', '/fraud-alert/', '/code-of-conduct/', '/nydfs-cybersecurity-agents/', '/individual/why-transamerica/who-we-are/leadership/', '/individual/why-transamerica/who-we-are/history/', '/individual/why-transamerica/who-we-are/aegon-transamerica-foundation/', '/individual/why-transamerica/who-we-are/sponsorships/', 'http://www.transamericaventures.com/', '/individual/why-transamerica/how-we-are-different/financial-strength/', '/press-release/', 'http://www.transamericacareers.com/', 'https://knowledge-place.wealthmeethealth.com/individual/be-smart/', 'https://www.newageofadvice.com/', 'https://www.transamerica.com/individual/what-we-offer/education/community/']
          var data=new RegExp(Urls[i]);
            cy.get(Fppage.FooterLinks).eq(i).click({ multiple: true, force: true, }).should('have.attr', 'href')
            .and('match', data) 
            // assert.include(Footer.text(), Urls[i]);
   
  
  }
  })
}

 
   export function clickmenu(): void{
    Cypress.on('uncaught:exception', (err, runnable) => {
           
        return false
      })

    //   cy.get(Fdpage.menuclick).then(submenu => { 
    //     var SubmenuCount:number = Cypress.$(submenu).length;
    //     for (var i:number = 0; i < SubmenuCount; i++) {
    //       const submenuUrls: string [] = ['Retirement Solutions','Mutual Funds','Annutites']
    //       var menudata=new RegExp(submenuUrls[i]);
    //     const Urls: string [] = ['individual/what-we-offer/products/retirement-solutions','individual/what-we-offer/products/mutual-funds','individual/what-we-offer/products/annuities','individual/what-we-offer/products/insurance','individual/what-we-offer/products/employee-benefits','individual/what-we-offer/products/etfs','individual/what-we-offer/tools-and-services/services','individual/what-we-offer/tools-and-services/transamerica-app','https://knowledge-place.wealthmeethealth.com/individual/be-smart','individual/what-we-offer/education/community','individual/what-we-offer/education/learning-center','individual/what-we-offer/education/tax-center','individual/why-transamerica/how-we-are-different/about-us','individual/why-transamerica/how-we-are-different/financial-strength','individual/why-transamerica/how-we-are-different/insights-and-commentary','individual/why-transamerica/who-we-are/leadership','individual/why-transamerica/who-we-are/history','individual/why-transamerica/who-we-are/aegon-transamerica-foundation','individual/why-transamerica/who-we-are/sponsorships']
    //     var data=new RegExp(Urls[i]);
    //     console.log(data)
    //     cy.get(Fdpage.menuclick).eq(i).click({ multiple: true, force: true, }).should('have.attr', 'href').wait(3000)
    //     .and('match', data)
        
    //  }
    // })
    
    cy.get(Fppage.mainmenuSubmenu).then(submenu => { 
      var SubmenuCount:number = Cypress.$(submenu).length;
      console.log(SubmenuCount)
      for (var i:number = 0; i < 12; i++) {
      const Urls: string [] = ['individual/what-we-offer/products/retirement-solutions','individual/what-we-offer/products/mutual-funds','individual/what-we-offer/products/annuities','individual/what-we-offer/products/insurance','individual/what-we-offer/products/employee-benefits','individual/what-we-offer/products/etfs','individual/what-we-offer/tools-and-services/services','individual/what-we-offer/tools-and-services/transamerica-app','https://knowledge-place.wealthmeethealth.com/individual/be-smart','individual/what-we-offer/education/community','individual/what-we-offer/education/learning-center','individual/what-we-offer/education/tax-center']
      var data=new RegExp(Urls[i]);
      console.log(data)
      cy.get(Fppage.mainmenu).contains('What We Offer').click({ force: true, })
      cy.get(Fppage.mainmenuSubmenu).eq(i).click({ multiple: true, force: true, }).should('have.attr', 'href').wait(3000)
      .and('match', data)
      
   }
  })

  cy.get(Fppage.mainmenuSubmenu2).then(submenu => { 
    var SubmenuCount:number = Cypress.$(submenu).length;
    console.log(SubmenuCount)
    for (var i:number = 0; i < 12; i++) {
    const Urls: string [] = ['individual/what-we-offer/products/retirement-solutions','individual/what-we-offer/products/mutual-funds','individual/what-we-offer/products/annuities','individual/what-we-offer/products/insurance','individual/what-we-offer/products/employee-benefits','individual/what-we-offer/products/etfs','individual/what-we-offer/tools-and-services/services','individual/what-we-offer/tools-and-services/transamerica-app','https://knowledge-place.wealthmeethealth.com/individual/be-smart','individual/what-we-offer/education/community','individual/what-we-offer/education/learning-center','individual/what-we-offer/education/tax-center']
    var data=new RegExp(Urls[i]);
    console.log(data)
    cy.get(Fppage.mainmenu).contains('Why Transamerica').click({ force: true, })
    cy.get(Fppage.mainmenuSubmenu2).eq(i).click({ multiple: true, force: true, })
    //.should('have.attr', 'href').wait(3000)
    //.and('match', data)
    
 }
})

cy.get(Fppage.mainmenuSubmenu3).then(submenu => { 
  var SubmenuCount:number = Cypress.$(submenu).length;
  console.log(SubmenuCount)
  for (var i:number = 0; i < 12; i++) {
  const Urls: string [] = ['individual/what-we-offer/products/retirement-solutions','individual/what-we-offer/products/mutual-funds','individual/what-we-offer/products/annuities','individual/what-we-offer/products/insurance','individual/what-we-offer/products/employee-benefits','individual/what-we-offer/products/etfs','individual/what-we-offer/tools-and-services/services','individual/what-we-offer/tools-and-services/transamerica-app','https://knowledge-place.wealthmeethealth.com/individual/be-smart','individual/what-we-offer/education/community','individual/what-we-offer/education/learning-center','individual/what-we-offer/education/tax-center']
  var data=new RegExp(Urls[i]);
  console.log(data)
  cy.get(Fppage.mainmenu).contains('Support').click({ force: true, })
  cy.get(Fppage.mainmenuSubmenu3).eq(i).click({ multiple: true, force: true, })
  //.should('have.attr', 'href').wait(3000)
  //.and('match', data)
  
}
})
   


}

export function login(): void{
  Cypress.on('uncaught:exception', (err, runnable) => {
         
      return false
    })

  cy.get(Hepage.Login).click({ force: true, });
  cy.get(Hepage.menulogin).contains('Individual').click( {force: true,} )
  .click( {force: true,} ).get(Hepage.nextbutton).click( {force: true,} )
  .get(Hepage.menusubmenu).contains('Mutual Funds').click( {force: true,} )
  .get(Hepage.nextbutton).click( {force: true,} ).invoke('removeAttr', 'target')
  



 

        
  }

  export function searchbox(): void{
    Cypress.on('uncaught:exception', (err, runnable) => {
           
        return false
      })
  
    cy.get(Hepage.serachbox).click({ force: true, });
    cy.get(Hepage.searchinput).type('transamerica').type('{enter}') ;
    cy
  .get(Hepage.searchnextbutton)
  .each(($el, index, $list) => {
    
    if ($el.should('be.visible')) {
      
      cy.wrap($el).click()
    } else {
      
    }
  })
          
    }

    export function contactus(): void{
      Cypress.on('uncaught:exception', (err, runnable) => {
             
          return false
        })

        cy.get(Hepage.individualsubmenu).contains('Support').click()
        cy.get(Hepage.contactus).contains('Contact Us').click();
        cy.get(Hepage.contactussubmenu).contains('Individual').click().click()
        .get(Hepage.telluswhoweare).should('have.class', 'stepper__step stepper__step--active').contains('Tell us who you are')
        .get(Hepage.nextbutton).click()
        .get(Hepage.accounttypedropdown).click()
        .get(Hepage.accountmenu).contains('Insurance').click()
        .get(Hepage.reasonforcontract).click().get(Hepage.reasonmenu).contains('Get a quote').click()
        .get(Hepage.telluswhoweare).should('have.class', 'stepper__step stepper__step--active').contains('Reason for contact')
        .get(Hepage.nextbutton).click()
        .get(Hepage.firstName).type('Satis')
        .get(Hepage.lastName).type('Satis')
        .get(Hepage.country).click()
        .get(Hepage.countrymenu).contains('Nepal').click()
        .get(Hepage.city).click()
        .get(Hepage.lastName).type('Satis')
        .get(Hepage.email).type('Satis')
        .get(Hepage.AccountNumber).type('Satis')
        .get(Hepage.phonenumber).type('Satis')
        .get(Hepage.Message).type('Satis')
      }
    

   