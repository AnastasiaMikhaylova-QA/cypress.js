describe('Проверка отправки формы', function () {
    
    it('Заказать перевод', function () {
        cy.visit('https://www.traktat.com/');
        cy.get('[href="https://www.traktat.com/perevod-dokumentov/"] > picture > .attachment-sbm-servicelist').click();
        cy.get(':nth-child(1) > .content-box__inner > .align-center > .sciencific-translate__btn').click();
        cy.get('#calc-cost > .form__title').contains('Рассчитать стоимость перевода');
        cy.get('#input-file-popup').should('be.visible');
        cy.get('#calc-cost > :nth-child(4) > .input').should('be.visible');
        cy.get('#calc-cost > :nth-child(4) > .input').type('test');
        cy.get('#calc-cost > :nth-child(5) > .input').should('be.visible');
        cy.get('#calc-cost > :nth-child(5) > .input').type('test@awatera.com');
        cy.get('#calc-cost > :nth-child(6) > .input').should('be.visible');
        cy.get('#calc-cost > :nth-child(6) > .input').type('+79453785321');
        cy.get('#calc-cost > .call-time-widget > .call-time-choices > :nth-child(3) > input').click();
        cy.get('#calc-cost > .call-time-widget > .call-time-comment > .form__input').click();
        cy.get(':nth-child(5) > .ui-corner-all').click();
        cy.get('#agreement-4').click();
        cy.get('#calc-cost > div.form__send > button').should('be.visible');
        cy.get('#calc-cost > div.form__send > button').click();
        })
    })