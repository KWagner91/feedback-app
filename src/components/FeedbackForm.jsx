import React, {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState("default text")
    const [rating, setRating] = useState(10)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState("")

    const handleTextChange = (e) => {
        if (text === "") {
            setbtnDisabled(true);
            setMessage(null);
        }
        else if (text !== "" && text.trim().length <= 10) {
            setbtnDisabled(true);
            setMessage("Text must be at least 10 characters long")
        }
        else {
            setbtnDisabled(false);
            setMessage(null)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback);
            setText('');
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our service?</h2>
            <RatingSelect select={setRating} selected={rating} />
            <div className="input-group">
                <input type="text" onChange={handleTextChange} placeholder='Write a review' value={text} />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm