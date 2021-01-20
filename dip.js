function sumAsync(numbers, callback) {
    let sum = numbers.reduce((a, b) => a + b, 0);
    callback(sum);
}

// Before DIP:

// sumAsync([10, 20, 30], (sum) => {
//     console.log(`Sum: ${sum}`);
// });

// After DIP:
// (based on https://stackoverflow.com/a/5349478/4443890)

function getAndShowSum(numbers, view) {
    sumAsync(numbers, (sum) => {
        view.show(sum);
    });
}

const sumPrinter = {
    show: (sum) => {
        console.log(`Sum: ${sum}`);
    },
};

getAndShowSum([10, 20, 30], sumPrinter);
