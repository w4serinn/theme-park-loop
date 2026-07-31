// PGATE(旧正門、docs/ARG-DESIGN.md 4-6節「PGATE設計メモ」参照)。
// 10種の断片を集めたプレイヤーだけが、扉ページの謎解きに挑戦できる。
// ここに書く判定ロジックは src/logic.js の同名関数(hasAllGateFragments・
// countGateFragments・isGateCipherCorrect・isGateGroupBCorrect・
// isGateGroupCCorrect)と同じ内容の複製(file:// でも動くよう ES module
// import を使わない設計、他のDOMスクリプトと同じ方針)。
(function () {
  var GATE_REQUIRED_FRAGMENTS = ['F1', 'F3', 'F4', 'F5', 'F7', 'F8', 'F11', 'F12', 'F13', 'F14'];

  function hasAllGateFragments(fragmentIds) {
    var owned = fragmentIds || [];
    return GATE_REQUIRED_FRAGMENTS.every(function (id) {
      return owned.indexOf(id) !== -1;
    });
  }

  function countGateFragments(fragmentIds) {
    var owned = fragmentIds || [];
    return GATE_REQUIRED_FRAGMENTS.filter(function (id) {
      return owned.indexOf(id) !== -1;
    }).length;
  }

  var GATE_CIPHER_ANSWERS = {
    finlay: 'KAGI',
    eightSymbol: 'TOKI'
  };

  function isGateCipherCorrect(input, answerKey) {
    var expected = GATE_CIPHER_ANSWERS[answerKey];
    if (!expected) { return false; }
    return (input || '').trim().toUpperCase() === expected;
  }

  function setupCipherCheck(inputId, buttonId, resultId, answerKey) {
    var input = document.getElementById(inputId);
    var button = document.getElementById(buttonId);
    var result = document.getElementById(resultId);
    if (!input || !button || !result) { return; }
    button.addEventListener('click', function () {
      if (isGateCipherCorrect(input.value, answerKey)) {
        result.textContent = '……読み解けた。柱の光が、少しだけ強くなった気がする。';
        result.classList.add('gate-cipher__result--correct');
      } else {
        result.textContent = 'まだ何かが違うようだ。もう一度、対応表を確かめてみてほしい。';
        result.classList.remove('gate-cipher__result--correct');
      }
    });
  }

  var GATE_GROUP_B_ANSWER = '欠片の環';

  function isGateGroupBCorrect(choice) {
    return choice === GATE_GROUP_B_ANSWER;
  }

  var GATE_GROUP_C_ANSWER = '礎石の紋様と、刻印の証';

  function isGateGroupCCorrect(choice) {
    return choice === GATE_GROUP_C_ANSWER;
  }

  function setupChoiceCheck(formId, buttonId, resultId, radioName, isCorrect, emptyMessage, correctMessage, wrongMessage) {
    var form = document.getElementById(formId);
    var button = document.getElementById(buttonId);
    var result = document.getElementById(resultId);
    if (!form || !button || !result) { return; }
    button.addEventListener('click', function () {
      var checked = form.querySelector('input[name="' + radioName + '"]:checked');
      if (!checked) {
        result.textContent = emptyMessage;
        result.classList.remove('gate-choice__result--correct');
        return;
      }
      if (isCorrect(checked.value)) {
        result.textContent = correctMessage;
        result.classList.add('gate-choice__result--correct');
      } else {
        result.textContent = wrongMessage;
        result.classList.remove('gate-choice__result--correct');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var progress = window.CodexProgress ? window.CodexProgress.load() : { fragments: [] };
    var ownedIds = progress.fragments.map(function (f) { return f.id; });
    var statusText = document.getElementById('gate-status-text');
    var puzzle = document.getElementById('gate-puzzle');
    var found = countGateFragments(ownedIds);

    if (hasAllGateFragments(ownedIds)) {
      if (statusText) {
        statusText.textContent = '十の欠片が、すべて揃っている。柱の記号を読み解いてみてほしい。';
      }
      if (puzzle) { puzzle.hidden = false; }
    } else {
      if (statusText) {
        statusText.textContent = '扉はまだ、静かに閉じたままだ。今のところ、集まった欠片は' + found + '/10。';
      }
    }

    setupCipherCheck('gate-cipher-finlay', 'gate-cipher-finlay-check', 'gate-cipher-finlay-result', 'finlay');
    setupCipherCheck('gate-cipher-eight', 'gate-cipher-eight-check', 'gate-cipher-eight-result', 'eightSymbol');
    setupChoiceCheck(
      'gate-choice-b', 'gate-choice-b-check', 'gate-choice-b-result', 'gate-choice-b',
      isGateGroupBCorrect,
      'まずは一つ、選んでみてほしい。',
      '……矛盾は無い。案内板の文字が、静かに浮かび上がった。',
      'その名には、まだ小さな矛盾が残っているようだ。'
    );
    setupChoiceCheck(
      'gate-choice-c', 'gate-choice-c-check', 'gate-choice-c-result', 'gate-choice-c',
      isGateGroupCCorrect,
      'まずは一つ、選んでみてほしい。',
      '……そうだ、これだった。図案の輪郭が、はっきりと浮かび上がった。',
      '……いや、それは別の欠片の話だったはずだ。'
    );
  });
}());
