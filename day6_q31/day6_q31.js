/*  com 값을 선언 통해서 단순화 
    조건문을 통한 난수 통일해서 위에다가 변경
    onload로 html의 id input과 연결했고, inputclick()이라는 버튼을 누르면 결과값 나오도록 변경
    스위치문 안에 스위치문을 넣어서 첫 스위치문에 내가 입력한 값을 넣고, 두번째 스위치에 난수 별 승무패를 적어서 결과값 발표
*/



// var input = prompt("가위 바위 보");
var br = function (){
    document.write("<br>")
}
var r = ""
var user_input = ""

var input_text;

window.onload = function(){
    input_text = document.getElementById("input");
}

function inputclick(){
    while(true){
        user_input = input_text.value;
        // ~~.value; 는 str에만 쓸 수 잇어서 위에 var ="" 해서 문자열 선언해둬야됨
        if(user_input == "가위" || user_input == "바위" || user_input == "보")
            break;
        else{
            alert("'가위' '바위' '보' 만 쳐주세요.");
            break;
        }
    }

    var r = Math.floor(Math.random()*100+1);
    if(r<=33){
        r = "가위";
    }
    if(r>33 && r<=66){
        r = "바위";
    }
    if(r>=67){
        r = "보";
    }
    document.write("내가 낸 것:"+user_input)
    br()
    document.write("컴퓨터가 낸 것:"+r)
    br()

    var winDraoLose = "";
    switch(user_input){
        case "가위":
            switch(r){
                case"가위":
                    winDraoLose = "비겼다";
                    break;
                case "바위":
                    winDraoLose = "졌다";
                    break;
                case "보":
                    winDraoLose = "이겼다";
                    break;
                }
        break;
        // default:
        //     document.write("'가위' '바위' '보' 만 쳐주세요.")

        case "바위":
            switch(r){
                case "가위":
                    winDraoLose = "이겼다";
                    break;
                case "바위":
                    winDraoLose = "비겼다";
                    break;
                case "보":
                    winDraoLose = "졌다";
                    break;
            }
        break;
        // default:
        //     document.write("'가위' '바위' '보' 만 쳐주세요.")

        case "보":
            switch(r){
                case"가위":
                    winDraoLose = "졌다";
                    break;
                case "바위":
                    winDraoLose = "이겼다";
                    break;
                case "보":
                    winDraoLose = "비겼다";
                    break;
            }
        break;
        // default:
    }    
    document.write(winDraoLose)

}