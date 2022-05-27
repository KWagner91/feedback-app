import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is a React App to leave feedback for a service or product</p>
            <p><small>
                Version 1.0.0 <br />
                <span>&#169;</span> K.Bonev-Wagner
            </small></p>

            <Link to={"/"}>
                Back to home
            </Link>
        </div>
    </Card>
  )
}

export default AboutPage