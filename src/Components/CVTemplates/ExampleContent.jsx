export const cvDataEng = {
    resumeRef: null,
    name: "John Doe",
    links: {
        Linkedin: "https://www.linkedin.com/in/johndoe",
        Github: "https://github.com/johndoe",
        Instagram: "https://www.johndoe.com"
    },
    skills: [
        "JavaScript", 
        "React", 
        "Node.js", 
        "Python", 
        "SQL", 
        "HTML5", 
        "CSS3"
    ],
    about: {
        title: "About Me",
        content: "I am a passionate software engineer with 5+ years of experience in web development. I love building scalable and efficient applications, and I am always eager to learn new technologies."
    },
    experience: {
        title: "Work Experience",
        arr: [
            {
                title: "Software Engineer at XYZ Corp.",
                year: "2020 - Present",
                content: "Developed and maintained web applications using React and Node.js. Led a team of 4 developers to successfully launch a product that improved customer retention by 20%."
            },
            {
                title: "Junior Developer at ABC Inc.",
                year: "2018 - 2020",
                content: "Worked on various front-end and back-end projects using JavaScript and Python. Collaborated with cross-functional teams to ensure timely delivery of software."
            }
        ]
    },
    education: {
        title: "Education",
        arr: [
            {
                title: "B.Sc. in Computer Science",
                year: "2014 - 2018",
                content: "Graduated with honors from XYZ University. Focused on software engineering, data structures, and algorithms."
            }
        ]
    },
    volunteering: {
        title: "Volunteer Experience",
        arr: [
            {
                title: "Web Developer for Non-Profit",
                year: "2019 - 2021",
                content: "Built a website for a local charity that helped increase their donations by 30%."
            }
        ]
    },
    projects: {
        title: "Projects",
        arr: [
            {
                title: "Personal Portfolio Website",
                year: "2021",
                content: "Created a responsive portfolio website using React, showcasing my skills, projects, and achievements."
            },
            {
                title: "Task Management App",
                year: "2020",
                content: "Developed a task management web application using Node.js and MongoDB to help users manage their daily tasks."
            }
        ]
    },
    hobbies: [
        { item: "Photography" },
        { item: "Traveling" },
        { item: "Cycling" }
    ],
    languages: [
        { item: "English", level: "Fluent" },
        { item: "Spanish", level: "Intermediate" }
    ],
    stepNum: 10,
    t: (key) => {
        const translations = {
            'languagesText_title': 'Languages'
        };
        return translations[key];
    }
};

export const cvDataHeb = {
    resumeRef: null,
    name: "יוחנן דואן",
    links: {
        Linkedin: "https://www.linkedin.com/in/johndoe",
        Github: "https://github.com/johndoe",
        Instagram: "https://www.johndoe.com"
    },
    skills: [
        "JavaScript", 
        "React", 
        "Node.js", 
        "Python", 
        "SQL", 
        "HTML5", 
        "CSS3"
    ],
    about: {
        title: "עליי",
        content: "אני מהנדס תוכנה עם מעל 5 שנים של ניסיון בפיתוח ווב. אני אוהב לבנות אפליקציות סקלאביליות ויעילות, ותמיד פתוח ללמוד טכנולוגיות חדשות."
    },
    experience: {
        title: "ניסיון עבודה",
        arr: [
            {
                title: "מהנדס תוכנה ב-XYZ Corp.",
                year: "2020 - הווה",
                content: "פיתחתי ותחזקתי אפליקציות ווב באמצעות React ו-Node.js. ניהלתי צוות של 4 מפתחים והשקנו בהצלחה מוצר שהגדיל את שימור הלקוחות ב-20%."
            },
            {
                title: "מפתח ג'וניור ב-ABC Inc.",
                year: "2018 - 2020",
                content: "עבדתי על פרויקטים שונים ב-Frontend ו-Backend בעזרת JavaScript ו-Python. שיתפתי פעולה עם צוותים שונים על מנת להבטיח אספקה בזמן של התוכנה."
            }
        ]
    },
    education: {
        title: "השכלה",
        arr: [
            {
                title: "B.Sc. במדעי המחשב",
                year: "2014 - 2018",
                content: "סיימתי עם תעודת הצטיינות מאוניברסיטת XYZ. ההתמחות שלי הייתה בהנדסת תוכנה, מבני נתונים ואלגוריתמים."
            }
        ]
    },
    volunteering: {
        title: "התנדבות",
        arr: [
            {
                title: "מפתח ווב בעמותה",
                year: "2019 - 2021",
                content: "בניית אתר אינטרנט לעמותה מקומית, דבר שסייע להגדיל את התרומות ב-30%."
            }
        ]
    },
    projects: {
        title: "פרויקטים",
        arr: [
            {
                title: "אתר תיק עבודות אישי",
                year: "2021",
                content: "יצרתי אתר תיק עבודות רספונסיבי באמצעות React, שבו מוצגים הכישורים, הפרויקטים וההישגים שלי."
            },
            {
                title: "אפליקציית ניהול משימות",
                year: "2020",
                content: "פיתחתי אפליקציה לניהול משימות באמצעות Node.js ו-MongoDB, שעוזרת למשתמשים לנהל את המשימות היומיות שלהם."
            }
        ]
    },
    hobbies: [
        { item: "צילום" },
        { item: "טיולים" },
        { item: "רכיבה על אופניים" }
    ],
    languages: [
        { item: "עברית", level: "שפת אם" },
        { item: "אנגלית", level: "רמה גבוהה" },
        { item: "ספרדית", level: "רמה בינונית" }
    ],
    stepNum: 10,
    t: (key) => {
        const translations = {
            'languagesText_title': 'שפות'
        };
        return translations[key];
    }
};
