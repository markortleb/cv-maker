import uniqid from 'uniqid';


export default function initEmpty() {
    return {
        personalInfo: {
            firstName: '',
            lastName: '',
            title: '',
            location: '',
            phoneNumber: '',
            email: '',
            website: '',
            description: ''
        },
        experience: [
            {
                id: uniqid(),
                position: '',
                company: '',
                city: '',
                from: '',
                to: '',
                description: ''
            }
        ],
        education: [
            {
                id: uniqid(),
                university: '',
                location: '',
                degree: '',
                subject: '',
                from: '',
                to: ''
            }
        ]
    };
};
