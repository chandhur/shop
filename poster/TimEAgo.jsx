import { parseISO,formatDistanceToNow } from "date-fns"

export default  function TimeAgo({timeStamp})
{
    let timeAgo= "";
    if(timeStamp)
    {
        const date =parseISO(timeStamp);
        const timePeriod=formatDistanceToNow(date)
        timeAgo=`${timePeriod} ago`
    }
    return (<>
        <i className="ml-[250px]">{timeAgo}</i>

    </>)
}
