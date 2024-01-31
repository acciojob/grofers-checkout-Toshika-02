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
    const newRow = table.insertRow(-1);
    const cell = newRow.insertCell(0);
    cell.textContent = `Total Price: ${totalPrice}`;
  
};

getSumBtn.addEventListener("click", getSum);

