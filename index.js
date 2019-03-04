const { white, bold, blueBright } = require("colorette");

const work = white(`Jr. Associate React @ ${blueBright('Mikaels Labs')}`)
const medium = blueBright('https://medium.com/@huzaifaahmed_43162')
const linkedIn = blueBright('https://www.linkedin.com/in/huzaifa-ahmed-mohammad-71a097123/')
const github = blueBright('https://github.com/Huzaifaahmed20')
const npx = white('npx huzaifaahmed')

const newline = '\n'
const heading = `${white('  Huzaifa Ahmed /')} ${blueBright('huzaifaahmed')}`
const working = `${white(bold('     Work:'))}  ${work}`
const linkedining = `${white(bold('  LinkedIn:'))} ${linkedIn}`
const mediuming = `${white(bold('  Medium:'))}  ${medium}`
const githubing = `${white(bold('   GitHub:'))}  ${github}`
const carding = `${white(bold('     Card:'))}  ${npx}`

let output = `${newline} ${newline} ${heading} ${newline} ${newline} ${newline} ${working} ${newline} ${mediuming} ${newline} ${linkedining} ${newline} ${githubing} ${newline}  ${newline} ${carding} ${newline} ${newline}`;

console.log(output)