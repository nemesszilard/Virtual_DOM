//natív (hogyan?)
const btn = document.createElement('button');

btn.onclick = function() {
    alert('Klikk esemény történt');
}
btn.innerHTML = "Gomb";

document.getElementById("nativ-button-container").appendChild(btn);

//React (Mi?)

const gomb = React.createElement('button', {
    onClick: function(){
        alert("Klikk esemény történt");
    },
},
"Gomb 2"
);

ReactDOM.render(gomb, document.getElementById('react-button-container'));

ReactDOM.render(
    <button
    onClick={() => {
        alert("ok");
    }}
    className="btn btn-outline-primary"
    >
        Gomb
    </button>,
    document.getElementById("button1-container")
);