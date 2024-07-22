
const btn = document.querySelector('button');
const container = document.querySelector('.container');

btn.addEventListener('click', function(){
    
    let difficulties = document.getElementById('difficulties').value;
    console.log(difficulties);
    container.innerHTML = '';
    boxPrinter(difficulties);

})

// funzioni
function boxPrinter (difficolta){
    let num = 0;
    

    if(difficolta == 'hardest'){
        num = 100;
        
    }

    else if (difficolta == 'hard'){
        num = 81;
        console.log(num);
    }

    else{
        num = 49;
        console.log(num);
    }

    for (let i = 0; i < num; i++){
        let col = document.createElement('div');
        col.innerHTML = (i + 1);
        col.classList.add(difficolta);
        container.append(col);
        col.addEventListener('click', function(){
            col.classList.toggle('lightcoral');
        })
    }
    
}


// FRANCESCO LEVATI













