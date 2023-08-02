export default function CharSpan(props){
    const sumClass = (classArray) => {
        var sum = "";
        classArray.forEach(element => {
            sum += element + " ";
        });
        return sum;
    }
    return (
        <span key={props.id} className={sumClass(props.class)}>{props.text}</span>
    )
}