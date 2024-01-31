const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price');
    let totalPrice = 0;
    prices.forEach(price => {
        totalPrice += parseInt(price.textContent);
    });

    const table = document.querySelector('table');
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell();
    const cell2 = newRow.insertCell();
    cell1.textContent = 'Total Price:';
    cell2.textContent = totalPrice;
  
};

getSumBtn.addEventListener("click", getSum);

