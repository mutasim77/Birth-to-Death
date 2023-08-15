import { useEffect, useState } from "react";
import { IData } from "../../types/IData";
import cn from 'classnames';
import { createDefaultValuesOnStorage } from '../../utils';
import './Item.scss';

const Item = ({ phase, milestones }: IData) => {
    const [checkedStates, setCheckedStates] = useState<boolean[]>(new Array(milestones.length).fill(false));

    const onHandleCheckBox = (index: number, item: string) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);

        localStorage.setItem(item, JSON.stringify(newCheckedStates[index]));
    };

    useEffect(() => {
        createDefaultValuesOnStorage();
    }, [])

    return (
        <div className="checklist-item">
            <h3 className="list-phase">{phase}</h3>
            <ul className="milestone-list">
                {milestones.map((item, inx) => {
                    return (
                        <li key={inx} className={cn('list-item', { achived: checkedStates[inx] })}>
                            <input type="checkbox"
                                onClick={() => onHandleCheckBox(inx, item)}
                            />
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Item;
