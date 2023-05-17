let fibonacci = [0, 1]; 

for (let i = 2; i < 100; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
}

alert(fibonacci);
