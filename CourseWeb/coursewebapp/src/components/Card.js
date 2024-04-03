import { toast } from 'react-toastify';
import './Card.css';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
function Card(props) {
    let chapters = props.chapters;
    let likedCourses = props.likedCourses;
    let setLikedCourse = props.setLikedCourse;
    function clickHandler() {
        if (likedCourses.includes(chapters.id)) {
            //means it is already liked
            setLikedCourse((prev) => prev.filter((cid) => (cid !== chapters.id)));
            toast.warning("Like removed");
        }
        else {
            if (likedCourses.length === 0) {
                //no element is present in likedcourses therefore we add this chapter.id
                setLikedCourse([chapters.id]);
            }
            else {
                //here likedcourses has element but not that one which we lk=iked now
                setLikedCourse((prev) => [...prev, chapters.id]);
            }

            toast.success("Liked Successfully");
        }
    }
    return (
        <div className='card'>
            <div>
                <img src={chapters.image.url} alt={chapters.image.alt} height={150} className='image'></img>
            </div>
            <div>
                <button className='iconbtn' onClick={clickHandler}>
                    {
                        likedCourses.includes(chapters.id) ? <FcLike fontSize={20}></FcLike> : <FcLikePlaceholder fontSize={20}></FcLikePlaceholder>
                    }
                </button>
            </div>
            <div>
                <p className='title'>{chapters.title}</p>
                <p className='description'>{chapters.description.length > 100 ? (chapters.description.substr(0, 100)) + "..." : (chapters.description)}</p>
            </div>
        </div>
    )
}
export default Card;