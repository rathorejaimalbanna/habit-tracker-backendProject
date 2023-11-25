// middleware to make sure input is correct

export default function required(req,res,next)
{
    var value = req.body.habit;
    if(!value)
    {
        res.redirect('/required')
        return
    }
    next()
}