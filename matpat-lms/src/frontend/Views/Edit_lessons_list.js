import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Lesson = props => (
  <tr>
    <td>{props.lesson.lessonName}</td>
    <td>{props.lesson.description}</td>
    <td>{props.lesson.date}</td>
    <td>
      <Link to={"/edit_lessons/"+props.lesson._id}>edit</Link> | <a href="#" onClick={() => { props.deleteLesson(props.lesson._id) }}>delete</a>
    </td>
  </tr>
)

class EditLessonsList extends Component {
    constructor(props) {
        super();
    
        this.deleteLesson = this.deleteLesson.bind(this)
    
        this.state = {lessons: []};
      }
    
      componentDidMount() {
        axios.get('http://localhost:3001/lesson')
          .then(response => {
            this.setState({ lessons: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      deleteLesson(id) {
        axios.delete('http://localhost:3001/lesson'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          lessons: this.state.lessons.filter(el => el._id !== id)
        })
      }
    
      lessonList() {
        return this.state.lessons.map(currentlesson => {
          return <Lesson lesson={currentlesson} deleteLesson={this.deleteLesson} key={currentlesson._id}/>;
        })
      }

    render() { 
        return ( 
            <div>
            <h3>Logged lessons</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>lessonName</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.lessonList() }
              </tbody>
            </table>
          </div>
         );
    }
}
 
export default EditLessonsList;