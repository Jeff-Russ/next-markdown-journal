import UList from '@/components/UList'

export default function Table({ array }) {
  return (
    <table>
      <thead>
        <tr>
          {array[0].map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {array.slice(1).map((row, index) => {
          return (
            <tr key={row}>
              {row.map((item) => (
                <td key={index}>{Array.isArray(item) ? <UList array={item} /> : item}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
