import React from 'react'

const About = (props) => {
  return (
    <div className='container my-3' style={{color : props.theme === 'light' ? 'black' : 'white'}}>
        <h3>Text Manipulator : Your Ultimate Text Transformation Tool</h3>
        <p className='my-3'>
        At TextManipulator, we're passionate about the power of language and the magic that happens when words are manipulated creatively. Our web application is designed to be your ultimate toolkit for transforming, tweaking, and refining text to suit your needs.
        </p>
        <p>
        Whether you're a writer looking to polish your prose, a student aiming for that perfect essay, or a marketer seeking to craft compelling content, TextManipulator has you covered. With a user-friendly interface and a wide range of tools, we empower you to effortlessly manipulate text in ways that enhance clarity, creativity, and impact.
        </p>
        <p>
        Join us on this journey as we explore the endless possibilities of text manipulation. Whether you're a seasoned wordsmith or just beginning to discover the art of crafting language, TextManipulator is here to inspire, empower, and elevate your writing experience.
        </p>
        <p>
        Transform your text. Transform your world. Welcome to TextManipulator.
        </p>
    </div>
  )
}

export default About