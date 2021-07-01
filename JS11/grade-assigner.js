
//The grade assigner
const assignGrade = (score) => {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
};
for (let i = 60; i <= 64; i++) {
    console.log("For scoring " + i + " points, you get an E");
};
for (let i = 65; i <= 69; i++) {
    console.log("For scoring " + i + " points, you get an D");
};
for (let i = 70; i <= 79; i++) {
    console.log("For scoring " + i + " points, you get an C");
};
for (let i = 80; i <= 89; i++) {
    console.log("For scoring " + i + " points, you get an B");
};
for (let i = 90; i <= 100; i++) {
    console.log("For scoring " + i + " points, you get an A");
};

