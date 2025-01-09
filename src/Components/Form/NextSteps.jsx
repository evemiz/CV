import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function NextSteps({items, setItems, secName}) {
    const [newItem, setNewItem] = useState({title: "", year: "", content: ""});
    const [open, setOpen] = useState(true)

    function addItem() {
        if(newItem.title === ""){
            return;
        }
        setItems(prevItem => ({
            ...prevItem,
            arr: [...prevItem.arr, newItem]
        }));
        setNewItem({ title: "", year: "", content: "" });
        setOpen(false);
    }

    function handleRemoveField(toRemove) {
        setItems(prevItem => ({
            ...prevItem,
            arr: prevItem.arr.filter(job => job !== toRemove)
        }));
    }

    function hanleReturn() {
        setNewItem({ title: "", year: "", content: "" });
        setOpen(false);
    }

    
    return (
        <>
            <div className="form-group scrolling">
                <label className="form-label mb-0">
                    <h5>{secName.header}</h5>
                    <p>{secName.description}</p>
                </label>

                <label htmlFor="title">Section Title</label>
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
                                <div className="col-11 my-2 px-4">
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
                                </div>

                            ))}

                        {!open && (
                            <button onClick={() => setOpen(true)} className="btn btn-outline-secondary mt-1">
                            Add
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

                        <label htmlFor="time">Time Period</label>
                        <input
                            type="text"
                            name="time"
                            value={newItem.year}
                            onChange={(e) => setNewItem({ ...newItem, year: e.target.value })}
                            placeholder="e.g., 2020-2022"
                            className="form-control mb-3"
                        />

                        <label htmlFor="content">Content</label>
                        <textarea
                            name="content"
                            value={newItem.content}
                            onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                            placeholder={secName.contentPlaceholder}
                            className="form-control"
                            rows="5"
                        />

                        <div className="mt-2">
                            <button onClick={addItem} className="btn btn-outline-secondary">
                                Add 
                            </button>
                            <button onClick={hanleReturn} className="btn btn-outline-danger ms-3">
                                Return
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default NextSteps;