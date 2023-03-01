import axios from "axios";
import apiconstants from "../static/apiconstants";
export default[
    index,
    show,
    update,
    store,
    destroy
];
function index(setStudents)
{
    const params = new URLSearchParams();
    const url = apiconstants.api_path+'students'
    axios.post(url,params)
    .then(res => {
        console.log(res)
        setStudents(res.data.data)
    })
    .catch(err => {
        console.error(err); 
    })

}
function show()
{
    
}
function update()
{
    
}
function store()
{
    
}
function destroy()
{
    
}