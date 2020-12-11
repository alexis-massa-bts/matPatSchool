import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BsPencilSquare , BsTrash } from "react-icons/bs";

const Lesson = props => (
  <tr>
    <td className="border px-8 py-4">{props.lesson.lessonName}</td>
    <td className="border px-8 py-4">{props.lesson.description}</td>
    <td className="border px-8 py-4">{props.lesson.date}</td>
    <td className="border px-8 py-4 flex">
      <Link className="text-blue-500 mr-4" to={"/edit_lessons/"+props.lesson._id}><BsPencilSquare/></Link> | <a className="text-red-600 ml-4" href="#" onClick={() => { props.deleteLesson(props.lesson._id) }}><BsTrash/></a>
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
        axios.get('http://localhost:3001/lesson/')
          .then(response => {
            this.setState({ lessons: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      deleteLesson(id) {

        axios.delete('http://localhost:3001/lesson/'+id)
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
            <div className="flex items-center flex-col justify-center h-screen my-10">
            <h3 className="text-4xl text-white font-bold mb-4">Listes des Lessons</h3>
            <table className="table shadow-lg bg-white">
              <thead className="thead-light">
                <tr>
                  <th className="bg-white-300 border text-left px-8 py-4">lessonName</th>
                  <th className="bg-white-300 border text-left px-8 py-4">Description</th>
                  <th className="bg-white-300 border text-left px-8 py-4">Date</th>
                  <th className="bg-white-300 border text-left px-8 py-4">Actions</th>
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