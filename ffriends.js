const facebookProfile = {
	name:'',
	friends:0,
	messages:[],
	postMessage: (message)=>{
		return facebookProfile.messages.push(message);
	},
	deleteMessage: (index) => {
		if ( index > -1 ) {
			return facebookProfile.messages.splice(index,1);
		} 
	},
	addFriend: ()=>{
		return facebookProfile.friends ++;
	},
	removeFriend: ()=>{
		return facebookProfile.friends --;
	}
};