type LocalCityType = {
    title: string,
    country: string
}
type AdressType = {
    street: string
    city: LocalCityType
}
type TechnologiesType={
    id: number,
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address:AdressType
    technologies:Array <TechnologiesType>
}
export const student: StudentType = {
    id:1,
    name: 'Iuliia',
    age: 32,
    isActive: false,
    address: {
        street: 'Kuznecova',
        city: {
            title: 'Yaroslavl',
            country: 'Russia'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        },
    ]
};
console.log(student.technologies[2].title);