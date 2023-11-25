
// define app model
export default class appModel{
    constructor(habit,id)
    {
        this.habit = habit,
        this.id = id
    }
    static getHabits()
    {
        return habits
    };
    static addHabit(habit)
    {   var id = habits.length + 1
        var newHabit = new appModel(habit,id)
        habits.push(newHabit)
    };
    static deleteHabit(id)
    {
        var habitIndex = habits.findIndex(u=>u.id==id);
        if(habitIndex)
        {
            
            habits.splice(habitIndex,1)
        }
        else{
            
            habits.splice(0,1);
            return habitIndex
        }
        return habitIndex;
    };
    static updateHabit(updatedHabit)
    {
        var newId = habits.length-1;
        habits[newId].habit = updatedHabit;
        return
    }
};

var habits = [
    
];

