const allCanvas = document.querySelectorAll('canvas')

async function loadData() {
    const response = await fetch('./data.json');
    const datas = await response.json();
    amounts = []
    let max = 0

    for (let i = 0; i < datas.length; i++) {
        const element = datas[i];
        const montant = datas[i].amount;
        amounts.push(montant)
        max = Math.max(...amounts)
    }

    for (let i = 0; i < datas.length; i++) {
        const element = datas[i];
        const montant = datas[i].amount;
        allCanvas[i].style.height = (150 * montant / max) + "px"
    }
}

loadData();  
