import "./card.css";
export function Card(props) {
    return (
        <>
            <div className="cards-settings">
                <h1>{props.props.data.name}</h1>
                <img src={props.props.data.sprites.front_default} />
                <p>{props.props.data.types[0].type.name}</p>
            </div>
        </>
    );
}