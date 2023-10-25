/* 
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
(because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
const checkDog = function (dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // const dogs = [...dogsJuliaCorrected, ...dogsKate]
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
    dogs.forEach((dog,i) => {
        if(dog>=3)
            console.log(`Dog number ${i} is an adult, and is ${dog} years old`)
        else
            console.log(`Dog number ${i} is still a puppy 🐶`)

    });
}
checkDog([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
checkDog([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);