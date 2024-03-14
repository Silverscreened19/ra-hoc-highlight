import { IData } from "./List";
import Wrap from "./Wrapper";

function Video(props: IData) {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}


const WrappedVideo = Wrap(Video)

export default WrappedVideo;
