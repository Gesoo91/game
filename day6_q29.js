var r = Math.floor(Math.random()*100)+1;
var input = prompt("가위 바위 보");
if(r<=33){
    function scissors(){
        switch(input){
            case "가위":
                document.write("비겼다");
                break;
            case "바위":
                document.write("졌다");
                break;
            case "보":
                document.write("이겼다");
                break;
            default:
                document.write("'가위' '바위' '보' 만 쳐주세요.")
        }
    }
    scissors()
}
else if(r>33 && r<=66){
function rock(){
        switch(input){
            case "가위":
                document.write("이겼다");
                break;
            case "바위":
                document.write("비겼다");
                break;
            case "보":
                document.write("졌다");
                break;
            default:
                document.write("'가위' '바위' '보' 만 쳐주세요.")
        }
    }
    rock()
}
else{
    function paper(){
        switch(input){
            case "가위":
                document.write("졌다");
                break;
            case "바위":
                document.write("이겼다");
                break;
            case "보":
                document.write("비겼다");
                break;
            default:
                document.write("'가위' '바위' '보' 만 쳐주세요.")
        }
    }
    paper()
}


