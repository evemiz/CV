import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

function NextSteps({items, setItems, secName, t}) {
    const [newItem, setNewItem] = useState({title: "", year: "", content: ""});
    const [open, setOpen] = useState(true);
    const [editIndex, setEditIndex] = useState(null);

    function addItem() {
        if (newItem.title === "") {
            return;
        }

        if (editIndex !== null) {
            setItems(prevItems => {
                const updatedArr = [...prevItems.arr];
                updatedArr[editIndex] = newItem;
                return { ...prevItems, arr: updatedArr };
            });
        } else {
            setItems(prevItems => ({
                ...prevItems,
                arr: [...prevItems.arr, newItem]
            }));
        }

        setNewItem({ title: "", year: "", content: "" });
        setOpen(false);
        setEditIndex(null);
    }

    function handleRemoveField(toRemove) {
        setItems(prevItem => {
            const updatedArr = prevItem.arr.filter(field => field !== toRemove);
            if (updatedArr.length === 0) {
                setOpen(true);
            }
            return {
                ...prevItem,
                arr: updatedArr
            };
        });
    }

    function handleEditField(index) {
        setNewItem(items.arr[index]);
        setOpen(true);
        setEditIndex(index); 
    }

    function handleReturn() {
        setNewItem({ title: "", year: "", content: "" });
        setOpen(false);
        setEditIndex(null);
    }

    
    return (
        <>
            <div className="form-group scrolling">
                <label className="form-label mb-0">
                    <h5>{secName.header}</h5>
                    <p>{secName.description}</p>
                </label>

                <label htmlFor="title">{t('section_title')}</label>
                <input
                    type="text"
                    name="title"
                    value={items.title}
                    onChange={(e) => setItems(prevItem => ({
                        ...prevItem,
                        title: e.target.value
                    }))}
                    placeholder={secName.titlePlaceholder}
                    className="form-control mb-3"
                />

                {items.arr.length > 0 && (
                    <>
                            {items.arr.map((i, index) => (
                                <div className="row skills-list-item my-1">
                                <div className="col-10 my-2 px-4">
                                    <label className="col-form-label">
                                        {i.title}
                                    </label>
                                </div>
                                <div className="col-auto my-2">
                                    <span className="form-text">
                                        <IconButton onClick={() => handleRemoveField(i)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </span>
                                </div>
                                <div className="col-auto my-2">
                                    <span className="form-text">
                                        <IconButton>
                                            <CreateIcon onClick={() => handleEditField(index)}/>
                                        </IconButton>
                                    </span>
                                </div>
                                </div>

                            ))}

                        {!open && (
                            <button onClick={() => setOpen(true)} className="btn btn-outline-secondary mt-1">
                            {t('add')}
                        </button>
                        )}
                    </>
                    
                )}
                {open &&(
                    <>
                        <label className="mt-4" htmlFor="title">{secName.subTitle}</label>
                        <input
                            type="text"
                            name="title"
                            value={newItem.title}
                            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                            placeholder={secName.subTitlePlaceholder}
                            className="form-control mb-3"
                        />

                        <label htmlFor="time">{t('time_period_title')}</label>
                        <input
                            type="text"
                            name="time"
                            value={newItem.year}
                            onChange={(e) => setNewItem({ ...newItem, year: e.target.value })}
                            placeholder={t('time_example')}
                            className="form-control mb-3"
                        />

                        <label htmlFor="content">{t('content_title')}</label>
                        <textarea
                            name="content"
                            value={newItem.content}
                            onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                            placeholder={secName.contentPlaceholder}
                            className="form-control"
                            rows="5"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setNewItem({ ...newItem, content: newItem.content + '\n' });
                                    e.preventDefault();
                                }
                            }}
                        />

                        <div className="mt-2">
                            <button onClick={addItem} className="btn btn-outline-secondary">
                                {editIndex !== null ? t('update') : t('add')}
                            </button>
                            {items.arr.length > 0 && 
                                <button onClick={handleReturn} className="btn btn-outline-danger mx-3">
                                    {t('return')}
                                </button>
                            }
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default NextSteps;