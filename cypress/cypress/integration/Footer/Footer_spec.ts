import * as Fppage from '../../pageObjects/Footer.page';

// import ' cypress/support/index.js';


describe('LeadValidationForm Suite', () => {

    before(() => {
        cy.visit('/');
        cy.get(Fppage.CookieCloseButton).click({force:true});
     
    })

    it('Verify Read More and Finra and Sipc Links', () => {
        cy.get(Fppage.ReadMoreLink).should('be.visible').should('have.attr','href').and('include', '/fraud-alert/')
            cy.get(Fppage.FinraLink).should('be.visible').its('length').should('eq', 2)
            cy.get(Fppage.FinraLink).eq(0).should('have.attr','href').and('include', 'finra.org')
            cy.get(Fppage.FinraLink).eq(1).should('have.attr','href').and('include', 'finra.org')
            cy.get(Fppage.SipcLink).should('be.visible').should('have.attr','href').and('include', 'sipc.org')
           cy.log('Finra and Sipc link are displaying')
    })

    it('Verify TrackingNumber and Fooetr Logo and FooterContactNumber and FooterReachoutText and AnAegonCompanytext and disclosure', () => {
        cy.get(Fppage.TrackingNumber).should('be.visible').should('contain','113555R1')
        cy.get(Fppage.Logo).should('be.visible')
        cy.get(Fppage.ContactNumber).should('be.visible').should('have.text','800-797-2643')
        cy.get(Fppage.ReachOut).should('be.visible').should('contain','Reach out.')
        cy.get(Fppage.AnAegonCompanytext).should('be.visible')
        cy.get(Fppage.DisClosure).should('be.visible').should('contain','Warning: Misuse of Transamerica name in fraud schemes.')
        cy.get(Fppage.DisClosure).should('be.visible').should('contain','Insurance products and services are offered or issued by Transamerica Life Insurance Company, Cedar Rapids, IA; Transamerica Financial Life Insurance Company, Harrison, NY (licensed in New York); Transamerica Premier Life Insurance Company, Cedar Rapids, IA; and Transamerica Casualty Insurance Company, Cedar Rapids, IA. Variable products and mutual funds are underwritten and distributed by Transamerica Capital Inc. and/or distributed by Transamerica Investors Securities Corporation, each a broker/dealer and member of ')
})

it('Verify Footer Linkedin social link', () => {
    cy.get(Fppage.SocailWebsiteLinks).eq(0).should('be.visible').should('have.attr','href').and('include', 'https://www.linkedIn.com/')
    cy.get(Fppage.SocailWebsiteLinks).eq(0).should('be.visible').should('have.attr','title').and('include', 'LinkedIn')
    cy.log('Linkedin url working as expected')

    cy.get(Fppage.SocailWebsiteLinks).eq(1).should('be.visible').should('have.attr','href').and('include', 'https://www.facebook.com/')
    cy.get(Fppage.SocailWebsiteLinks).eq(1).should('be.visible').should('have.attr','title').and('include', 'Facebook')
    cy.log('Facebook url working as expected')

    cy.get(Fppage.SocailWebsiteLinks).eq(2).should('be.visible').should('have.attr','href').and('include', 'http://instagram.com/')
    cy.get(Fppage.SocailWebsiteLinks).eq(2).should('be.visible').should('have.attr','title').and('include', 'Instagram')
    cy.log('Instagram url working as expected')

    cy.get(Fppage.SocailWebsiteLinks).eq(3).should('be.visible').should('have.attr','href').and('include', 'https://twitter.com/')
    cy.get(Fppage.SocailWebsiteLinks).eq(3).should('be.visible').should('have.attr','title').and('include', 'Twitter')
    cy.log('Twitter url working as expected')
     
    cy.get(Fppage.SocailWebsiteLinks).eq(4).should('be.visible').should('have.attr','href').and('include', 'https://youtube.com/')
    cy.get(Fppage.SocailWebsiteLinks).eq(4).should('be.visible').should('have.attr','title').and('include', 'YouTube')
    cy.log('Youtube url working as expected')
   
})


it('Verify Footer Dropdown', () => {
    cy.get(Fppage.Dropdown).should('be.visible').click()
    cy.get(Fppage.DropdownOptions).eq(0).should('have.text','Bermuda')
    cy.get(Fppage.DropdownOptions).eq(1).should('have.text','Hong Kong')
    cy.get(Fppage.DropdownOptions).eq(2).should('have.text','Singapore')
    cy.log('Bermuda & Hong Kong and Singapore option are displaying')
   
})


it.only('Verify Footer Links for Indiviual ', () => {

    // cy.get(Fppage.Individuamenu).find('a').click({ multiple: true, force: true, }).wait(200);
    
    cy.get(Fppage.Individuamenumain).then(Footer => {
        var FooterCount:number = Cypress.$(Footer).length;
     for (var i:number = 0; i < FooterCount; i++) {
        cy.get(Fppage.Individuamenumain).eq(i).click({ multiple: true, force: true, })
        
     }

     cy.get(Fppage.Individuamenu).then(submenu => {
        var FooterCount:number = Cypress.$(submenu).length;
     for (var i:number = 0; i < FooterCount; i++) {
        cy.get(Fppage.Individuamenu).find('a').eq(i).click({ multiple: true, force: true, })
        
        
    
     }
    })

 
    })
})

})

        
      
            

    // it('can click on a genre sub-menu item',()=>{
    //     cy.get(Fppage.Individuamenumain).next(Fppage.Individuamenu).then($el=>{
    //         var FooterCount:number = Cypress.$($el).length;
    //  for (var i:number = 0; i < FooterCount; i++) {
    //         // cy.wrap($el).invoke('show')
    //         cy.wrap($el).eq(i).click()
    //  }
    //     })
    // })



// })

// })