/*  로또: 45개의 숫자중에 6개를 맞추는 것. 중복 없음. 2등은 5개 맞춘거에 보너스볼 맞은사람(3등에서 보너스맞은사람)
    내가 찍을 번호 입력하는거. 거기서 로또번호 45개중 6개 나오는거, 로또번호 중복안되게 하는거 6개와, 6개가 매칭되는거 확인, 보너스볼 랜덤으로 나오는거, 보너스볼 맞는지 확인
    html과 연결해서 입력값 choise로 정하기
*/
// todo 결과 누르면 화면 다시 시작해야되는데, 반복문으로 같은 번호로 결과 여러번 누를 수 있게 만들기
// 같은 숫자 입력되는데 입력 안되게 막기
var choise = [0,0,0,0,0,0] //숫자 선택

// 숫자입력 값 받아오는 것 연결
window.onload=function(){
    choise[0]=document.getElementById("first_n");
    choise[1]=document.getElementById("second_n");
    choise[2]=document.getElementById("fhird_n");
    choise[3]=document.getElementById("fourth_n");
    choise[4]=document.getElementById("fifth_n");
    choise[5]=document.getElementById("sixth_n");
}
// choise[0]=1;
// choise[1]=2;
// choise[2]=3;
// choise[3]=4;
// choise[4]=5;
// choise[5]=6;

var lotto = [0,0,0,0,0,0]
// 선택 누르면 로또당첨결과 보여주는 것
var select_click = function () {
    while (true) { //전체 반복문 걸어줌
        
        // if (choise[i] == choise[i]) {
        //     alert("같은 번호 입력안됨");
        //     break;
        // }


        // 1번 번호
        lotto[0] = Math.floor(Math.random() * 45) + 1;
        document.write(lotto[0]);
        document.write("<br>");


        while (true) {
            lotto[1] = Math.floor(Math.random() * 45) + 1;
            if (lotto[1] != lotto[0]) {
                document.write(lotto[1]);
                document.write("<br>");
                break;
            }
        }

        while (true) {
            lotto[2] = Math.floor(Math.random() * 45) + 1;
            if (lotto[2] != lotto[0] && lotto[2] != lotto[1]) {
                document.write(lotto[2]);
                document.write("<br>");
                break;
            }
        }

        while (true) {
            lotto[3] = Math.floor(Math.random() * 45) + 1;
            if (lotto[3] != lotto[0] && lotto[3] != lotto[1] && lotto[3] != lotto[2]) {
                document.write(lotto[3]);
                document.write("<br>");
                break;
            }
        }

        while (true) {
            lotto[4] = Math.floor(Math.random() * 45) + 1;
            if (lotto[4] != lotto[0] && lotto[4] != lotto[1] && lotto[4] != lotto[2] && lotto[4] != lotto[3]) {
                document.write(lotto[4]);
                document.write("<br>");
                break;
            }
        }

        while (true) {
            lotto[5] = Math.floor(Math.random() * 45) + 1;
            if (lotto[5] != lotto[0] && lotto[5] != lotto[1] && lotto[5] != lotto[2] && lotto[5] != lotto[3] && lotto[5] != lotto[4]) {
                document.write(lotto[5]);
                document.write("<br>");
                break;
            }
        }
        while (true) {
            var bonus = Math.floor(Math.random() * 45) + 1;
            if (bonus != lotto[0] && bonus != lotto[1] && bonus != lotto[2] && bonus != lotto[3] && bonus != lotto[4] && bonus != lotto[5]) {
                document.write("보너스볼:" + bonus);
                document.write("<br>");
                break;
            }
        }
        // lotto_n()

        var matching = 0
        // choise[0]이 lotto[0]~ choise[5]이 lotto[5]와 같을때 1점 상승 최대 6점 가짓수 6x6
        for (var i = 0; i < 5; i = i + 1) {
            for (var j = 0; j < 5; j = j + 1) {
                if (choise[i] == lotto[j]) {
                    matching = matching + 1
                }
            }

        }
        document.write("<br>" + matching + "개맞음" + "<br>")
        switch (matching) {
            case 0:
                document.write("꽝입니다.")
                break; // break 까먹음;
            case 1:
                document.write("꽝입니다.")
                break;
            case 2:
                document.write("꽝입니다.")
                break;
            case 3:
                document.write("5등입니다.")
                break;
            case 4:
                document.write("4등입니다.")
                break;
            case 5:
                if (bonus == choise[i]) {
                    document.write("2등입니다.")
                }
                else {
                    document.write("3등입니다.")
                }
                break;
            case 6:
                document.write("1등입니다.")
                break;
        }
        break;
    }
}
