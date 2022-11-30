
type Props = {
    id: string;
    title: string;
    url: string;
}

export const GifItem = ({
    id,
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
