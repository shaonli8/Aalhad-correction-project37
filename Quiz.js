class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("Yellow");
    fill(0);
    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Answers of Contestants:",340,50)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
    if (allContestants !== undefined) {
      fill("Blue");
      textSize(20);
      text("Note: Contestants who answered correct will be highlighted in green colour!",130,230);
    }
    
    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer){
        fill("Green")
        }  
        else 
          fill("Red")
      
    }
    
  }

}
