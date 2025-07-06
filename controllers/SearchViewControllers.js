import { RiAwardLine } from 'react-icons/ri';
import { UserList } from '../models/LoginModels.js'

export const getSearchView = async (req, res) => {
    try {
        const raw = req.query.data;
        console.log(raw);
        const { search_type } = JSON.parse(raw); // parse first!
        console.log(search_type);
         // sri 10

        if (search_type === 'user_list') {
            const userlist = await UserList.find(); // ✅ await!
            return res.status(200).json({ success : true , data: userlist });
        }
        else{
            return res.json({ success : false ,  error: 'Pass correct Parameter' });
        }
    } catch (err) {
        res.status(400).json({ success : false ,  error: 'Invalid JSON format in query param' });
    }
};
