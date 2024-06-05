describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    
    cy.get(':nth-child(2) > [href="/"]').click()
    
    cy.wait(1500)
    cy.get('[href="/top-scorers"]').click()
    cy.wait(2000)
    cy.get('select').select("La Liga")
    cy.wait(3000)
    cy.get('select').select("Bundesliga")
    
    cy.wait(3000)

    cy.get('[href="/teams"]').click()
    cy.wait(1500)
    cy.get('select').select("Brasileirão Série A")
    cy.wait(1500)
    cy.get(':nth-child(8) > a').click()

    cy.wait(3000)

    cy.get('[href="/teams"]').click()
    cy.wait(1500)
    cy.get('select').select("Ligue 1")
    cy.wait(1500)
    cy.get(':nth-child(8) > a').click()
    
    cy.wait(3000)

    cy.get('[href="/live-scores"]').click()

    cy.wait(3000)
    
    cy.get('[href="/upcoming-fixtures"]').click()

    cy.wait(3000)

    cy.get('[href="/player-comparison"]').click()
    cy.wait(1000)
    cy.get('.league-selectors > :nth-child(1) > select').select("Bundesliga")
    cy.wait(1000)
    cy.get('.league-selectors > :nth-child(2) > select').select("Ligue 1")
    cy.wait(1000)
    cy.get('.team-selectors > :nth-child(1) > select').select("Bayern Munich")
    cy.wait(1000)
    cy.get('.team-selectors > :nth-child(2) > select').select("Metz")
    cy.wait(1000)
    cy.get(':nth-child(1) > ul > :nth-child(1)').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > ul > :nth-child(1)').click()
    cy.wait(1000)
    cy.get('.button-container > :nth-child(1)').click()
    cy.wait(2500)
    cy.get(':nth-child(1) > ul > :nth-child(12)').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > ul > :nth-child(16)').click()
    cy.wait(1000)
    cy.get('.button-container > :nth-child(1)').click()
    cy.wait(2500)
    cy.get('.button-container > :nth-child(2)').click()
    
    cy.wait(2500)

    cy.get('.league-selectors > :nth-child(1) > select').select("Brasileirão Série A")
    cy.wait(1000)
    cy.get('.league-selectors > :nth-child(2) > select').select("La Liga")
    cy.wait(1000)
    cy.get('.team-selectors > :nth-child(1) > select').select("Flamengo")
    cy.wait(1000)
    cy.get('.team-selectors > :nth-child(2) > select').select("Real Madrid")
    cy.wait(1000)
    cy.get(':nth-child(1) > ul > :nth-child(4)').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > ul > :nth-child(8)').click()
    cy.wait(1000)
    cy.get('.button-container > :nth-child(1)').click()
    cy.wait(2500)
    cy.get(':nth-child(1) > ul > :nth-child(14)').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > ul > :nth-child(16)').click()
    cy.wait(1000)
    cy.get('.button-container > :nth-child(1)').click()
    cy.wait(2500)
    cy.get('.button-container > :nth-child(2)').click()

    cy.wait(2000)
   
    cy.get('button.MuiButtonBase-root').click()

    cy.wait(2000)

  })
})
