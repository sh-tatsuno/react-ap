import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [submitted, changeStatus] = React.useState(false)
  const content = submitted ? (
    <p>
      Thanks for joining in! <br />
      When we're ready to wow you, <br />
      You'll get an email.
    </p>
  ) : (
    <form>
      <p>
        A social network, <br />
        Where you are the customer. <br />
        Ad free. Launching soon.
      </p>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <br />
      <label>
        Email:
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit" onClick={() => changeStatus(true)}>
        I'll vouch for that
      </button>
    </form>
  )

  return <div className="App">{content}</div>
}

export default App;
