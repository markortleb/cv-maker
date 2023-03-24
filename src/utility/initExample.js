import uniqid from "uniqid";


export default function initExample() {
    return {
        personalInfo: {
            firstName: 'John',
            lastName: 'Doe',
            title: 'Data Engineer',
            location: 'Denver, CO',
            phoneNumber: '720-111-1111',
            email: 'johndoe127@gmail.com',
            website: 'github.com/johndoe',
            description: 'I am a Data Engineer looking for a new challenge!'
        },
        experience: [
            {
                id: uniqid(),
                position: 'Data Engineer',
                company: 'Some Company',
                city: 'Denver, CO',
                from: '2020-02',
                to: 'Present',
                description: 'My duties included creating ETL pipelines and modeling data.'
            },
            {
                id: uniqid(),
                position: 'Line Cook',
                company: 'McDonald\'s',
                city: 'Denver, CO',
                from: '2015-01',
                to: '2020-02',
                description: 'I cooked delicious cheeseburgers.'
            }
        ],
        education: [
            {
                id: uniqid(),
                university: 'University of Somewhere',
                location: 'Denver, CO',
                degree: 'BS',
                subject: 'Computer Science',
                from: '2010',
                to: '2014'
            }
        ]
    };
};
