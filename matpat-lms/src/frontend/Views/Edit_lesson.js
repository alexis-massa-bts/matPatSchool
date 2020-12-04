import React, { Component } from 'react';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);
setDefaultLocale('fr', fr);

class EditLesson extends Component {

    constructor(props) {
        super();

        this.onChangelessonName = this.onChangelessonName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            lessonName:'',
            description:'',
            date:new Date(),
            teachers: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/lesson/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                    lessonName: response.data.lessonName,
                    description: response.data.description,
                    date: new Date(response.data.date)
                })
                console.log(response.data.lessonName)
                console.log(this.state)
            })
            .catch((error) => {
                console.log(error);
            })
        
            /*axios.get('http://localhost:3001/prof')
            .then(response => {
                if (response.data.length > 0) {
                  this.setState({
                    teachers: response.data.map(teacher => teacher.lastname),
                  })
                }
              })
              .catch((error) => {
                console.log(error);
              })*/
    }

    onChangelessonName(e) {
        this.state({
            lessonName : e.taget.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
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
          date: this.state.date
        }
    
        console.log(lesson);
    
        axios.put('http://localhost:3001/lesson' + this.props.match.params.id, lesson)
          .then(res => console.log(res.data));
    
        window.location = '/';
    }

    render() { 
        const { error } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else {
        return ( 
            <div>
            <h3>Edit lessons</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>lessonName: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.lessonName}
                    onChange={this.onChangelessonName}
                    />
              </div>
              <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <input type="text" value={this.state.date}/>
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" value="Edit lessons" className="btn btn-primary" />
              </div>
            </form>
          </div>
         );
    }
}
}
 
export default EditLesson;