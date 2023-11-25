// import required model
import required from "../../middlewares/habit.required.js";
import appModel from "../model/app.modle.js";

// define controller
export default class appController{
    getAll(req,res)
    {
        const habit_list = appModel.getHabits();
        return res.render('habit_tracker',{habit_list,require_habit:null})
    };
    required(req,res)
    {
        const habit_list = appModel.getHabits();
        var require_habit = 'Add a habit first !!'
        return res.render('habit_tracker',{habit_list,require_habit})
    };
    start(req,res)
    {
        const result = appModel.getHabits();
        return res.render('startPage',{})
    };
    add(req,res)
    {
        var habit = req.body.habit;
        appModel.addHabit(habit);
        return res.redirect('/app')
    };
    delete(req,res)
    {   var id = req.params.id
        var deleted = appModel.deleteHabit(id);
        return res.redirect('back')
    };
    update(req,res)
    {
        var updatedHabit = req.body.updatedHabit;
        appModel.updateHabit(updatedHabit);
        return res.redirect('back')
    }
}