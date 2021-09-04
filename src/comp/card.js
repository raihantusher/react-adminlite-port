

function Card(props) {
    return (
        <div className="card mt-3">
            <div className="card-header">Hello world</div>
                <div className="card-body">
                hello world { props.body}
                </div>
        </div>
      );
}

export default Card;