describe('Проверка кликабельности кнопки', function () {
    
    it('Заказать перевод', function () {
        cy.visit('https://www.traktat.com/');
        cy.get('[href="https://www.traktat.com/perevod-dokumentov/"] > picture > .attachment-sbm-servicelist').click();
        cy.get(':nth-child(1) > .content-box__inner > .align-center > .sciencific-translate__btn').click()
        
        })
    })