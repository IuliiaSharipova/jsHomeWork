import {student, StudentType} from '../02/02';
import {CityType, GovernmentBuildingType, HouseType} from '../02/02_02';

const sum = (a: number, b: number) => {
    return a + b;
};
export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
};
export const makeStudentActive = (st: StudentType) => {
    st.isActive = true;
};

export const doesStudentLiveIn = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName;
};

//01,02
export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
};
//03
export const repairHouse = (house: HouseType) => {
    house.repaired = true;
};
//04
export const toFireStaff = (building: GovernmentBuildingType, staff: number) => {
    building.staffCount -= staff;
};
//05
export const toHireStaff = (building: GovernmentBuildingType, staff: number) => {
    building.staffCount += staff;
};
//06
export const createMessage= (city: CityType)=>{
    return `Hello ${city.title} citizens`
}