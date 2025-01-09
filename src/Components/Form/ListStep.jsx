import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function ListStep({items, setItems, text, t}) {
    const [newItem, setNewItem] = useState({item: "", level: ""});

    function addItem() {
        if (newItem.item.trim() === "") {
            return;
        }
        const toAdd = { 
            item: newItem.item.trim(), 
            level: newItem.level.trim() === "" ? "" : newItem.level 
        };
        setItems((prev) => [...prev, toAdd]);
        setNewItem({ item: "", level: "" });
    }

    function handleRemoveField(toRemove) {
        setItems(items.filter(i => i !== toRemove));
    }
    return(
        <>
        <h5>{text.title}</h5>
            <div className="form-group">
                <label className="form-label" htmlFor="name">{text.header}</label>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            value={newItem.item}
                            onChange={(e) => 
                                setNewItem((prev) => ({
                                    ...prev,
                                    item: e.target.value,
                                }))
                            }                            
                            placeholder={text.placeholder}
                            className="form-control"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    addItem();
                                    e.preventDefault();
                                }
                            }}
                        />
                    </div>

                    {text.haveSelect && (
                        <div className="col">
                            <select
                                value={newItem.level}
                                onChange={(e) => 
                                    setNewItem((prev) => ({
                                        ...prev,
                                        level: e.target.value,
                                    }))
                                }
                                className="form-select" 
                            >
                                <option value="">{t('languageProficiency.placeholder')}</option>
                                <option value={t('languageProficiency.native')}>{t('languageProficiency.native')}</option>
                                <option value={t('languageProficiency.fluent')}>{t('languageProficiency.fluent')}</option>
                                <option value={t('languageProficiency.professional')}>{t('languageProficiency.professional')}</option>
                                <option value={t('languageProficiency.intermediate')}>{t('languageProficiency.intermediate')}</option>
                                <option value={t('languageProficiency.basic')}>{t('languageProficiency.basic')}</option>
                            </select>
                        </div>
                    )}

                    <div className="col-1">
                    <IconButton onClick={addItem}>
                        <AddIcon />
                    </IconButton>
                    </div>
                </div>
            </div>
            <div className="form-group skills-list">
                {items && items.map((i, index) => (
                    <div 
                        className="row g-3 d-flex justify-content-center align-items-center mt-1 skills-list-item" 
                        key={index}
                    >                            
                        <div className="col-11 my-2 px-4">
                                <label className="col-form-label">
                                    {i.item} {i.level && (` - ${i.level}`)}
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
            </div>
        </>
    );
};

export default ListStep;