import { data } from "../../data";
import Item from "../Item/Item";

import './ListItesm.scss';

const ListItems = () => {

    return (
        <div className="checklist-list">
            {data.map((item, inx) => (
                <Item key={inx} {...item} />
            ))}
        </div>
    )
}

export default ListItems;
