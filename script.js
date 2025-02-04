//openceremony function
function OpeningCeremony(callback){//passing callback function as parameter
    console.log("Opening Ceremony has started!!!");
    let score={violet:0,indigo:0,blue:0,green:0};//let score is an object which contains key-value pair
    setTimeout(()=>{
        console.log("Opening Ceremony has ended!!")
        console.log("Initial Scores are: ",score);
        callback(score);
    },1000);
}

function Race100M(score){
    console.log("The 100m race is about to begin!!");
    setTimeout(()=>{
    //set the random time for each color and log it
    let time={
        violet:Math.random()*5+10,//this will generate time between 10-15 sec
        indigo:Math.random()*5+10,
        blue:Math.random()*5+10,
        green:Math.random()*5+10
    };
    console.log("Random time generated for each color is: ",time);
    let sorted_time=Object.entries(time).sort((a,b)=>a[1]-b[1]);//it will sort the object according to the time
    let winner=sorted_time[0][0]
    let second_winner=sorted_time[1][0];
    let third_winner=sorted_time[2][0];
    let fourth_winner=sorted_time[3][0];
    score[winner]+=100;
    score[second_winner]+=75;
    score[third_winner]+=50;
    score[fourth_winner]+=25;
    console.log("Updated score after race: ",score);
    LongJump(score);
    },3000);
}

function LongJump(score){
    console.log("Long Jump game has started");
    setTimeout(()=>{
        let color=Object.keys(score);//{violet,indigo,blue,green}
        //now will select random color from color object
        let randomSelectedColor=color[Math.floor(Math.random()*color.length)]//color.length will give length of the color object
        //and Math.random help us to select the random index from 0 to length of color object and since the result can be in floating point
        //number so it will round off
        console.log(`${randomSelectedColor} has won this game`);
        score[randomSelectedColor]+=100;//we will update the score of the winner
        //now we will update the scores of all the player
        console.log("The updated score are:",score);
        HighJump(score);
    });
}

function HighJump(score){
    console.log("High Jump game has started");
    setTimeout(()=>{
        let yashiInput=prompt("Choose the color among violet, indigo, blue and green, who has done long jump according to you:");
        if(yashiInput!==null){
            score[yashiInput.toLocaleLowerCase()]+=100;
            console.log(`congrats!! ${yashiInput} gets 100 points...:-)`);
        }else{
            console.log("No color selected. Please select the color first...:-(");
            
        }
        //again we will update the score of all the player
        console.log("The updated score are: ",score);
        AwardCeremony(score);
    });

}

function AwardCeremony(score){
    console.log("The Award Ceremony has started");
    let sortedScore=Object.entries(score).sort((a,b)=>b[1]-a[1]);//we will sort the object in descending order
    console.log("The final score of each color are: ",score);
    console.log(`The first position goes to ${sortedScore[0][0]} with ${sortedScore[0][1]} points`)
    console.log(`The second position goes to ${sortedScore[1][0]} with ${sortedScore[1][1]} points`)
    console.log(`The third position goes to ${sortedScore[2][0]} with ${sortedScore[2][1]} points`)
    console.log(`The fourth position goes to ${sortedScore[3][0]} with ${sortedScore[3][1]} points`)

}

OpeningCeremony(Race100M);



