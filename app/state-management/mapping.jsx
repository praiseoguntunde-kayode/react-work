// const className = [
//     {id:1, name: "John"},
//     {id:2, name: "Doe"},
//     {id:3, name: "Smith"},
// ]

const classname = [
    {id:1, name: "John"},
    {id:2, name: "Doe"},
    {id:3, name: "Smith"},
    {id:4, name: "Jane"},
    {id:5, name: "Brown"}
]

export default function Mapping() {
    return(
        <div>
            {classname.map((name, index) => (<p key={index}>{name}</p>))}
        </div>
    )
}