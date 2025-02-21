

const decreseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

increseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}