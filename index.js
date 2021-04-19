try {
const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
}); 

rl.question('What is the minimum number you want? >>> ', (answer) => { 
    const min = Number(answer); 

    rl.question('What is the maximum number you want? >>> ', (answer) => {
        const max = Number(answer);  

            const RandomNumber = Math.random() * (max - min) + min;
            console.log(Math.round(RandomNumber)); 

        rl.close();
    });
}); 


} catch (error) {
    console.log(error)
}
