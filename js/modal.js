 const { useState } = React
function App() {
 const[open, setOpen] = useState(false)
      return (
		<div className="center">
		<button onClick={() => setOpen(true)}>Open Modal</button>
		<div className={open ? 'modal':'close'}>
		<div className="modal-bg">
		<p className="modal-content">Hi! I am a modal</p>
		<button onClick={() => setOpen(false)}>Ok</button>
		</div>
		</div>
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('mydiv'))  
