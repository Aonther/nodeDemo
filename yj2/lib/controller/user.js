var mongoose = require('mongoose');
import UserModel from '../models/user'

class User {
	constructor(){
		this.login = this.login.bind(this)
		// this.register = this.register.bind(this)
		// this.encryption = this.encryption.bind(this)
		// this.updateAvatar = this.updateAvatar.bind(this)
	}
	
	login(req, res, next){
        const user = UserModel.findOne({name: "xx"})
		
        res.render('index', { title: 'nihao' });

		const form = new formidable.IncomingForm();

        return false;
	}
	index(req, res, next){
		const user = UserModel.findOne({name: "xx"})
		
        res.render('index', { title: 'beijing' });

		const form = new formidable.IncomingForm();

        return false;
	}
}

export default new User()