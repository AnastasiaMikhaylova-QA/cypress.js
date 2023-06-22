describe('Логотип', function () {
    it('Проверить логотип', function () {
      cy.visit('https://godubai.ru/');
      cy.get('.site-header__logo > .logo__img').should('be.visible'); // Проверяем, что логотип отображается
    });
  });
