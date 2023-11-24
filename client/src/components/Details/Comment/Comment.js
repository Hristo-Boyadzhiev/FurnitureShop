export default function Comment({
    comment,
    email
}) {

    return (

        <div className="media">
            <div className="media-body">
                <h4 className="media-heading">{email}</h4>
                <p>{comment}</p>
                {/* <ul className="list-unstyled list-inline media-detail pull-left">
                             <li><i className="fa fa-calendar"></i>27/02/2014</li>
                             <li><i className="fa fa-thumbs-up"></i>13</li>
                         </ul>
                         <ul className="list-unstyled list-inline media-detail pull-right">
                             <li className=""><Link to={""}>Like</Link></li>
                             <li className=""><Link to={""}>Reply</Link></li>
                         </ul> */}
            </div>
        </div>
    )
}