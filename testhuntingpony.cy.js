describe('Создать заказ', function () {
    
    it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[href="/collection/odezhda"] > .img-ratio_cover > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click();
        cy.get('[data-product-id="338935607"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').wait(1000).click();
        cy.get('[data-add-cart-counter-plus=""]').wait(500).click();
        cy.get('.header__cart > .icon').wait(500).click();
        cy.get('.cart-controls > .button').wait(500).click();
        cy.contains('Оформление заказа')
    
        })
    })