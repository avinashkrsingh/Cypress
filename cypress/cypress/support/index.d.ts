declare namespace Cypress {
    interface Chainable<Subject = any> {
        ClickLink: (linkName: string, Url?: string) => Chainable<any>;
        ClickLinknewtab: (linkName: string, Url?: string) => Chainable<any>;

    }}