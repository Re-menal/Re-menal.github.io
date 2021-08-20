import {data} from './data';

function fnc() {
  let equation = document.getElementById('eq');
  let answer = document.getElementById('link');

  // 問題表示
  let num = Math.floor( Math.random() * data.length ); // integrals の要素の番号をランダムに選ぶ
  equation.innerHTML = data[num][0];

  // 解説表示
  document.getElementById('answer').style.display = 'block';
  if (data[num][1] == 0) {
    answer.innerHTML = '準備中';
    answer.removeAttribute('href');
  }
  else {
    answer.setAttribute('href', integrals[num][2]);
  }

  // KaTeX レンダー
  renderMathInElement(document.body,
    {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\[", right: "\\]", display: true},
        {left: "\\(", right: "\\)", display: false}
      ]
    }
  );
}
