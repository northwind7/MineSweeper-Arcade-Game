
function onload() {
    level = 1;
    lifes = 3;
    bombs = level * 2;
    //tiles = 20;
   
    prev = 0;
    obj = new generateBombs();
    // alert(obj.name[1]);
    document.getElementById("2000").hidden = true;
    document.getElementById("2006").hidden = true;
    document.getElementById("1001").hidden = false;
    for (x = 1; x < 21; x++) {
        document.getElementById(30 + x).hidden = true;
        document.getElementById(x).hidden = false;
        document.getElementById(x + 30).src = "";
    }
    free=20-bombs;
    document.getElementById("93").innerHTML = bombs;
    document.getElementById(94).innerHTML = free;
    document.getElementById(91).innerHTML = lifes;
    document.getElementById(92).innerHTML = level;
}
function levelup() {
    level = level + 1;
    if (level < 6) {
        lifes = 3;
       // tiles = 20;
        bombs = level * 2;
        //
        obj = new generateBombs();
        // alert(obj.name[1]);
        document.getElementById("2000").hidden = true;
        document.getElementById("2006").hidden = true;
        document.getElementById("1001").hidden = false;
        for (x = 1; x < 21; x++) {
            document.getElementById(30 + x).hidden = true;
            document.getElementById(x).hidden = false;
            document.getElementById(x + 30).src = "";
        }
        free=20-bombs;
        document.getElementById(91).innerHTML = lifes;
        document.getElementById("93").innerHTML = bombs;
        document.getElementById(94).innerHTML = free;
        document.getElementById(92).innerHTML = level;



    }

}

function mouseClick(event, click) {
    var choice = event.button;
    if (choice == 0) {
        //  alert("no of tiles"+tiles)


        var fire = "/assets/images/fire.gif";
        var flag = "/assets/images/correct.png";
        if (click > 30) {
            click = click - 30;
        }
        var n = parseInt(click) + 30;

        if (!document.getElementById(n).src.includes(fire)) {
            if (!document.getElementById(n).src.includes(flag)) {
                checkMove(0, click);
            }
        }
    } 
}
function checkMove(i, id) {

    document.getElementById(91).innerHTML = lifes;
    var found = false;
    for (z = 0; z < 10; z++) {
        if (obj.name[z] == id && i == 0 && prev != id) {
            document.getElementById(id).hidden = true;
            var n = parseInt(id) + 30;
            document.getElementById(n).hidden = false;
            var audio = new Audio("assets/audio/blast.mp3");
            audio.play();
            document.getElementById(n).src = "assets/images/fire.gif"
            lifes = lifes - 1;
           // tiles = tiles - 1;
            document.getElementById(91).innerHTML = lifes;
            if (lifes <= 0) {
                document.getElementById("1001").hidden = true;
                document.getElementById("2000").hidden = false;
                document.getElementById("2001").innerHTML = "Game Over !";
                document.getElementById("10000").hidden = false;
            }
            bombs = bombs - 1;
            document.getElementById("93").innerHTML = bombs;
            found = true;
            break;
        }
    }
   // alert(found);
    if (!found) {
        var audio = new Audio("assets/audio/correct.mp3");
        audio.play();
        if (id < 30)
            document.getElementById(id).hidden = true;
        var n = parseInt(id) + 30;
        document.getElementById(n).hidden = false;
       // tiles = tiles - 1;
       free=free-1; 
       document.getElementById(n).src = "assets/images/correct.png";
       document.getElementById(94).innerHTML = free;
      // alert("1 free"+free+".....bool"+(free<=0));
        if (free <=0) {
            alert(" Congratulations \n No of Bombs Avoided :"+bombs);
            document.getElementById("2001").innerHTML = "Congratulations you Won";
            document.getElementById("1001").hidden = false;
            document.getElementById("2000").hidden = false;
            document.getElementById("10000").hidden = true;
            var audio = new Audio("assets/audio/won.mp3");
            audio.play();
            levelup();
        }
    }


}

function generateBombs() {
    this.name = [];

    for (i = 0; i < bombs; i++) {
        this.name[i] = Math.floor((Math.random() * 20) + 1);
        // alert(this.name[i]);
    }



}
function onClickanswer(answer) {
    quiz = [
        "What is a good way of getting a job after graduating?",
        "What is not an element of good team work?",
        "Why you should cooperate as a team?",
        "What is digital literacy ?",
        "What is a professional way of facing an interview?",
        "What is not a good place to volunteer out of the following to enhance your employability?",
        "What is not a good way of assessing yourself?",
        "What is the best way to strengthen team spirit?",
        "How to effectively study for a  long time?",
        "What can be considered as the seed of change?"
    ];

    answr = [
        "Volunteering in the respective field",
        "Participating the local Rock Band",
        "Joining the Varsity drama society",
        "Being active in social media",

        "Tolerance",
        "Ego",
        "honesty",
        "Commitment and dedication",

        "Flexibility",
        "Teamwork builds an awareness of interdependence;",
        "To discuss about your favorite sports star",
        "To discuss about fellow peers",

        "So that we can handover the harder work to another team member",
        "Organizational culture encompasses values and behaviors that 'contribute to the unique social and psychological environment of a business.",
        "Ability to operate computers",
        "Ability to develop software and to troubleshoot hardware issues",

        "Being able to explain technical details to non-technical personnel in the interview panel",
        "Being proud of the technical skills etc.",
        "Not being able to apply the knowledge to the changing environments in a job",
        "Wearing a casual attire",

        "Local Rock band",
        "Volunteer to lead activities at a local community centre, home for seniors, pre-school",
        "In the Red Cross society",
        "Volunteering in the respective field of study",

        "Self-doubt",
        "Brainstorming",
        "Researching",
        "Self-Assessment",

        "Engaging in group based projects respective to the field of study",
        "Playing sports together",
        "Going on roadtrips",
        "Playing online games together",

        "Using the Pomodoro Technique",
        "Not taking frequent breaks and fully concentrating on the work load",
        "Taking breaks every 10 minutes",
        "Browsing the Internet while studying",

        "Self-discipline",
        "Emotional Intelligence",
        "Spatial Intelligence",
        "Digital Literacy"
    ];
    if (answer == 60) {
        document.getElementById("2006").hidden = false;
        document.getElementById("3000").hidden = true;
        document.getElementById("2000").hidden = true;
        setanwers();
       



    } else if (answer == 61) {
        onload();
    }

}
function setanwers() {
    var x = 0, y = 0, z = 0;
    do {
        x = Math.floor((Math.random() * 9) + 1);
        y = Math.floor((Math.random() * 9) + 1);
        z = Math.floor((Math.random() * 9) + 1);
        if (x != y && y != z) {
            if (x != z) {
                break;
            }
        }

    } while (true);

    document.getElementById(5000).innerHTML = quiz[x - 1];
    document.getElementById(6000).innerHTML = quiz[y - 1];
    document.getElementById(7000).innerHTML = quiz[z - 1];

    document.getElementById(51).innerHTML = answr[x * 4 - 4];
    document.getElementById(52).innerHTML = answr[x * 4 - 3];
    document.getElementById(53).innerHTML = answr[x * 4 - 2];
    document.getElementById(54).innerHTML = answr[x * 4 - 1];

    document.getElementById(65).innerHTML = answr[y * 4 - 4];
    document.getElementById(62).innerHTML = answr[y * 4 - 3];
    document.getElementById(63).innerHTML = answr[y * 4 - 2];
    document.getElementById(64).innerHTML = answr[y * 4 - 1];

    document.getElementById(71).innerHTML = answr[z * 4 - 4];
    document.getElementById(72).innerHTML = answr[z * 4 - 3];
    document.getElementById(73).innerHTML = answr[z * 4 - 2];
    document.getElementById(74).innerHTML = answr[z * 4 - 1];

}

function getanwers() {
var o=document.getElementById("510").checked;

var y=document.getElementById("610").checked;

var u=document.getElementById("710").checked;


if(u==true && y==true){
 if(o==true){

   
    document.getElementById("2006").hidden = true;
    document.getElementById("3000").hidden = false;
    document.getElementById("2000").hidden = true;
    document.getElementById("1001").hidden = false;
   
        lifes=3;
 }else{
     alert("Please check the answers and try again!");
       setanwers();
 }
}else{
alert("Please check the answers and try again!");
setanwers();
}


}