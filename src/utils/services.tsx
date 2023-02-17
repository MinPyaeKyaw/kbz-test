interface ServiceInterface {
    id: number;
    name: string;
    icon: string;
}

export const services:ServiceInterface[] = [
    {id: 1, name: 'Consulting', icon: '/images/consulting.png'},
    {id: 2, name: 'Licensing', icon: '/images/Licensing.png'},
    {id: 3, name: 'Training', icon: '/images/Training.png'},
    {id: 4, name: 'Correspondent Account', icon: '/images/Correspondent.png'},
    {id: 5, name: 'Independent AML/BSA Reviews', icon: '/images/Independent.png'},
    {id: 6, name: 'Look Back Reviews', icon: '/images/Reviews.png'},
]