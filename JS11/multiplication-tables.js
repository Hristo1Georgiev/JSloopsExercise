//Multiplication tables

for (let i = 1; i <= 9; i++) {
    const x = 9;
    y = x * i;
    console.log(i + "*" + x + "=" + y);
};

// Bonus
for (let x = 1; x <= 9; x++) {
    for (let i = 1; i <= 9; i++) {
        let result = x * i;
        console.log(x + " * " + i + " = " + result);
    }
};
