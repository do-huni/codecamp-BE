import axios from 'axios';

const fetchAsync = () => {
	const result = axios.get("https://koreanjson.com/posts/1");
	console.log("비동기방식: ", result);	
}
const fetchSync = async () => {
	const result = await axios.get("https://koreanjson.com/posts/1");
	console.log("동기방식: ", result.data);
}


fetchSync();
fetchAsync();