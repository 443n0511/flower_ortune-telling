// 包括的に 2 つの値の間のランダムな整数を得る
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

const getRandom = getRandomIntInclusive(12,25);

// 花びらをランダムの数表示する関数
function newAdd (){
    const parent= document.getElementById("js-parent");

    console.log(parent);

    // divをランダムの数用意する為のループ
    for(let i=0; i<getRandom ; i++){
        const add = document.createElement('div'); // div 用意
        add.id = 'hanabira'+i; // 花びらの id
        add.textContent= "これは追加した"+(i+1)+"個目のdiv"
        parent.appendChild(add);//parentの中の末尾にaddを挿入
    }
}

newAdd();



