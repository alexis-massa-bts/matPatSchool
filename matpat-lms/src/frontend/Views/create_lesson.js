import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super();

    this.onChangeLessonName = this.onChangeLessonName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      lessonName:'',
      description: '',
      date: new Date(),
    }
  }

  onChangeLessonName(e) {
    this.setState({
      lessonName: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const lesson = {
        lessonName: this.state.lessonName,
        description: this.state.description,
        duration: this.state.duration,
        date: this.state.date
    }

    console.log(lesson);

    axios.post('http://localhost:3001/lesson/add', lesson)
      .then(res => console.log(res.data));

    window.location = '/courses';
  }

  render() {
    return (
    <div className="flex items-center flex-col justify-center h-screen my-10">
      <h3 className="text-4xl text-white font-bold">Create New Lesson</h3>
      <form className="w-6/12 m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl" onSubmit={this.onSubmit}>
        <div className="form-group  gap-4 mb-4 flex"> 
          <label className="text-right w-1/3">Nom de la lesson: </label>
          <input  type="text"
              required
              className="form-control w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              value={this.state.lessonName}
              onChange={this.onChangeLessonName}
              />
        </div>
        <div className="form-group gap-4 mb-4 flex"> 
          <label className="text-right w-1/3">Description: </label>
          <textarea
              required
              className="form-control w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group  gap-4 mb-4 flex">
          <label className="text-right w-1/3">Date: </label>
          <div>
            <DatePicker
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
                selected={this.state.date}
                onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group grid">
          <input type="submit" value="Create Exercise" className="uppercase font-bold px-4 py-1 text-gray-800 tracking-wider bg-white-900 hover:bg-gray-500 rounded m-auto" />
        </div>
      </form>
    </div>
    )
  }
}