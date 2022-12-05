
type Props = {
  title: string;
  url: string;
}

export const GifItem = ({
    title,
    url,
}: Props) => {
  return (
    <div className="card">
        <li>{ title }</li>
        <img src={url} alt={title} />
    </div>
  )
}
