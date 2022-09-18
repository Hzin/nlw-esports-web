interface InputPros extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function Input(props: InputPros) {
  return (
    <input 
      {...props}
      className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
    />
  )
}
