export default function Story({username,img}) {
  return (
    <div>
        <img src={img} alt={username}></img>
        <p>{username}</p>
    </div>
  )
}
