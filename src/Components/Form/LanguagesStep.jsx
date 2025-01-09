import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function LanguagesStep({languages, setLanguages}) {
    const [newLang, setNewLang] = useState({lang: "", level: ""});

    function addLang() {
        if (newLang.lang.trim() === "") {
            return;
        }
        const langToAdd = { ...newLang, level: newLang.level.trim() === "" ? "" : newLang.level };
        setLanguages((prevLanguages) => [...prevLanguages, langToAdd]);
        setNewLang({ lang: "", level: "" });
    }

    function handleRemoveField(langToRemove) {
        setLanguages(languages.filter(lang => lang !== langToRemove));
    }
    return(
        <>
            <div className="form-group">
                <label className="form-label" htmlFor="name">List the languages you know, along with your proficiency level.</label>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            value={newLang.lang}
                            onChange={(e) => 
                                setNewLang((prevLang) => ({
                                    ...prevLang,
                                    lang: e.target.value,
                                }))
                            }                            
                            placeholder="e.g., English"
                            className="form-control"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    addLang();
                                    e.preventDefault();
                                }
                            }}
                        />
                    </div>
                    <div className="col">
                        <select
                            value={newLang.level}
                            onChange={(e) => 
                                setNewLang((prevLang) => ({
                                    ...prevLang,
                                    level: e.target.value,
                                }))
                            }
                            className="form-select" 
                        >
                            <option value="">Select Proficiency Level</option>
                            <option value="Native">Native</option>
                            <option value="Fluent">Fluent</option>
                            <option value="Professional">Professional</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Basic">Basic</option>
                        </select>
                    </div>
                    <div className="col-1">
                    <IconButton onClick={addLang}>
                        <AddIcon />
                    </IconButton>
                    </div>
                </div>
            </div>
            <div className="form-group skills-list">
                {languages && languages.map((i, index) => (
                    <div 
                        className="row g-3 d-flex justify-content-center align-items-center mt-1 skills-list-item" 
                        key={index}
                    >                            
                        <div className="col-11 my-2 px-4">
                                <label className="col-form-label">
                                    {i.lang} {i.level && (` - ${i.level}`)}
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

export default LanguagesStep;