const image = ({
    imageUrl,
    sizes=[],
    classitem
}) => (
    <img className={classitem} src={`${imageUrl}&odnWidth=${sizes[0]}`} ></img>
)

export default image;