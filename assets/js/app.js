function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandom = getRandomIntInclusive(10, 20);
let getDeg = 0;
// 花びらをランダムの数表示する関数
function newAdd() {
    const parent = document.getElementById("js-parent");

    // console.log(parent);

    // divをランダムの数用意する為のループ
    for (let i = 0; i < getRandom; i++) {
        const add = document.createElement('li'); // li用意
        add.id = 'hanabira' + (i); // １から始まる花びらの idを追加
        // add.textContent = "これは" + (i + 1) + "枚目のはなびら"
        add.classList.add('p-list');//花びらのclassもセット
        parent.appendChild(add);//parentの中の末尾にaddを挿入
        let setDeg = 360 / getRandom ;
        getDeg = setDeg + getDeg;
        add.setAttribute("style", "transform:rotate("+getDeg+"deg)translateY(-100px);");
        console.log(add);
    }
}

newAdd();


//花びらを消すボタン

let getId = 0;//花びらのidの初期化
const result = document.createElement('p'); // 結果出力用のpを用意
const resultParent = document.getElementById("js-result");
result.id = 'result_text'; // 結果出力用idを追加
result.classList.add('p-result-box','__text');//結果出力用classもセット


document.getElementById("js-button-primary").onclick = function () {

    let setId = document.getElementById('hanabira' + getId);//花びらのidをセット
    resultParent.insertBefore(result, resultParent.lastChild);

    // ランダムで取得した数と同じ数だけボタンを押せるようにする
    if (getId < (getRandom - 1)) {
        document.getElementById("js-button-primary").removeAttribute("disabled");
        getId++;
        setId.classList.add('fadeout');
        setTimeout(function () {
            setId.style.display = "none";
        }, 1000);

        //結果出力
        if (getId % 2 == 0) {
            document.getElementById('js-resultText').innerText = 'スキ！';
        } else {
            document.getElementById('js-resultText').innerText = 'キライ';
        }



    } else {
        // disabled属性を設定
        document.getElementById("js-button-primary").setAttribute("disabled", true);
        setId.classList.add('fadeout');
        getId++;
        setTimeout(function () {
            setId.style.display = "none";
        }, 1000);

        //結果出力
        if (getId % 2 == 0) {
            result.innerHTML = '<img src="assets/images/smile.png" alt="うれしいきもち">';
            document.getElementById('js-resultText').innerText = '結果：スキ！おめでとうございます！';
            

        } else {
            result.innerHTML =  '<img src="assets/images/sad.png" alt="かなしいきもち">';
            document.getElementById('js-resultText').innerText = '結果：キライ…どんまい！';

        }

    }

};

//リロードボタン

document.getElementById("js-button-reload").onclick = function () {
    location.reload();
};




    

