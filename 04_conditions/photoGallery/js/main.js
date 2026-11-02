const MAX_HP = 100;
const DAMAGE = 25;
let currentHp = MAX_HP;
const BEFORE_IMG = 'https://picsum.photos/id/1025/400/250';
const AFTER_IMG = 'https://picsum.photos/id/1062/400/250';


const enemyImg = document.getElementById('enemy-img');
const hpDisplay = document.getElementById('hp-display');
const attackBtn = document.getElementById('attack-btn');
const battleMessage = document.getElementById('battle-message');

attackBtn.addEventListener('click', () => {
    currentHp -= DAMAGE;
    hpDisplay.textContent = `HP: ${currentHp}/ 100`;

    if (currentHp === 0) {
        enemyImg.setAttribute('src', AFTER_IMG);
        enemyImg.setAttribute('alt', '倒れたモンスター');
        battleMessage.textContent = 'モンスターをたおした！ゲームクリア！';
        attackBtn.setAttribute('disabled', 'true')
        hpDisplay.style.color = '#e74c3c';
    } else if (currentHp <= 50) {
        battleMessage.textContent = '相手はふらふらだ！あと少し！';
        hpDisplay.style.color = '#e67e22';
    } else {
        battleMessage.textContent = '効果的なダメージを与えた！';
        hpDisplay.style.color = '#333';
    }

});
