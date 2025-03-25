/// <reference types="cypress" />

describe('Todo App E2E', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    // должен добавить новый todo
    it('should add a new todo', () => {
      cy.get('input[placeholder="What do you want to do?"]').type('E2E Todo{enter}');
      cy.contains('E2E Todo').should('exist');
    });
    // должен переключить todo
    it('should toggle a todo', () => {
      
      cy.get('input[placeholder="What do you want to do?"]').type('Toggle Todo{enter}');
      cy.contains('Toggle Todo').click();
      
      cy.contains('Toggle Todo').should('have.css', 'text-decoration-line', 'line-through');
    });
  
    it('should filter active todos', () => {
     
      cy.get('input[placeholder="What do you want to do?"]').type('First Todo{enter}');
      cy.get('input[placeholder="What do you want to do?"]').type('Second Todo{enter}');
      
      cy.contains('Second Todo').click();
      
      cy.contains('Active').click();
   
      cy.contains('First Todo').should('exist');
      cy.contains('Second Todo').should('not.exist');
    });
    // должен очистить завершенные todo
    it('should clear completed todos', () => {
      cy.get('input[placeholder="What do you want to do?"]').type('Todo to Clear{enter}');
    
      cy.contains('Todo to Clear').click();
     
      cy.contains('Clear completed').click();
     
      cy.contains('Todo to Clear').should('not.exist');
    });
  });