function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (
        <>
            <h3>JSON Stringify</h3>
            <div>squares = {JSON.stringify(squares)} </div>
        </>
    );
}
export default JsonStringify;