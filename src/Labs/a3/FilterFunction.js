function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
    return (
        <>
        <h3>Filter Function</h3>
        <div>numbersGreaterThan2 = {numbersGreaterThan2}</div>
        <div>evenNumbers = {evenNumbers}</div>
        <div>oddNumbers = {oddNumbers}</div>
        </>
    );
}
export default FilterFunction;