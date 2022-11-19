function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
// object of arrays to keep the messages
const collectiveAdvice = {
    programLanguage: ['javascript', 'ruby', 'java', 'kotlin', 'php', 'go', 'c#'],
    level: ['Newbie', 'Intermidiate', 'Senior', 'Master', 'Gran Master'],
    tip: ['improve and improve', 'you should practice more', 'relax and learn']
  }
  
// array with full message to output
let nextStep = []
  
// Iterate over the object considering the array length
for(let item in collectiveAdvice) {
    let optionIdx = generateRandomNumber(collectiveAdvice[item].length)
  
    // use the object's properties to customize the message being added to collectiveAdvice 
    switch(item) {
      case 'programLanguage':
        nextStep.push(`Your skill path right now is a "${collectiveAdvice[item][optionIdx]}".`)
        break
      case 'level':
        nextStep.push(`Your next target should be: "${collectiveAdvice[item][optionIdx]}".`)
        break
      case 'tip':
        nextStep.push(`You should: "${collectiveAdvice[item][optionIdx]}".`)
        break
      default:
        nextStep.push('There is not enough info.')
    }
  }
  
function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = nextStep.join('\n')
    console.log(formatted)
}
  
formatWisdom(nextStep);
