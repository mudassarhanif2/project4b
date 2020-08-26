import React  from 'react';
import { Typewritter } from "./Components/Typewritter";
import { Header } from "./Components/Header";
import { Video } from './Components/Video';
import './App.css';


const App =()=>{
	return(
		<div>
			<Header />
			<Typewritter />
			<Video />
		</div>
	);
}
export default App;