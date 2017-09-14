function TennisGame() {

  this.reset = () => {
      
  }

  this.echo = () => {
    return "Love - Love"
  }
}


test('echo Love - Love when game starts', () => {

  //Arrange
  let app = new TennisGame()
  app.reset()
  //Act

  let result = app.echo()

  //Assert
  expect(result).toBe('Love - Love')

})