
// ----- Seleção de elementos do HTML -----//

const Mario=document.querySelector('.Mario')
const pipe=document.querySelector('.pipe')
const startButton=document.querySelector('startButton')
const restartButton=document.querySelector('startButton')
const gameOver=gameOver.querySelector('gameOver')

// ----- ---------- --------- ------- -----//


// ----- Definição de Audios -----//

const audioStart = new Audio ('sound/audio_theme.mp3')
const audioGameOver = new Audio ('sound/audio_gameover.mp3')
const audioMario = new Audio ('sound/MARIO_soung_audio_theme.mp3')

// ----- Variaveis de Controles do Jogo -----//

let gameInterval = null

// ----- Funções para Iniciar o Jogo -----//