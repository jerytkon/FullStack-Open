import React from 'react'

const Content = (props) => {
  return (
    <div>
      <ul>
        {props.course.parts.map(part => 
          <Part key={part.name} name={part.name} exercises={part.exercises} part={part} />
        )}                                                                                                                                    
      <li> <Total course={props.course} /> </li>
      </ul>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = ({ part }) => {
  return (
    <li>{part.name} {part.exercises}</li>
  )
}

const Total = (props) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const TotalList = props.course.parts.map(part => part.exercises)
  console.log(props.exercises)
  console.log(TotalList)
  return (
      <p>Total number {TotalList.reduce(reducer)} exercises</p>
  )
}

const Course = (props) => {

  return (
    <div>
      <ul>
      <Header course={props.course.name} />
      <Content course={props.course} />
      </ul>
    </div>
  )
}

export default Course