import React, { Component } from 'react'
import axios from 'axios'

export default class lessonsPage extends Component {

    constructor(props) {
        super();
        this.state = {

            lessons: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/lesson')
            .then(response => {
                this.setState({ lessons: response.data })
                console.log(this.state)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else {

            return (
                <div className="flex-grow">
                    <h1 className="flex justify-center text-white text-3xl mb-6">Mes Cours</h1>
                    {this.state.lessons.map(currentlesson => (

                        <div className="bg-primaryColor h-full py-10">
                            <div className='space-x-10 p-3 text-gray-700 md:mx-20 xl:mx-48 rounded overflow-hidden shadow-lg bg-white sm:direction-column md:direction-column md:flex xl:flex 
                                mb-6 cursor-pointer'
                            >
                                <img className="w-full max-w-sm all:mx-auto"
                                    src=""
                                    alt="">
                                </img>

                                <div className="flex flex-col justify-between">
                                    <span className="font-bold text-xl" key={currentlesson.lessonName} >{currentlesson.lessonName}</span>
                                    <p key={currentlesson.description}>
                                        {currentlesson.description}
                                    </p>
                                    <span className="font-bold" key={currentlesson.date}>{currentlesson.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}