
import { useRef, useState } from "react";

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [data, setData] = useState([]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = {
      email: enteredEmail,
      text: enteredFeedback
    }

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => setData(res))

  }

  const loadFeedbackHandler = () => {

    fetch('/api/feedback')
    .then(res => res.json())
    .then(res => setData(res.feedback))
   
  }

  return (
    <>
      <main>
        <h1>The Home Page</h1>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="email">Your Email Address</label>
            <input type="email" id="email" ref={emailInputRef}/>
          </div>
          <div>
            <label htmlFor="feedback">Your Feedback</label>
            <textarea rows={5} id="feedback" ref={feedbackInputRef}/>
          </div>
          <button>Send Feedback</button>
        </form>
        <hr />
        <button onClick={loadFeedbackHandler}>Load Feedback</button>
       <ul>
       {
          data.map(res => <li key={res.id}> {res.email}</li>)
        }
       </ul>
      </main>
    </>
  )
}
