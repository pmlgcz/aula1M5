import chalk from "chalk";
let febre = 37.5
function temppaciente(x){

if  (x>=37.5){
    console.log(chalk.red('com febre'));
}else if (x<37.5){
    console.log (chalk.green('sem febre'));
}

}

  
temppaciente (36)