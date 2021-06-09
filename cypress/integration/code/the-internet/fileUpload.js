import 'cypress-file-upload'

const fileName = 'example.json'

describe('File upload Test', function() {

    it('Upload File', function() {
        cy.viewport('macbook-15')
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.fixture(fileName).then(fileContent => {
            cy.get('#file-upload').attachFile(fileName, {
                fileContent,
                mimeType: 'application/json'
            })
        })
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').invoke('text').then((text) => {
            expect(text.trim()).equal('example.json')
        })
    })

})