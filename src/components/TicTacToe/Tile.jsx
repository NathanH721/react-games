import PropTypes from "prop-types";

function Tile({ className, value, onClick, player }) {
    let turnHover = null;

    if (value === null && player != null) {
        turnHover = `${ player.toLowerCase() }-hover`;
    }

    return (
        <div className = {`Tile ${className} ${turnHover}`} onClick = { onClick }>{ value }</div>
    );
}

Tile.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    player: PropTypes.string,
};

export default Tile;