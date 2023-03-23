

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
