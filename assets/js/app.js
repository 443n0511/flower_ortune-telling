function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createHanabira(initDeg, randomNum) { 
    const parent = document.getElementById("js-parent");
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < randomNum; i++) { 
        const li = document.createElement('li');
        li.id = `hanabira${i}`;
        li.classList.add('p-list');
        fragment.appendChild(li);
        let deg = 360 / randomNum ;
        const currentDeg = deg + initDeg; 
        li.setAttribute("style", "transform:rotate("+currentDeg+"deg)translateY(-120%);");
        initDeg = currentDeg;
    }
    parent.appendChild(fragment);
    
    
}

const min = 10 
const max = 20
const randomNum = getRandomIntInclusive(min, max);
createHanabira(0, randomNum);




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
    if (getId < (randomNum - 1)) {
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




    

