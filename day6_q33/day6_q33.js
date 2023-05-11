/*  
    가위바위보를 이미지로 표현
*/

// todo -> 가위,바위,보가 아닌 것을 쳤을때 나오는 com 글자와 컴퓨터 이미지가 나오는 것을 없애보자.
// 이미지는 없어졌는데 컴을 어케 없앤다. -> default값이 출력되는거니까 default 에서 다시 com="";을 넣어줫다.

// var input = prompt("가위 바위 보");
var br = function (){
    document.write("<br>")
}
var input_text;
var result_box;
var result = "";

// 이미지 놓일 div들 추가
var divimgcom;
var divimgMy;

window.onload = function(){
    input_text = document.getElementById("inputtext");
    result_box = document.getElementById("result_screen");
    divimgcom = document.getElementById("com_img");
    divimgMy = document.getElementById("my_img");
}
function inputclick(){
    var r = Math.floor(Math.random()*100)+1;
    var winDrawLose = ""
    var com = ""
    input = input_text.value;
    if(r<=33){
        com = "가위";
        divimgcom.innerHTML = "<img src='c_sc.png'>";
        switch (input) {
            case "가위":
                winDrawLose = "비겼다";
                divimgMy.innerHTML = "<img src='c_sc.png'>";
                // document.write("비겼다");
                break;
            case "바위":
                winDrawLose = "이겼다";
                divimgMy.innerHTML = "<img src = 'c_sc.png'>";
                // document.write("졌다");
                break;
            case "보":
                winDrawLose = "졌다";
                divimgMy.innerHTML = "<img src = 'c_pa.png'>";
                // document.write("이겼다");
                break;
            default:
                winDrawLose = "'가위' '바위' '보' 만 쳐주세요.";
                divimgcom.innerHTML = "<img src = ''>";
                com = "";

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
        divimgcom.innerHTML = "<img src = 'c_ro.png'>";
        switch (input) {
            case "가위":
                winDrawLose = "졌다";
                divimgMy.innerHTML = "<img src = 'c_sc.png'>";
                // document.write("이겼다");
                break;
            case "바위":
                winDrawLose = "비겼다";
                divimgMy.innerHTML = "<img src = 'c_sc.png'>";
                // document.write("비겼다");
                break;
            case "보":
                winDrawLose = "이겼다";
                divimgMy.innerHTML = "<img src = 'c_pa.png'>";
                // document.write("졌다");
                break;
            default:
                winDrawLose = "'가위' '바위' '보' 만 쳐주세요.";
                divimgcom.innerHTML = "<img src = ''>";
                com = "";
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
        divimgcom.innerHTML = "<img src = 'c_pa.png'>";
        switch (input) {
            case "가위":
                winDrawLose = "이겼다";
                // document.write("졌다");
                divimgMy.innerHTML = "<img src = 'c_sc.png'>";
                break;
            case "바위":
                winDrawLose = "졌다";
                divimgMy.innerHTML = "<img src = 'c_sc.png'>";
                // document.write("이겼다");
                break;
            case "보":
                winDrawLose = "비겼다";
                divimgMy.innerHTML = "<img src = 'c_pa.png'>";
                // document.write("비겼다");
                break;
            default:
                winDrawLose = "'가위' '바위' '보' 만 쳐주세요.";
                divimgcom.innerHTML = "<img src = ''>";
                com = "";
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
    result = result + "결과:" + winDrawLose;
    result_box.value = result;
}
