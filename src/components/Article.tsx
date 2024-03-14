import { IData } from "./List";
import Wrap from "./Wrapper";

function Article(props: IData) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
}

const WrappedArticle = Wrap(Article)

export default WrappedArticle;
