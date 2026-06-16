export default function subtract(...numbers)
{
    return numbers.reduce((acc, curr) => acc - curr)
}