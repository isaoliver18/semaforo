document.addEventListener('DOMContentLoaded',()=>{
    const vermelho = document.getElementById('vermelho')
    const amarelo = document.getElementById('amarelo')
    const verde = document.getElementById('verde')

    let estadoAtual = 'amarelo'

    function alternarLuzes(){
        if(estadoAtual === 'amarelo'){
            amarelo.style.backgroundColor = '#ffff00';
            vermelho.style.backgroundColor = '#555555';
            verde.style.backgroundColor = '#555555';
            estadoAtual = 'vermelho';
     }else if (estadoAtual === 'vermelho'){
        amarelo.style.backgroundColor = '#555555';
        vermelho.style.backgroundColor = '#ff0000';
        verde.style.backgroundColor = '#555555';
        estadoAtual = 'verde';
    }else if (estadoAtual === 'verde'){
        amarelo.style.backgroundColor = '#555555';
        vermelho.style.backgroundColor = '#555555';
        verde.style.backgroundColor = '#00ff00';
        estadoAtual = 'amarelo';
    
        }
    }
    setInterval(alternarLuzes, 2000);
});