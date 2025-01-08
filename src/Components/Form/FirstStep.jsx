import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function FirstStep({ name, setName, links, setLinks}) {
    const [fields, setFields] = useState(Object.keys(links));
    const [selectValue, setSelectValue] = useState("");
    
    const availableFields = [
        "Phone",
        "Email",
        "Github",
        "Linkedin",
        "Facebook",
        "Instagram"
    ];
    
    const handleInputChange = (e, field) => {
        const { value } = e.target;
        setLinks({
            ...links,
            [field]: value,
        });
    };
    
    const handleSelectChange = (e) => {
        const selectedField = e.target.value;
        if (selectedField && !fields.includes(selectedField)) {
            setFields([...fields, selectedField]);
            setSelectValue(""); // Reset select value after selecting an option
        }
    };
    
    const handleRemoveField = (field) => {
        setFields(fields.filter(f => f !== field));
        const updatedInputData = { ...links };
        delete updatedInputData[field];
        setLinks(updatedInputData);
    };

    // Filter out the selected fields from the available fields list
    const filteredFields = availableFields.filter(field => !fields.includes(field));

    return(
        <>
            <div className="form-group">
                <label className="form-label" htmlFor="name">What's Your Full Name?</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="form-control"
                    required
                />
            </div>

            <div className="form-group">
                <select 
                    className="form-select mt-3" 
                    value={selectValue}
                    onChange={handleSelectChange}
                >
                    <option defaultValue>Choose Field to Add</option>
                    {filteredFields.map((field) => (
                        <option key={field} value={field}>
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                    {fields.map((field, index) => (
                        <div key={index} className="form-group">
                            <div className="row g-3 align-items-center mt-1">
                                <div className="col-2">
                                    <label className="col-form-label">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                </div>
                                <div className="col-5">
                                    <input
                                        type="text"
                                        value={links[field] || ""}
                                        onChange={(e) => handleInputChange(e, field)}
                                        placeholder={`Enter your ${field}`}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-auto">
                                    <span className="form-text">
                                        <IconButton onClick={() => handleRemoveField(field)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    );
};

export default FirstStep;