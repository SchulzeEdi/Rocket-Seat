// props: {author: "" content: ""}

export function Post(props) {
    console.log(props)
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

/*
Default Exports = export default Post
Named Exports = Exporta a funcao diretamente
*/