import studentmodel from '../model/studentModel.js'
class studentcontroller {

    static createDoc = async (req, res) => {

        try {
            const { name, age, city } = req.body
            console.log(name + age + city);
 
            const doc = new studentmodel({
                name: name,
                age: age,
                city: city
            })
            const result = await doc.save();

            // return res.redirect('/')
            res.render('created')
        }
        catch (err) {
            console.log(err);
        }
    }


    static getdata = async (req, res) => {
        try {
            const result = await studentmodel.find()
            console.log(result);
            res.render('index', { data: result })
        }
        catch (err) {
            console.log(err);
        }
    }

    static updatedata = async (req, res) => {
        try {
           
            res.render('update' )
        }
        catch (err) {
            console.log(err);
        }
    }


    static updatedoc =async(req, res)=>{
        
            try {
              
                 const result = await studentmodel.findById(req.params.id)
                //  console.log(result);
                res.render('update',{data:result})
            }
            catch (err) {
                console.log(err);
            }
        
       
    }
    static deletedoc = async (req, res) => {
        try {
            const result = await studentmodel.findByIdAndDelete(req.params.id)
            console.log(result);
            return res.redirect('/');
        }
        catch (err) {
            console.log(err);
        }
    }


}
export default studentcontroller

//  {data:result}