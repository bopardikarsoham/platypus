/// <reference types="cypress" />

describe('Code cell', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
      .visit('/course/examples/blocks')

      // set cookies to prevent IBM privacy policy popup
      .setCookie('cmapi_cookie_privacy', 'permit_1|2|3')
      .setCookie('cmapi_gtm_bl', '')
      .setCookie('notice_gdpr_prefs', '0|1|2:')
      .setCookie('notice_preferences', '2:')

      .reload()
  })

  it('is displayed', () => {
    cy.get('.thebelab-cell').should('be.visible')
    cy.get('.CodeMirror-code').contains('1 + 1')
    cy.get('.thebelab-run-button').contains('Run')
    cy.get('.jp-OutputArea').contains('2')
  })

  it('runs', () => {
    cy.get('.CodeMirror-line').click().type('{backspace}{backspace}{backspace}{backspace}{backspace}2+3')
    cy.get('.thebelab-run-button').click()
    cy.get('.jp-OutputArea').contains('Waiting for kernel...')
  })
})
