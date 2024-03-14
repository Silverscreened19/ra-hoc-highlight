import { FC } from "react";
import { IData } from "./List";
import Popular from "./Popular";
import New from "./New";

export default function Wrap(Component: FC<IData>) {
  return function (props: IData) {
    const { views } = props;

    if (views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }

    if (views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }

    return <Component {...props} />;
  };
}
