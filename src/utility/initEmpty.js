

export default function initEmpty() {
    return {
        personalInfo: {
            firstName: '',
            lastName: '',
            title: '',
            photo: '',
            address: '',
            phoneNumber: '',
            email: '',
            description: ''
        },
        experience: [
            {
                position: '',
                company: '',
                city: '',
                from: '',
                to: ''
            }
        ],
        education: [
            {
                university: '',
                city: '',
                degree: '',
                subject: '',
                from: '',
                to: ''
            }
        ]
    };
};
