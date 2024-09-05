import {ComponentType, useState} from "react";
import moment from "moment";
import "moment/locale/ru";

interface DateProps {
    date: string
}


function DateTime(props: {date: string}) {
    return (
        <p className="date">{props.date}</p>
    )
}

function withDateTime(Component: ComponentType<DateProps>) {

    moment.locale('ru');
    
    return ({date}: DateProps) => {
            const timeInterval = moment(date).fromNow();
            return <Component date={timeInterval}/>
        } 
}

const StrictDate = withDateTime(DateTime);

function Video(props: {date: string, url: string | undefined}) {
    return (
        <div className="video">
            <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <StrictDate date={props.date}/>
        </div>
    )
}

function VideoList(props: { list: any[]; }) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-09-05 21:00:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-09-02 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-08-05 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-09-04 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}