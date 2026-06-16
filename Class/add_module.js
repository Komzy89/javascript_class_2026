export default function add(...numbers)
{
    return numbers.reduce((acc, curr) => acc + curr)
}