import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function SecondStep({ skills, setSkills}) {
    const [newSkill, setNewSkill] = useState("");

    function addSkill() {
        setSkills([...skills, newSkill]);
        setNewSkill("");
    }

    function handleRemoveField(skillToRemove) {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    }
    return(
        <>
            <div className="form-group">
                <label className="form-label" htmlFor="name">What Are Your Top Skills?</label>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            placeholder="e.g., React, Python, Communication, Problem-solving"
                            className="form-control"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    addSkill();
                                    e.preventDefault();
                                }
                            }}
                        />
                    </div>
                    <div className="col-1">
                    <IconButton onClick={addSkill}>
                        <AddIcon />
                    </IconButton>
                    </div>
                </div>
            </div>
            <div className="form-group skills-list">
                {skills.map((skill, index) => (
                    <div 
                        className="row g-3 d-flex justify-content-center align-items-center mt-1 skills-list-item" 
                        key={index}
                    >                            
                        <div className="col-11 my-2 px-4">
                                <label className="col-form-label">
                                    {skill}
                                </label>
                            </div>
                            <div className="col-auto my-2">
                                <span className="form-text">
                                    <IconButton onClick={() => handleRemoveField(skill)}>
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

export default SecondStep;