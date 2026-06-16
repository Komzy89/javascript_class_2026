export default function mean(...numbers)
{
    return numbers.reduce((acc, curr) => acc + curr) / numbers.length
}