/*  
    html form 으로 프롬포트 대신한 입력창과 버튼 만듬.
    window.onload로 id 연결하여 input값이 스위치로 들어가게 했고,
    click으로 전체를 둘러싸서 버튼을 누르면 값 출력되게함
*/


var r = Math.floor(Math.random()*100+1);
// var input = prompt("가위 바위 보");
var br = function (){
    document.write("<br>")
}


window.onload = function(){
    input_text = document.getElementById("inputtext");
}


function inputclick(){
    input = input_text.value;
    winDrawLose = ""
    if(r<=33){
        // function scissors(){
            
            switch(input){
                case "가위":
                    winDrawLose ="비겼다";
                    break;
                case "바위":
                    winDrawLose ="이겼다";
                    break;
                case "보":
                    winDrawLose ="졌다";
                    break;
                default:
                    winDrawLose ="'가위' '바위' '보' 만 쳐주세요.";
            }
        // }
        com = "가위"
        // document.write("내가 낸 것:"+input)
        // br()
        // document.write("컴퓨터가 낸 것:"+com)
        // br()
        // scissors()
        // document.write(winDrawLose);
    }
    else if(r>33 && r<=66){
    // function rock(){
            switch(input){
                case "가위":
                    winDrawLose ="졌다";
                    break;
                case "바위":
                    winDrawLose ="비겼다";
                    break;
                case "보":
                    winDrawLose ="이겼다";
                    break;
                default:
                    winDrawLose ="'가위' '바위' '보' 만 쳐주세요.";
            }
        // }
        com = "바위"
        // document.write("내가 낸 것:"+input)
        // br()
        // document.write("컴퓨터가 낸 것:"+com)
        // br()
        // rock()
        // document.write(winDrawLose);
    }
    else{
        // function paper(){
            switch(input){
                case "가위":
                    winDrawLose ="이겼다";
                    break;
                case "바위":
                    winDrawLose ="졌다";
                    break;
                case "보":
                    winDrawLose ="비겼다";
                    break;
                default:
                    winDrawLose ="'가위' '바위' '보' 만 쳐주세요.";
            }
        // }
        com = "보"
        // document.write("내가 낸 것:"+input)
        // br()
        // document.write("컴퓨터가 낸 것:"+com)
        // br()
        // paper()
        // document.write(winDrawLose);
    }

    document.write("내가 낸 것:"+input);
    br();
    document.write("컴퓨터가 낸 것:"+com);
    br();
    document.write(winDrawLose);

}

