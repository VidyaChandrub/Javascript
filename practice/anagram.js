let a = "mary";
let b = "army";

isAnagram(a,b);

function isAnagram(first , second){
    let f = first.split("").sort().join("");
    let s = second.split("").sort().join("");

    if (f === s) {
        console.log("Anagaram");
    }

}