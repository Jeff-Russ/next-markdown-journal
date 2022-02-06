export default function UList({ array }) {
  return (
    <ul>
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
