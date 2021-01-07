// 包括的に 2 つの値の間のランダムな整数を得る
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandom = getRandomIntInclusive(5, 10);

// 花びらをランダムの数表示する関数
function newAdd() {
    const parent = document.getElementById("js-parent");

    // console.log(parent);

    // divをランダムの数用意する為のループ
    for (let i = 0; i < getRandom; i++) {
        const add = document.createElement('li'); // div 用意
        add.id = 'hanabira' + (i); // １から始まる花びらの idを追加
        add.textContent = "これは" + (i + 1) + "枚目のはなびら"
        add.classList.add('p-list');//花びらのclassもセット
        parent.appendChild(add);//parentの中の末尾にaddを挿入

    }
}

newAdd();


//花びらを消すボタン

let getId = 0;//花びらのidの初期化
document.getElementById("js-button-primary").onclick = function () {

    let setId = document.getElementById('hanabira' + getId);//花びらのidをセット

    // ランダムで取得した数と同じ数だけボタンを押せるようにする
    if (getId < (getRandom -1)) {
        document.getElementById("js-button-primary").removeAttribute("disabled");
        getId++;
        setId.classList.add('fadeout');
        setTimeout(function () {
            setId.style.display = "none";
        },1000);
    } else {
        // disabled属性を設定
        document.getElementById("js-button-primary").setAttribute("disabled", true);
        setId.classList.add('fadeout');
        setTimeout(function () {
            setId.style.display = "none";
        },1000);
    }
};


//リロードボタン

document.getElementById("js-button-reload").onclick = function () {
    location.reload();
};

