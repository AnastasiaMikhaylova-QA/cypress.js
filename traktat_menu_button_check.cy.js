describe('Проверка кликабельности кнопки меню', function () {
    
    it('Сменить город', function () {
        cy.visit('https://www.traktat.com/');
        cy.get('body > div.wrapper > div.content > header > div:nth-child(2) > div.header__callback > div > div.city__container > a').click();
        cy.get('.city__select > :nth-child(1) > a').click();
        cy.url().should('eq', 'https://vladivostok.traktat.com/');
        })
    })