

export default function initExample() {
    return {
        personalInfo: {
            firstName: 'John',
            lastName: 'Doe',
            title: 'Data Engineer',
            photo: '',
            address: '11122 Main Drive, Denver, CO 82138',
            phoneNumber: '720-111-1111',
            email: 'johndoe127@gmail.com',
            description: 'I am a Data Engineer looking for a new challenge!'
        },
        experience: [
            {
                position: 'Data Engineer',
                company: 'Some Company',
                city: 'Denver, CO',
                from: '2020-02',
                to: 'Present'
            }
        ],
        education: [
            {
                university: 'University of Somewhere',
                city: 'Denver, CO',
                degree: 'BS',
                subject: 'Computer Science',
                from: '2010',
                to: '2014'
            }
        ]
    };
};
