import React, {Component} from 'react'
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';


class LessonCalendar extends React.Component {
render() {
    return(
        <div>
            <div className='p-3 bg-primaryColor text-white h-screen flex-grow'>
                <h1 className='font-bold text-2xl text-center'>Mes cours en directs</h1>
            </div>
            <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>;
        </div>
    ); 
}}