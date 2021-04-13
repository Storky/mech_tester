import React, { useState } from 'react';

/* eslint react/prop-types: 0 */
/* eslint react/display-name: 0 */


const Row = ({ text }) => {
    console.log("Render Row");
    return <li>{text}</li>;
};
const MemoizedRow = React.memo(Row, (prevProps, nextProps) => prevProps.text === nextProps.text);


// todo avoid display name error
const List = React.memo(({ items }) => {
    console.log("Render List");

    return (
        <ul>
            {items.map((item, index) => (
                <MemoizedRow key={item.id} text={item.text} />
            ))}
        </ul>
    );
}, (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps)
});

const SobesTaskOpt = () => {
    const [items, setItems] = useState([
        { id: 0, text: "Найти недостатки" },
        { id: 1, text: "Сделать оптимизацию" }
    ]);
    const [lastId, setLastId] = useState(1);
    const [newItem, setNewItem] = useState("");

    const handleNewItemChange = (e) => setNewItem(e.target.value);

    const handleCreateItem = () => {
        if (!newItem) return;

        const nextId = lastId + 1;
        setLastId(nextId);
        setItems([...items, { id: nextId, text: newItem }]);
    };

    console.log("Render App");

    return (
        <>
            <List items={items} />

            <input value={newItem} onChange={handleNewItemChange} />
            <button onClick={handleCreateItem}>Добавить</button>

            <hr/>
            last Id: {lastId}

        </>
    );
};

export default SobesTaskOpt;
