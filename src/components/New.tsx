import { ReactElement } from "react";

export default function New(props: {children: ReactElement}) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
}
