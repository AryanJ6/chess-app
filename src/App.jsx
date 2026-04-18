


export function WhiteSquare() {
    return (
        <button className="whiteSquare">x</button>
    );
};

export function BlackSquare() {
    return (
        <button className="blackSquare">x</button>
    );
}

// ----------------------------------------------------------------------------------------------

export default function Board () {
    return (
        <>
            <div className="board-row">
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />   
            </div>
            <div className="board-row">
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare /> 
                <WhiteSquare />  
            </div>
            <div className="board-row">
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />   
            </div>
            <div className="board-row">
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare /> 
                <WhiteSquare />  
            </div>
            <div className="board-row">
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />   
            </div>
            <div className="board-row">
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare /> 
                <WhiteSquare />  
            </div>
            <div className="board-row">
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />   
            </div>
            <div className="board-row">
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare />
                <WhiteSquare />
                <BlackSquare /> 
                <WhiteSquare />  
            </div>
        </>
    );
}
