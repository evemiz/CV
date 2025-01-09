import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function FirstStep({ name, setName, links, setLinks, t}) {
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
                <label className="form-label" htmlFor="name">{t('whats_your_full_name')}</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('full_name_placeholder')}
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <select 
                    className="form-select mt-3" 
                    value={selectValue}
                    onChange={handleSelectChange}
                >
                    <option defaultValue>{t('choose_field')}</option>
                    {filteredFields.map((field) => (
                        <option key={field} value={field}>
                            {t(field.toLowerCase())}
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
                                        {t(field.toLowerCase())}
                                    </label>
                                </div>
                                <div className="col-5">
                                    <input
                                        type="text"
                                        value={links[field] || ""}
                                        onChange={(e) => handleInputChange(e, field)}
                                        placeholder={t('enter_your', { field: t(field.toLowerCase()) })}
                                        className="form-control"
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