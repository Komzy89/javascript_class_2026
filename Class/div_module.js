export default function divide(...numbers) {
    return numbers.reduce((acc, curr) => acc / curr)
}