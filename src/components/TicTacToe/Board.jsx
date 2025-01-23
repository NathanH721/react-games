import WinLine from "./WinLine"
import Tile from "./Tile";
import PropTypes from "prop-types";

function Board({ tiles, onTileClick, player }) {
    return (
        <div className = "Board">
            <Tile onClick = { () => onTileClick(0) } player = { player } value = { tiles[0] } className = 'right-border bottom-border' />
            <Tile onClick = { () => onTileClick(1) } player = { player } value = { tiles[1] } className = 'right-border bottom-border' />
            <Tile onClick = { () => onTileClick(2) } player = { player } value = { tiles[2] } className = 'bottom-border' />
            <Tile onClick = { () => onTileClick(3) } player = { player } value = { tiles[3] } className = 'bottom-border right-border' />
            <Tile onClick = { () => onTileClick(4) } player = { player } value = { tiles[4] } className = 'bottom-border right-border' />
            <Tile onClick = { () => onTileClick(5) } player = { player } value = { tiles[5] } className = 'bottom-border' />
            <Tile onClick = { () => onTileClick(6) } player = { player } value = { tiles[6] } className = 'right-border' />
            <Tile onClick = { () => onTileClick(7) } player = { player } value = { tiles[7] } className = 'right-border' />
            <Tile onClick = { () => onTileClick(8) } player = { player } value = { tiles[8] } />
            <WinLine />
        </div>
    );
}

Board.propTypes = {
    tiles: PropTypes.array,
    onTileClick: PropTypes.func,
    player: PropTypes.string,
};

export default Board;
