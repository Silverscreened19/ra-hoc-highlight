import { ReactElement } from "react";

export default function Popular(props: {children: ReactElement}) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};
