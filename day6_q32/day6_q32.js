/*  
    단판 -> 무한으로 변경
    이겼다 졋다를 변수에 넣어서 마지막에 표시
    승무패 결과를 결과창에 표시
*/
// todo : 클릭을 다시 눌러도 r값이 안바뀜 -> r을 클릭 안쪽으로 넣어서 해결!



// var input = prompt("가위 바위 보");
var br = function (){
    document.write("<br>")
}
var input_text;
var result_box;
var result = "";

window.onload = function(){
    input_text = document.getElementById("inputtext");
    result_box = document.getElementById("result_screen")
}
function inputclick(){
    var r = Math.floor(Math.random()*100)+1;
    var winDrawLose = ""
    var com = ""
    input = input_text.value;
    if(r<=33){
        com = "가위";
        switch (input) {
            case "가위":
                winDrawLose = "비겼다";
                // document.write("비겼다");
                break;
            case "바위":
                winDrawLose = "이겼다";
                // document.write("졌다");
                break;
            case "보":
                winDrawLose = "졌다";
                // document.write("이겼다");
                break;
            default:
                winDrawLose = "'가위' '바위' '보' 만 쳐주세요.";

        }

        
        // com = "가위"
        // document.write("내가 낸 것:"+input)
        // br()
        // document.write("컴퓨터가 낸 것:"+com)
        // br()
        // scissors()
        // result = winDrawLose + "/n;" + "내가 낸것 : " + input
        // result = winDrawLose
    }
    else if(r>33 && r<=66){
        com = "바위";
        switch (input) {
            case "가위":
                winDrawLose = "졌다";
                // document.write("이겼다");
                break;
            case "바위":
                winDrawLose = "비겼다";
                // document.write("비겼다");
                break;
            case "보":
                winDrawLose = "이겼다";
                // document.write("졌다");
                break;
            default:
                winDrawLose = "'가위' '바위' '보' 만 쳐주세요.";
        }


        // document.write("내가 낸 것:"+input)
        // br()
        // document.write("컴퓨터가 낸 것:"+com)
        // br()
        // rock()
        // result = winDrawLose
        }
    else{
        com = "보";
        switch (input) {
            case "가위":
                winDrawLose = "이겼다";
                // document.write("졌다");
                break;
            case "바위":
                winDrawLose = "졌다";
                // document.write("이겼다");
                break;
            case "보":
                winDrawLose = "비겼다";
                // document.write("비겼다");
                break;
            default:
                winDrawLose = "'가위' '바위' '보' 만 쳐주세요.";
        }
        
        
        // document.write("내가 낸 것:"+input)
        // br()
        // document.write("컴퓨터가 낸 것:"+com)
        // br()
        // paper()
        // result = winDrawLose
    }

    
    result = "내가 낸 것:"+input;
    result = result + "\n";
    result = result + "컴퓨터가 낸 것:" + com;
    result += "\n";
    result = result + "결과:" + winDrawLose
    result_box.value = result;
}
