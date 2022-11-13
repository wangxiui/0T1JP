import cn from "classnames";

interface Props {
  text: string|number
  className?: string
}

export default function Word(props: Props) {
  console.log('Word', props);
  const {text, className} = props
  const rootClassName = cn(
    'w-96 h-96 m-auto bg-transparent border-solid border-2 border-indigo-600 flex justify-center items-center ' +
    'rounded-lg shadow-lg shadow-blue-500/50 text-7xl',
    className
  );
  return (
    <div className={rootClassName}>{text}</div>
  )
}
