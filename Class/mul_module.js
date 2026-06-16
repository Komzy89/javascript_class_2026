export default function multiply(...numbers)
{
    return numbers.reduce((acc, curr) => acc * curr)
}