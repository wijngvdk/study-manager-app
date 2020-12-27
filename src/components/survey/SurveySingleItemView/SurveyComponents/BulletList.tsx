import React from 'react';
import { isItemGroupComponent, ItemComponent, ItemGroupComponent } from 'survey-engine/lib/data_types/survey-item-component';
import TextViewComponent from './TextViewComponent';

interface BulletListProps {
    compDef: ItemComponent;
    languageCode: string;
}

const BulletList: React.FC<BulletListProps> = (props) => {

    const isGroup = isItemGroupComponent(props.compDef);
    if (!isGroup) {
        console.warn('item component should be a group when using bullet list');
        console.log(props.compDef);
        return null;
    }

    return (
        <ul className="m-0 ms-n2">
            {(props.compDef as ItemGroupComponent).items.map(
                (item: ItemComponent, index: number) => {
                    return <TextViewComponent
                        key={index.toFixed()}
                        languageCode={props.languageCode}
                        compDef={item}
                    />
                }
            )}
        </ul>
    );
};

export default BulletList;
