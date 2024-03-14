import { IData } from "./List";
import Wrap from "./Wrap";

function Article(props: IData) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

export default Wrap(Article);
