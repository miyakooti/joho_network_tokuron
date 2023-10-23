// window.alert('js読み込みできてます')

let a = 100;
let b = 20;
const d = 10;
let c = a + b + d;

if (a > b) {
    console.log('a is bigger than b.')
} else {
    console.log('b is bigger than a.')
}


// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

const person = {
    height: 179,
    hoge: "hoge",
    count10: () => {
        let i = 0;
        while (i < 10) {
            console.log(i);
            i++;
        }
    }
};

// いろんなメンバがあることを確認
console.log(window)
console.log(document)

const $para1 = document.getElementById("para1");
$para1.textContent = "after";

const answer = ["2", "3", "4"];

const $ans1 = document.getElementById('ans1');
const $ans2 = document.getElementById('ans2');
const $ans3 = document.getElementById('ans3');
const $anslabel = document.getElementById('ans-label');

$ans1.textContent = answer[0] + "回目";
$ans2.textContent = answer[1] + "回目";
$ans3.textContent = answer[2] + "回目";

$ans1.addEventListener('click', () => {
    $anslabel.classList.remove("invisible");
    $anslabel.classList.remove("seikai");
    $anslabel.classList.add("hazure");

    $anslabel.textContent = "はずれ"

    audio_fail()


});

$ans2.addEventListener('click', () => {
    $anslabel.classList.remove("invisible");
    $anslabel.classList.remove("hazure");
    $anslabel.classList.add("seikai");
    $anslabel.textContent = "正解"

    audio()


});

$ans3.addEventListener('click', () => {
    $anslabel.classList.remove("invisible");
    $anslabel.classList.remove("seikai");
    $anslabel.classList.add("hazure");
    $anslabel.textContent = "はずれ"

    audio_fail()

});

document.getElementById("").onclick = function() {

};



function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}

function audio_fail() {
    document.getElementById('btn_audio_fail').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio_fail').play(); //クリックしたら音を再生
}